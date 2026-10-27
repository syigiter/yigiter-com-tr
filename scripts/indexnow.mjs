// IndexNow: canlı sitemap'teki URL'leri Bing/Yandex'e bildirir (ChatGPT araması ve Copilot Bing dizinini kullanır).
// Vercel production deploy'u bitince .github/workflows/indexnow.yml çalıştırır.
// Kullanım: node scripts/indexnow.mjs [--dry-run]
// ponytail: her deploy'da sitemap'in tamamı gönderilir (~35 URL); deploy sıklığı artarsa
// yalnız değişen sayfaları gönderecek şekilde daraltılmalı.
const SITE = process.env.INDEXNOW_SITE ?? 'https://www.yigiter.com.tr'; // yerel test: INDEXNOW_SITE=http://localhost:4321
const KEY = '85e1f950057e69342383a5cf995912f4'; // public/<KEY>.txt ile aynı olmalı
const dryRun = process.argv.includes('--dry-run');

const text = async (url) => {
  const res = await fetch(url, { headers: { 'Cache-Control': 'no-cache' } });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  return res.text();
};
const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

// Anahtar dosyası canlıda yoksa IndexNow isteği reddeder; önce doğrula.
const liveKey = (await text(`${SITE}/${KEY}.txt`)).trim();
if (liveKey !== KEY) throw new Error(`Canlı anahtar dosyası eşleşmiyor: "${liveKey}"`);

const sitemaps = locs(await text(`${SITE}/sitemap-index.xml`));
const urlList = (await Promise.all(sitemaps.map(async (s) => locs(await text(s))))).flat();
if (!urlList.length) throw new Error('Sitemap boş');

const payload = { host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList };
console.log(`${urlList.length} URL${dryRun ? ' (dry run, gönderilmedi)' : ''}`);
if (dryRun) {
  console.log(JSON.stringify(payload, null, 2));
} else {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  console.log(`IndexNow → HTTP ${res.status} ${await res.text()}`);
  // 200 ve 202 kabul; diğerleri (400/403/422/429) iş akışını kırmızıya düşürsün.
  if (res.status !== 200 && res.status !== 202) process.exit(1);
}
