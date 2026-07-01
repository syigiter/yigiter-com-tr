# Yiğiter Sitesi Proje Durumu

## Genel Bilgi

- Site: https://www.yigiter.com.tr/
- Repo: git@github.com:syigiter/yigiter-com-tr.git
- Production platform: Vercel
- Local clean repo path: `/Users/sakiryigiter/Desktop/yigiter-com-tr-clean`
- Teknoloji: Astro tabanlı statik site
- Ana hedef: Yiğiter Orman Ürünleri için hızlı, güvenilir, SEO uyumlu ve B2B teklif talebi üreten kurumsal web sitesi

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
- `/teklif-al?urun=interior-door-components` İngilizce ihracat landing page CTA'sından geliyor ve `product_group = Kapı komponentleri` seçiyor.
- KVKK checkbox required.
- KVKK linki `/kvkk` sayfasını yeni sekmede açıyor.
- Kullanıcı canlı Web3Forms mail testinin başarılı olduğunu ve mailin ulaştığını doğruladı.
- Son sprintlerde Web3Forms entegrasyon akışı değiştirilmedi.
- Form submit akışına son sprintlerde dokunulmadı.

## Repo Durumu

- Tracked dosyalar açısından çalışma ağacı temiz.
- `SEARCH_CONSOLE_AUDIT 2.md` ve `reports/` commit dışı/untracked takip dosyaları olarak durabilir.
- `npm run build` başarılı.
- 38 sayfa üretiliyor.
- `/en/interior-door-components/index.html` dahil.
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
  - Canonical: `https://www.yigiter.com.tr/urunler/kapi-pervazi/`

- `/urunler/kapi-kasasi/` — Kapı Kasası SEO sayfası yayında
  - B2B hedef: iç kapı üreticileri, montaj bayileri, proje firmaları, toptan kapı malzemesi alıcıları
  - CTA: `/teklif-al?urun=kapi-kasasi`
  - Query prefill çalışıyor: `product_details` ve `product_group = Kapı kasası`
  - Canonical: `https://www.yigiter.com.tr/urunler/kapi-kasasi/`

- `/urunler/melamin-kapi-yuzeyi/` — Melamin Kapı Yüzeyi SEO sayfası yayında
  - B2B hedef: kapı kanadı üreticileri, seri üretim yapan firmalar, toptan alıcılar, bayiler
  - CTA: `/teklif-al?urun=melamin-kapi-yuzeyi`
  - Query prefill çalışıyor: `product_details` ve `product_group = Melamin kapı yüzeyi`
  - Canonical: `https://www.yigiter.com.tr/urunler/melamin-kapi-yuzeyi/`
  - Not: Header/Footer/diğer sayfalardaki trailing slash'siz referanslar ayrı temizlik sprintine bırakıldı.

- `/urunler/pvc-film/` — PVC Film SEO sayfası yayında
  - B2B hedef: kapı üreticileri, mobilya üreticileri, membran pres kullanan firmalar, yüzey kaplama atölyeleri, bayiler ve toptancılar
  - CTA: `/teklif-al?urun=pvc-film`
  - Query prefill çalışıyor: `product_details` ve `product_group = PVC film`
  - Canonical: `https://www.yigiter.com.tr/urunler/pvc-film/`
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

## Sprint 2.4 / 2.5 / 2.6 Durumu

- Sprint 2.4 Search Visibility ve B2B Door Components SEO tamamlandı.
  - `/subeler/` ve `/iletisim/` metadata güncellendi.
  - `/urunler/kapi-komponentleri/` B2B SEO odağında güçlendirildi.
  - 7 ürün detay sayfasından `/urunler/kapi-komponentleri/` sayfasına doğal iç linkler eklendi veya güncellendi.
  - Merge commit: `1060780`.
- Sprint 2.5A Google Search Console yerel raporlama script'i eklendi.
  - `scripts/gsc_check.py`, `config/gsc_urls.json`, `requirements-gsc.txt` ve secret korumalı `.gitignore` güncellendi.
  - Script read-only GSC scope kullanır: `https://www.googleapis.com/auth/webmasters.readonly`.
  - Merge commit: `96300e8`.
- Sprint 2.5 GSC raporu üretildi: `reports/gsc-sprint-2-5-2026-06-29.md`.
  - 7 ürün SEO sayfası URL Inspection sonucunda indexed/canonical match durumunda.
  - Sitemap status başarılı.
  - İlk görünürlük sinyali çok sınırlı; ihracat/uluslararası sayfa ihtiyacı doğrulandı.
- Sprint 2.6 İngilizce ihracat landing page production'a alındı.
  - URL: `/en/interior-door-components/`
  - Title: `Interior Door Components Manufacturer from Türkiye | Yigiter`
  - Canonical: `https://www.yigiter.com.tr/en/interior-door-components/`
  - `lang="en"` ve `og:locale="en_US"` kullanılıyor.
  - Merge commit: `deae0a4`.
- Sprint 2.6A teklif formu mapping hotfix production'a alındı.
  - `/teklif-al?urun=interior-door-components` artık `product_group = Kapı komponentleri` seçiyor.
  - Web3Forms, KVKK, redirect ve form submit akışı değiştirilmedi.
  - Merge commit: `a0d8319`.

## Son Production Durumu

- Sprint 1, Sprint 1.1, Sprint 1.2, Sprint 2.1, Sprint 2.2A, Sprint 2.2B, Sprint 2.2C, Sprint 2.3A-G, SEO Cleanup, Canonical Domain Alignment, Header/Footer Trailing Slash Temizliği, Vercel Analytics/Speed Insights, Sprint 2.4, Sprint 2.5A, Sprint 2.6 ve Sprint 2.6A tamamlandı.
- Son production deploy başarılı.
- Son commit: `a0d8319` — Merge pull request #45 from syigiter/codex/sprint-2-6a-quote-form-mapping

## Vercel Analytics / Speed Insights Durumu

- Vercel Web Analytics ve Speed Insights entegrasyonu tamamlandı.
- Paketler: `@vercel/analytics`, `@vercel/speed-insights`.
- Entegrasyon noktası: `src/layouts/BaseLayout.astro`.
- `npm run build` başarılı.
- Production deploy Vercel'de `Ready`.
- Canlı kontrol: `https://www.yigiter.com.tr` HTTP/2 200.
- Not: Vercel metrikleri gerçek ziyaretler geldikçe panelde dolacaktır.

## Son Production Commit / Son Sprint

- Son sprint: PR #45 — Sprint 2.6A Quote Form Mapping Enhancement
- Merge commit: `a0d8319`
- Kapsam: İngilizce ihracat CTA query mapping'i
- Build: 38 sayfa
- Production deploy: aktif

## Önemli Hotfix Notları

- Son hotfix: PR #14 — Hotfix products navigation link
- Merge commit: `93e81c0`
- Amaç: Header ve mobil menüde Ürünler linkinin gerçek `/urunler/` linki olarak çalışmasını sağlamak.
- Production deploy: success

## Son Sprint

- Sprint 2.6A — Quote Form Mapping Enhancement tamamlandı.
- İngilizce ihracat landing page CTA'sından gelen `/teklif-al?urun=interior-door-components` query'si artık `Kapı komponentleri` ürün grubuna eşleniyor.
- Merge commit: `a0d8319`

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
  - `/en/interior-door-components/` → `https://www.yigiter.com.tr/en/interior-door-components/`
