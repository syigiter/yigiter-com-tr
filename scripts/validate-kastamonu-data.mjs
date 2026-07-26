import { access, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  catalogs,
  catalogsById,
  decorativeSurfaceSamples,
  doorpanSurfaceSamples,
  localCatalogs,
  productFamilies,
  productImages,
  productImagesById,
} from '../src/data/kastamonu-entegre.ts';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertUniqueIds(items, label) {
  const ids = items.map((item) => item.id);
  assert(new Set(ids).size === ids.length, `${label}: tekrarlanan kimlik bulundu.`);
}

function publicPathToWorkspacePath(publicPath) {
  assert(publicPath.startsWith('/'), `Public yolu / ile başlamalı: ${publicPath}`);
  const resolvedPath = path.resolve(rootDir, 'public', publicPath.slice(1));
  assert(
    resolvedPath.startsWith(`${path.resolve(rootDir, 'public')}${path.sep}`),
    `Public dışına çıkan yol: ${publicPath}`,
  );
  return resolvedPath;
}

assertUniqueIds(productFamilies, 'Ürün aileleri');
assertUniqueIds(productImages, 'Ürün görselleri');
assertUniqueIds(decorativeSurfaceSamples, 'Dekoratif yüzeyler');
assertUniqueIds(doorpanSurfaceSamples, 'Doorpan yüzeyleri');
assertUniqueIds(catalogs, 'Kataloglar');

assert(productFamilies.length === 14, 'Beklenen 14 ürün ailesi bulunamadı.');
assert(decorativeSurfaceSamples.length === 18, 'Beklenen 18 dekoratif yüzey bulunamadı.');
assert(doorpanSurfaceSamples.length === 7, 'Beklenen 7 Doorpan yüzeyi bulunamadı.');
assert(localCatalogs.length === 3, 'İlk yerel katalog paketinde 3 dosya olmalı.');

for (const product of productFamilies) {
  assert(product.claimStatus === 'official_source', `${product.id}: ürün iddia sınıfı hatalı.`);
  assert(
    product.availability.claimStatus === 'yigiter_confirmation_required',
    `${product.id}: stok/tedarik iddiası resmî ürün bilgisinden ayrılmamış.`,
  );
  assert(product.route.startsWith('/urunler/'), `${product.id}: ürün rotası geçersiz.`);

  if (product.heroImageId) {
    assert(productImagesById.has(product.heroImageId), `${product.id}: hero görseli bulunamadı.`);
  }

  for (const catalogId of product.catalogIds) {
    assert(catalogsById.has(catalogId), `${product.id}: ${catalogId} kataloğu bulunamadı.`);
  }
}

for (const image of [
  ...productImages,
  ...decorativeSurfaceSamples,
  ...doorpanSurfaceSamples,
]) {
  assert(image.width > 0 && image.height > 0, `${image.id}: görsel ölçüsü eksik.`);
  await access(publicPathToWorkspacePath(image.src));
}

for (const catalog of catalogs) {
  if (catalog.publicationStatus !== 'local') {
    assert(!catalog.localPath, `${catalog.id}: yerel olmayan katalog public yolu içeriyor.`);
    continue;
  }

  assert(catalog.localPath, `${catalog.id}: yerel katalog yolu eksik.`);
  assert(catalog.fileName, `${catalog.id}: yerel katalog dosya adı eksik.`);
  assert(catalog.fileBytes, `${catalog.id}: yerel katalog boyutu eksik.`);

  const catalogStats = await stat(publicPathToWorkspacePath(catalog.localPath));
  assert(catalogStats.size === catalog.fileBytes, `${catalog.id}: katalog boyutu veri modeliyle eşleşmiyor.`);
}

const serializedProducts = JSON.stringify(productFamilies).toLocaleLowerCase('tr-TR');
const blockedClaims = ['softmatt', '5.000+', '55+', 'türkiye lider', 'stoktan', 'en kısa sürede'];

for (const blockedClaim of blockedClaims) {
  assert(
    !serializedProducts.includes(blockedClaim),
    `Engellenmiş iddia veri modeline taşınmış: ${blockedClaim}`,
  );
}

process.stdout.write(
  `Doğrulandı: ${productFamilies.length} ürün ailesi, ` +
    `${decorativeSurfaceSamples.length + doorpanSurfaceSamples.length} yüzey, ` +
    `${localCatalogs.length} yerel katalog.\n`,
);
