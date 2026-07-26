import { createHash } from 'node:crypto';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = path.join(rootDir, 'docs/kastamonu-entegre-asset-manifest.csv');
const allowedSourceHost = 'www.kastamonuentegre.com';
const syncPdfIds = new Set(['ke-pdf-002', 'ke-pdf-014', 'ke-pdf-015']);
const outputColumns = [
  'asset_id',
  'product_family',
  'asset_type',
  'source_url',
  'source_page',
  'original_filename',
  'local_path',
  'captured_at',
  'file_hash',
  'license_basis',
  'usage_pages',
  'alt_text',
  'status',
  'notes',
  'source_bytes',
  'source_archive_path',
  'local_file_hash',
  'local_bytes',
  'local_width',
  'local_height',
  'pipeline_action',
];

function parseCsvLine(line) {
  const values = [];
  let value = '';
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];

    if (character === '"') {
      if (inQuotes && line[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (character === ',' && !inQuotes) {
      values.push(value);
      value = '';
    } else {
      value += character;
    }
  }

  if (inQuotes) {
    throw new Error('Manifestte kapanmamış CSV tırnağı bulundu.');
  }

  values.push(value);
  return values;
}

function parseCsv(content) {
  const lines = content.trimEnd().split(/\r?\n/);
  const headers = parseCsvLine(lines.shift());

  return lines.map((line, index) => {
    const values = parseCsvLine(line);

    if (values.length !== headers.length) {
      throw new Error(`Manifest satırı ${index + 2}: ${headers.length} alan beklenirken ${values.length} alan bulundu.`);
    }

    return Object.fromEntries(headers.map((header, columnIndex) => [header, values[columnIndex]]));
  });
}

function encodeCsvValue(value) {
  return `"${String(value ?? '').replaceAll('"', '""')}"`;
}

function serializeCsv(rows) {
  const lines = [
    outputColumns.map(encodeCsvValue).join(','),
    ...rows.map((row) => outputColumns.map((column) => encodeCsvValue(row[column])).join(',')),
  ];

  return `${lines.join('\n')}\n`;
}

function sha256(buffer) {
  return `sha256:${createHash('sha256').update(buffer).digest('hex')}`;
}

function resolveWorkspacePath(relativePath) {
  if (!relativePath || path.isAbsolute(relativePath)) {
    throw new Error(`Geçersiz göreli dosya yolu: ${relativePath}`);
  }

  const resolvedPath = path.resolve(rootDir, relativePath);
  const workspacePrefix = `${rootDir}${path.sep}`;

  if (!resolvedPath.startsWith(workspacePrefix)) {
    throw new Error(`Çalışma alanı dışına çıkan dosya yolu: ${relativePath}`);
  }

  return resolvedPath;
}

async function fetchSource(row) {
  const sourceUrl = new URL(row.source_url);

  if (sourceUrl.protocol !== 'https:' || sourceUrl.hostname !== allowedSourceHost) {
    throw new Error(`${row.asset_id}: izin verilmeyen kaynak adresi ${row.source_url}`);
  }

  const response = await fetch(sourceUrl, {
    headers: { 'user-agent': 'Yigiter asset sync/1.0' },
    redirect: 'follow',
    signal: AbortSignal.timeout(60_000),
  });

  if (!response.ok) {
    throw new Error(`${row.asset_id}: kaynak ${response.status} döndürdü.`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function writeBuffer(relativePath, buffer) {
  const absolutePath = resolveWorkspacePath(relativePath);
  await mkdir(path.dirname(absolutePath), { recursive: true });
  await writeFile(absolutePath, buffer);
}

async function optimizeWebImage(row, sourceBuffer) {
  const isSurface = row.asset_type === 'surface-icon';
  const maxDimension = isSurface ? 512 : 1600;
  const byteBudget = isSurface ? 80_000 : 200_000;
  const sourceIsSvg = row.original_filename.toLowerCase().endsWith('.svg');
  const image = sharp(sourceBuffer, sourceIsSvg ? { density: 180 } : undefined).rotate();
  const metadata = await image.metadata();
  let quality = isSurface ? 78 : 82;
  let outputBuffer;

  do {
    const pipeline = image
      .clone()
      .resize({
        width: maxDimension,
        height: maxDimension,
        fit: 'inside',
        withoutEnlargement: !sourceIsSvg,
      })
      .webp({ quality, effort: 6, smartSubsample: true });

    outputBuffer = await pipeline.toBuffer();
    quality -= 6;
  } while (outputBuffer.byteLength > byteBudget && quality >= 48);

  if (outputBuffer.byteLength > byteBudget) {
    throw new Error(`${row.asset_id}: ${outputBuffer.byteLength} bayt ile ${byteBudget} bayt bütçesini aşıyor.`);
  }

  const outputMetadata = await sharp(outputBuffer).metadata();

  if (!outputMetadata.width || !outputMetadata.height) {
    throw new Error(`${row.asset_id}: optimize görsel ölçüleri okunamadı (kaynak ${metadata.width}×${metadata.height}).`);
  }

  return {
    buffer: outputBuffer,
    width: outputMetadata.width,
    height: outputMetadata.height,
  };
}

function archivePathFor(row) {
  return path.posix.join(
    'assets/kastamonu-entegre/original',
    row.product_family,
    row.original_filename,
  );
}

async function syncRow(row) {
  if (row.status !== 'onaylı') {
    return {
      ...row,
      source_bytes: row.source_bytes || '',
      source_archive_path: row.source_archive_path || '',
      local_file_hash: row.local_file_hash || '',
      local_bytes: row.local_bytes || '',
      local_width: row.local_width || '',
      local_height: row.local_height || '',
      pipeline_action: 'skip',
    };
  }

  const sourceBuffer = await fetchSource(row);
  const sourceHash = sha256(sourceBuffer);
  const isVisual = row.asset_type === 'image' || row.asset_type === 'surface-icon';
  const isSyncedPdf = syncPdfIds.has(row.asset_id);
  let nextRow = {
    ...row,
    file_hash: sourceHash,
    source_bytes: String(sourceBuffer.byteLength),
    source_archive_path: '',
    local_file_hash: '',
    local_bytes: '',
    local_width: '',
    local_height: '',
    pipeline_action: 'metadata-only',
  };

  if (isVisual) {
    const sourceArchivePath = archivePathFor(row);
    const localPath = row.local_path.replace(/\.[^.]+$/, '.webp');
    const optimized = await optimizeWebImage(row, sourceBuffer);

    await writeBuffer(sourceArchivePath, sourceBuffer);
    await writeBuffer(localPath, optimized.buffer);

    nextRow = {
      ...nextRow,
      local_path: localPath,
      source_archive_path: sourceArchivePath,
      local_file_hash: sha256(optimized.buffer),
      local_bytes: String(optimized.buffer.byteLength),
      local_width: String(optimized.width),
      local_height: String(optimized.height),
      pipeline_action: 'optimize-and-archive',
    };
  } else if (isSyncedPdf) {
    await writeBuffer(row.local_path, sourceBuffer);

    nextRow = {
      ...nextRow,
      source_archive_path: row.local_path,
      local_file_hash: sourceHash,
      local_bytes: String(sourceBuffer.byteLength),
      pipeline_action: 'copy-original',
    };
  }

  return nextRow;
}

async function syncManifest() {
  const rows = parseCsv(await readFile(manifestPath, 'utf8'));
  const ids = new Set();
  const syncedRows = [];

  for (const row of rows) {
    if (ids.has(row.asset_id)) {
      throw new Error(`Tekrarlanan asset_id: ${row.asset_id}`);
    }

    ids.add(row.asset_id);
    process.stdout.write(`sync ${row.asset_id}\n`);
    syncedRows.push(await syncRow(row));
  }

  await writeFile(manifestPath, serializeCsv(syncedRows), 'utf8');
  process.stdout.write(`Manifest güncellendi: ${syncedRows.length} kayıt.\n`);
}

async function verifyManifest() {
  const rows = parseCsv(await readFile(manifestPath, 'utf8'));
  const ids = new Set();
  let localFiles = 0;
  let publicBytes = 0;
  let archiveBytes = 0;

  for (const row of rows) {
    if (ids.has(row.asset_id)) {
      throw new Error(`Tekrarlanan asset_id: ${row.asset_id}`);
    }

    ids.add(row.asset_id);

    if (row.status === 'onaylı' && !row.file_hash.startsWith('sha256:')) {
      throw new Error(`${row.asset_id}: onaylı kaynak hash'i eksik.`);
    }

    if (!row.local_file_hash) {
      continue;
    }

    const localBuffer = await readFile(resolveWorkspacePath(row.local_path));
    const localStats = await stat(resolveWorkspacePath(row.local_path));

    if (sha256(localBuffer) !== row.local_file_hash) {
      throw new Error(`${row.asset_id}: yerel dosya hash'i manifestle eşleşmiyor.`);
    }

    if (String(localStats.size) !== row.local_bytes) {
      throw new Error(`${row.asset_id}: yerel dosya boyutu manifestle eşleşmiyor.`);
    }

    if (row.asset_type === 'surface-icon' && localStats.size > 80_000) {
      throw new Error(`${row.asset_id}: yüzey görseli 80 KB bütçesini aşıyor.`);
    }

    if (row.asset_type === 'image' && localStats.size > 200_000) {
      throw new Error(`${row.asset_id}: içerik görseli 200 KB bütçesini aşıyor.`);
    }

    if (row.local_path.startsWith('public/')) {
      publicBytes += localStats.size;
    }

    localFiles += 1;

    if (row.source_archive_path && row.source_archive_path !== row.local_path) {
      const archiveBuffer = await readFile(resolveWorkspacePath(row.source_archive_path));

      if (sha256(archiveBuffer) !== row.file_hash) {
        throw new Error(`${row.asset_id}: arşiv dosyası kaynak hash'iyle eşleşmiyor.`);
      }

      archiveBytes += archiveBuffer.byteLength;
    }
  }

  process.stdout.write(
    `Doğrulandı: ${rows.length} kayıt, ${localFiles} yerel dosya, ` +
      `${publicBytes} public bayt, ${archiveBytes} arşiv bayt.\n`,
  );
}

const mode = process.argv[2];

if (mode === '--sync') {
  await syncManifest();
} else if (mode === '--verify') {
  await verifyManifest();
} else {
  throw new Error('Kullanım: --sync veya --verify');
}
