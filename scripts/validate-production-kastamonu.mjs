#!/usr/bin/env node

const originArgIndex = process.argv.indexOf('--origin');
const origin = (originArgIndex >= 0 ? process.argv[originArgIndex + 1] : undefined)
  ?.replace(/\/+$/, '') ?? 'https://www.yigiter.com.tr';
const canonicalOriginArgIndex = process.argv.indexOf('--canonical-origin');
const canonicalOrigin = (
  canonicalOriginArgIndex >= 0 ? process.argv[canonicalOriginArgIndex + 1] : undefined
)?.replace(/\/+$/, '') ?? 'https://www.yigiter.com.tr';

const productRoutes = [
  {
    path: '/urunler/kastamonu-entegre/',
    schemaTypes: ['CollectionPage', 'ItemList'],
  },
  {
    path: '/urunler/kastamonu-entegre/dekoratif-panel/',
    schemaTypes: ['CollectionPage', 'ItemList'],
  },
  {
    path: '/urunler/kastamonu-entegre/mdf/',
    schemaTypes: ['Product'],
  },
  {
    path: '/urunler/kastamonu-entegre/mdflam/',
    schemaTypes: ['Product'],
  },
  {
    path: '/urunler/kastamonu-entegre/yongalevha/',
    schemaTypes: ['ProductGroup'],
  },
  {
    path: '/urunler/kastamonu-entegre/kapi-paneli/',
    schemaTypes: ['ProductGroup'],
  },
];
const pageRoutes = [...productRoutes, { path: '/teklif-al/', schemaTypes: [] }];
const failures = [];
const assets = new Set();
const fetchAttempts = 3;
const assetConcurrency = 6;

function fail(message) {
  failures.push(message);
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function networkErrorMessage(error) {
  const cause = error?.cause;
  return cause?.code ?? error?.code ?? error?.message ?? 'bilinmeyen ağ hatası';
}

async function fetchWithRetry(url, options = {}) {
  let lastError;

  for (let attempt = 1; attempt <= fetchAttempts; attempt += 1) {
    try {
      return await fetch(url, options);
    } catch (error) {
      lastError = error;
      if (attempt < fetchAttempts) await wait(250 * attempt);
    }
  }

  throw lastError;
}

async function mapWithConcurrency(items, concurrency, worker) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await worker(items[currentIndex]);
    }
  }

  const workerCount = Math.min(concurrency, items.length);
  await Promise.all(Array.from({ length: workerCount }, () => runWorker()));
  return results;
}

async function request(path, options = {}) {
  try {
    return await fetchWithRetry(`${origin}${path}`, options);
  } catch (error) {
    fail(`${path}: ağ hatası (${networkErrorMessage(error)})`);
    return null;
  }
}

function jsonLdTypes(html, path) {
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    .map((match) => {
      try {
        return JSON.parse(match[1]);
      } catch {
        fail(`${path}: geçersiz JSON-LD`);
        return {};
      }
    });
  return schemas.flatMap((schema) =>
    Array.isArray(schema['@type']) ? schema['@type'] : [schema['@type']],
  );
}

for (const route of pageRoutes) {
  const response = await request(route.path, { redirect: 'manual' });
  if (!response) continue;

  if (response.status !== 200) {
    fail(`${route.path}: HTTP ${response.status}`);
    continue;
  }

  const html = await response.text();
  const h1Count = (html.match(/<h1\b/g) ?? []).length;
  if (h1Count !== 1) fail(`${route.path}: H1 sayısı ${h1Count}`);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== `${canonicalOrigin}${route.path}`) {
    fail(`${route.path}: canonical ${canonical || 'eksik'}`);
  }

  const csp = response.headers.get('content-security-policy') ?? '';
  for (const requirement of [
    "default-src 'self'",
    "script-src 'self'",
    'https://*.clarity.ms',
    'https://api.web3forms.com',
  ]) {
    if (!csp.includes(requirement)) fail(`${route.path}: CSP içinde ${requirement} eksik`);
  }

  if (!html.includes('<vercel-analytics')) {
    fail(`${route.path}: Vercel Analytics bileşeni eksik`);
  }
  if (!html.includes('data-analytics-event')) {
    fail(`${route.path}: dönüşüm ölçüm etiketi eksik`);
  }

  const types = jsonLdTypes(html, route.path);
  for (const type of route.schemaTypes) {
    if (!types.includes(type)) fail(`${route.path}: ${type} schema eksik`);
  }

  for (const match of html.matchAll(/(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g)) {
    if (match[1].startsWith('/')) assets.add(match[1]);
  }
}

const assetResults = await mapWithConcurrency(
  [...assets],
  assetConcurrency,
  async (path) => {
    try {
      let response = await fetchWithRetry(`${origin}${path}`, {
        method: 'HEAD',
        redirect: 'follow',
      });
      if (response.status === 405) {
        response = await fetchWithRetry(`${origin}${path}`, { redirect: 'follow' });
      }
      return { path, status: response.status, ok: response.ok };
    } catch (error) {
      return {
        path,
        status: `ağ hatası (${networkErrorMessage(error)})`,
        ok: false,
      };
    }
  },
);
for (const asset of assetResults) {
  if (!asset.ok) fail(`${asset.path}: asset HTTP ${asset.status}`);
}

const [robots, sitemapIndex, sitemapResponse, notFound] = await Promise.all([
  request('/robots.txt'),
  request('/sitemap-index.xml'),
  request('/sitemap-0.xml'),
  request('/codex-kastamonu-production-404-check', { redirect: 'manual' }),
]);
if (robots && !robots.ok) fail(`/robots.txt: HTTP ${robots.status}`);
if (sitemapIndex && !sitemapIndex.ok) fail(`/sitemap-index.xml: HTTP ${sitemapIndex.status}`);
if (sitemapResponse && !sitemapResponse.ok) fail(`/sitemap-0.xml: HTTP ${sitemapResponse.status}`);
if (notFound && notFound.status !== 404) fail(`404 davranışı: HTTP ${notFound.status}`);

if (sitemapResponse?.ok) {
  const sitemap = await sitemapResponse.text();
  for (const route of productRoutes) {
    if (!sitemap.includes(`<loc>${canonicalOrigin}${route.path}</loc>`)) {
      fail(`${route.path}: sitemap kaydı eksik`);
    }
  }
}

if (failures.length) {
  console.error(`Production QA başarısız (${failures.length} bulgu):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Production QA başarılı: ${pageRoutes.length} sayfa, ${assets.size} yerel hedef, ` +
  `${productRoutes.length} sitemap/schema rotası, CSP/Analytics ve 404 doğrulandı.`,
);
