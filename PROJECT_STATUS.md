# Yiğiter Sitesi Proje Durumu

## Genel Bilgi

- Site: https://www.yigiter.com.tr/
- Repo: git@github.com:syigiter/yigiter-com-tr.git
- Production platform: Vercel
- Local clean repo path: `/Users/sakiryigiter/Desktop/yigiter-com-tr-clean`
- Teknoloji: Astro tabanlı statik site
- Ana hedef: Yiğiter Orman Ürünleri için hızlı, güvenilir, SEO uyumlu ve B2B teklif talebi üreten kurumsal web sitesi

## Güncel Durum — 2026-07-01

- Son production-impact sprint: Sprint 2.7 — English Export Internal Link & Discovery, PR #47.
- Sprint 2.7 merge commit: `d386df9647b89079b469b311bf2e424bc394f3f0`.
- Sprint 2.7 production deploy: success / completed.
- Son tooling/reporting sprint: Sprint 2.5C — Vercel Analytics Local Report Script, PR #48.
- Sprint 2.5C merge commit: `fea8f72d6f12b86a4d170cf4b107dcd52c9c0f58`.
- Vercel CLI bağlantısı aktif: `sakiryigiter-1012s-projects/yigiter-com-tr`.
- Vercel project ID: `prj_GvrEwz9NKvYFnGw2PR3yP8VKBcoY`.
- Local Vercel dosyaları `.vercel/` ve `.env.local` commit dışında tutuluyor.

## İngilizce İhracat Sayfası Durumu

- Canlı sayfa: `/en/interior-door-components/`.
- Sayfa sitemap içinde ve canlıda 200 dönüyor.
- Sprint 2.7 sonrası site içinde doğal iç link alıyor:
  - Footer: `English Export`
  - Ana sayfa ihracat / international buyers linki
  - `/ihracat/` sayfası international buyers linki
- Header dil seçici eklenmedi; bu bilinçli olarak kapsam dışında bırakıldı.
- `/teklif-al?urun=interior-door-components` form mapping korunuyor:
  - `product_details = interior-door-components`
  - `product_group = Kapı komponentleri`
- Sprint 2.7 canlı browser kontrolü: console error 0, failed request 0, CSP error 0.

## GSC ve Analytics Takip Durumu

- Sprint 2.5B Search Console takip raporu üretildi:
  - `reports/gsc-sprint-2-5b-2026-07-01.md`
  - `reports/gsc-sprint-2-5b-2026-07-01.csv`
- Kod değişikliği, commit ve PR yapılmadı.
- Kontrol edilen URL sayısı: 17.
- Kritik index/canonical sorunu yok.
- 7 ürün SEO sayfası indexed/canonical match durumda.
- Sitemap sağlıklı: warning 0, error 0.
- `/en/interior-door-components/` GSC durumu:
  - Sitemap'te var.
  - Canlı canonical doğru.
  - Noindex yok.
  - GSC'de henüz `URL Google tarafından bilinmiyor`.
  - Sayfa yeni olduğu için beklenen durum; karar: bekle ve ölç.
- Bazı eski sayfalarda GSC no-www canonical geçmişi görünebilir; canlı canonical www olduğu için şimdilik teknik müdahale değil takip öneriliyor.

## Vercel Analytics Local Raporlama Durumu

- Sprint 2.5C ile read-only lokal rapor script'i eklendi:
  - `scripts/vercel_analytics_report.py`
- Script Vercel CLI `vercel metrics` üzerinden Web Analytics ve Speed Insights verisi okur.
- Raw JSON diske yazılmaz; Markdown rapor `reports/` altında üretilir ve commit dışı kalır.
- İlk rapor: `reports/vercel-analytics-2026-07-01.md`.
- İlk Vercel Analytics bulguları:
  - Son 7 gün pageviews: 112.
  - `/en/interior-door-components/` pageviews: 1.
  - `/teklif-al/` pageviews: 0.
  - En yüksek ülke: United States, 76 pageview.
  - Referrer: direct / empty 91, bing.com 10, google.com 10.
  - Speed Insights p75 LCP: `/` 1240ms, `/en/interior-door-components` 431ms, `/urunler` 704ms.
- Vercel `request_path` query string'i ayrı kırılım olarak vermeyebilir; `/teklif-al?urun=...` ana `/teklif-al` path'i üzerinden değerlendirilir.

## Canlı Kalite Durumu

Son bilinen sonuçlar:

- GTmetrix: Grade A
- GTmetrix Performance: 100%
- GTmetrix Structure: 100%
- PageSpeed Mobile Performance: 100
- PageSpeed Accessibility: 95
- PageSpeed Best Practices: 100
- PageSpeed SEO: 100

## Canlı Route Durumu

Son production doğrulamalarına göre:

- `/` -> 200
- `/urunler` -> 200
- `/urunler/` -> 200
- `/urunler/kapi-pervazi/` -> 200
- `/urunler/kapi-kasasi/` -> 200
- `/urunler/melamin-kapi-yuzeyi/` -> 200
- `/urunler/pvc-film/` -> 200
- `/urunler/mdf/` -> 200
- `/urunler/mdflam/` -> 200
- `/urunler/kapi-paneli/` -> 200
- `/urunler/kapi-imalat-malzemeleri/pvc-film/` -> 308 -> `/urunler/pvc-film/`
- `/teklif-al` -> 200
- `/kvkk` -> 200
- `/hizmet-bolgesi` -> 200
- `/subeler` -> 200
- invalid route -> custom 404

## Navigasyon Durumu

- Desktop Header "Ürünler" tıklanınca `/urunler/` açılıyor.
- Mobil menü "Ürünler" tıklanınca `/urunler/` açılıyor.
- Ürünler yanındaki ok butonu dropdown açma/kapatma davranışını koruyor.
- Klavye Enter ile açma ve Escape ile kapama davranışı korunmuş.
- Ana sayfa ürün CTA'ları `/urunler/` sayfasına gidiyor.

## Header / Güvenlik / SEO Durumu

- `content-security-policy` geliyor.
- `cache-control` geliyor.
- `x-robots-tag: noindex` gelmiyor.
- Canonical, meta description, OG/Twitter bilgileri `BaseLayout` üzerinden geliyor.
- KVKK sayfası noindex değil.
- Sitemap üretimi mevcut Astro yapısına göre devam ediyor.
- Vercel Web Analytics ve Speed Insights `BaseLayout` üzerinden tüm sayfalara eklendi.

## Form Durumu

- `/teklif-al` formu canlıda görünüyor.
- Sprint 2.2C sonrası form, B2B teklif taleplerini daha iyi toplamak için ek alanlarla güçlendirildi.
- `?urun=kapi-pervazi` gibi query parametreleri form alanına doluyor.
- KVKK checkbox required.
- KVKK linki `/kvkk` sayfasını yeni sekmede açıyor.
- Kullanıcı canlı Web3Forms mail testinin başarılı olduğunu ve mailin ulaştığını doğruladı.
- Son sprintlerde Web3Forms entegrasyon akışı değiştirilmedi.
- Form submit akışına son sprintlerde dokunulmadı.

## Repo Durumu

- `git status` temiz.
- `npm run build` başarılı.
- 37 sayfa üretiliyor.
- `/kvkk/index.html` dahil.
- `/urunler/kapi-pervazi/index.html` dahil.
- `/urunler/kapi-kasasi/index.html` dahil.
- `/urunler/melamin-kapi-yuzeyi/index.html` dahil.
- `/urunler/pvc-film/index.html` dahil.
- `dist/urunler/kapi-imalat-malzemeleri/pvc-film/` artık üretilmiyor.
- `/urunler/mdflam/index.html` dahil.
- `/urunler/kapi-paneli/index.html` dahil.
- Önceden build'i bozan untracked `"... 2"` kopya dosyalar temizlendi.
- Tracked dosyalara temizlik sırasında dokunulmadı.

## Ürün Detay SEO Sayfaları

- `/urunler/kapi-pervazi/` — Kapı Pervazı SEO sayfası yayında
  - B2B hedef: kapı üreticileri, bayiler, proje müşterileri, montaj ekipleri
  - CTA: `/teklif-al?urun=kapi-pervazi`
  - Query prefill çalışıyor: `product_details` ve `product_group = Kapı pervazı`
  - Canonical: `https://yigiter.com.tr/urunler/kapi-pervazi/`

- `/urunler/kapi-kasasi/` — Kapı Kasası SEO sayfası yayında
  - B2B hedef: iç kapı üreticileri, montaj bayileri, proje firmaları, toptan kapı malzemesi alıcıları
  - CTA: `/teklif-al?urun=kapi-kasasi`
  - Query prefill çalışıyor: `product_details` ve `product_group = Kapı kasası`
  - Canonical: `https://yigiter.com.tr/urunler/kapi-kasasi/`

- `/urunler/melamin-kapi-yuzeyi/` — Melamin Kapı Yüzeyi SEO sayfası yayında
  - B2B hedef: kapı kanadı üreticileri, seri üretim yapan firmalar, toptan alıcılar, bayiler
  - CTA: `/teklif-al?urun=melamin-kapi-yuzeyi`
  - Query prefill çalışıyor: `product_details` ve `product_group = Melamin kapı yüzeyi`
  - Canonical: `https://yigiter.com.tr/urunler/melamin-kapi-yuzeyi/`
  - Not: Header/Footer/diğer sayfalardaki trailing slash'siz referanslar ayrı temizlik sprintine bırakıldı.

- `/urunler/pvc-film/` — PVC Film SEO sayfası yayında
  - B2B hedef: kapı üreticileri, mobilya üreticileri, membran pres kullanan firmalar, yüzey kaplama atölyeleri, bayiler ve toptancılar
  - CTA: `/teklif-al?urun=pvc-film`
  - Query prefill çalışıyor: `product_details` ve `product_group = PVC film`
  - Canonical: `https://yigiter.com.tr/urunler/pvc-film/`
  - Eski duplicate: `/urunler/kapi-imalat-malzemeleri/pvc-film/` → 308 permanent redirect → `/urunler/pvc-film/` (PR #26 ile temizlendi).

- `/urunler/mdf/` — MDF SEO sayfası yayında
  - B2B hedef: kapı üreticileri, mobilya üreticileri, panel işleyen firmalar, CNC kesim ve üretim atölyeleri, bayiler ve toptancılar
  - CTA: `/teklif-al?urun=mdf`
  - Query prefill çalışıyor: `MDF / MDFLAM`
  - Canonical: `https://www.yigiter.com.tr/urunler/mdf/`

- `/urunler/mdflam/` — MDFLAM SEO sayfası yayında
  - B2B hedef: mobilya üreticileri, kapı üreticileri, panel işleyen firmalar, dekoratif yüzey kullanan üreticiler, bayiler ve toptancılar
  - CTA: `/teklif-al?urun=mdflam`
  - Query prefill çalışıyor: `MDF / MDFLAM`
  - Canonical: `https://www.yigiter.com.tr/urunler/mdflam/`

- `/urunler/kapi-paneli/` — Genel Kapı Paneli SEO sayfası yayında (canonical kategori sayfası)
  - B2B hedef: kapı üreticileri, iç kapı üretim firmaları, panel işleyen firmalar, proje bazlı kapı tedarikçileri, bayiler ve toptancılar
  - CTA: `/teklif-al?urun=kapi-paneli`
  - Query prefill çalışıyor: `Yonga levha / kapı paneli`
  - Canonical: `https://www.yigiter.com.tr/urunler/kapi-paneli/`

- `/urunler/kastamonu-entegre/kapi-paneli/` — Kastamonu Entegre marka odaklı sayfa olarak korunuyor
  - H1: `Kastamonu Entegre Kapı Paneli` (PR #36 ile ayrıştırıldı)
  - Canonical kendine bakıyor
  - noindex yok
  - Genel `/urunler/kapi-paneli/` sayfasına bağlamlı iç link mevcut
  - Duplicate risk: azaltıldı (redirect/noindex/canonical değişikliği yapılmadı)

## Ürün SEO Serisi Durumu

Sprint 2.3 ürün SEO serisi tamamlandı. Kapanış raporu: `SEO_CLOSING_REPORT.md`.

- 7 ürün detay SEO sayfası production'da aktif.
- Tüm sayfalar 200, canonical www standardında, sitemap'te, noindex yok.
- Query prefill çalışıyor (7 ürün).
- Header/Footer trailing slash temizliği tamamlandı.
- Kalan kritik risk yok.

## Trailing Slash Temizliği Durumu

PR #38 ile Header/Footer ve fallback link trailing slash temizliği tamamlandı.

- Header ve footer'daki iç linkler trailing slash standardına getirildi.
- `/urunler` kart linkleri temizlendi:
  - `/urunler/kapi-komponentleri/`
  - `/urunler/genc-boya/`
  - Tüm ürün detay SEO linkleri trailing slash'lı.
- Kastamonu Entegre alt sayfalarındaki breadcrumb linkleri düzeltildi.
- Home component CTA linkleri trailing slash standardına getirildi.
- `quoteHref` ve query'li teklif linkleri korunmuştur.
- Production doğrulama: 24 route → 200, 7 query teklif linki → 200.
- Build: 37 sayfa.
- Merge commit: `8887207`.

## Son Production Durumu

- Sprint 1, Sprint 1.1, Sprint 1.2, Sprint 2.1, Sprint 2.2A, Sprint 2.2B, Sprint 2.2C, Sprint 2.3A, Sprint 2.3B, Sprint 2.3C, Sprint 2.3D, SEO Cleanup (PVC Film duplicate), Canonical Domain Alignment, Sprint 2.3E, Sprint 2.3F, Sprint 2.3G, Kapı Paneli Duplicate Ayrıştırma, Header/Footer Trailing Slash Temizliği, Vercel Analytics/Speed Insights entegrasyonu, Sprint 2.7 ve Sprint 2.5C tamamlandı.
- Son production deploy başarılı.
- Son production-impact sprint: Sprint 2.7 — English Export Internal Link & Discovery, PR #47.
- Son tooling/reporting sprint: Sprint 2.5C — Vercel Analytics Local Report Script, PR #48.

## Vercel Analytics / Speed Insights Durumu

- Vercel Web Analytics ve Speed Insights entegrasyonu tamamlandı.
- Paketler: `@vercel/analytics`, `@vercel/speed-insights`.
- Entegrasyon noktası: `src/layouts/BaseLayout.astro`.
- `npm run build` başarılı.
- Production deploy Vercel'de `Ready`.
- Canlı kontrol: `https://www.yigiter.com.tr` HTTP/2 200.
- Local raporlama script'i: `scripts/vercel_analytics_report.py`.
- Not: Vercel metrikleri artık panel yanında CLI/script ile de okunabilir.

## Son Production Commit / Son Sprint

- Son production-impact sprint: PR #47 — Sprint 2.7 English Export Internal Link & Discovery
- Merge commit: `d386df9647b89079b469b311bf2e424bc394f3f0`
- Kapsam: Footer, ana sayfa ve `/ihracat/` üzerinden `/en/interior-door-components/` sayfasına düşük riskli iç linkler
- Production deploy: success

## Son Tooling / Reporting Sprint

- Son tooling sprint: PR #48 — Sprint 2.5C Vercel Analytics Local Report Script
- Merge commit: `fea8f72d6f12b86a4d170cf4b107dcd52c9c0f58`
- Kapsam: read-only Vercel Analytics / Speed Insights Markdown rapor script'i
- Site davranışı: değişmedi

## Son Production Commit / Son Hotfix

- Son hotfix: PR #14 — Hotfix products navigation link
- Merge commit: `93e81c0`
- Amaç: Header ve mobil menüde Ürünler linkinin gerçek `/urunler/` linki olarak çalışmasını sağlamak.
- Production deploy: success

## Son Sprint

- Sprint 2.3G — Kapı Paneli SEO Ürün Detay Sayfası tamamlandı.
- Yedinci ürün detay SEO sayfası `/urunler/kapi-paneli/` production'a alındı.
- Merge commit: `9f12720`

## Canonical Domain Standardı

- Site genelinde canonical domain: `https://www.yigiter.com.tr`
- `astro.config.mjs` → `site: 'https://www.yigiter.com.tr'`
- Sitemap URL'leri: `https://www.yigiter.com.tr/...`
- Canonical URL'ler (tüm sayfalar):
  - `/` → `https://www.yigiter.com.tr/`
  - `/urunler/` → `https://www.yigiter.com.tr/urunler/`
  - `/urunler/kapi-pervazi/` → `https://www.yigiter.com.tr/urunler/kapi-pervazi/`
  - `/urunler/kapi-kasasi/` → `https://www.yigiter.com.tr/urunler/kapi-kasasi/`
  - `/urunler/melamin-kapi-yuzeyi/` → `https://www.yigiter.com.tr/urunler/melamin-kapi-yuzeyi/`
  - `/urunler/pvc-film/` → `https://www.yigiter.com.tr/urunler/pvc-film/`
