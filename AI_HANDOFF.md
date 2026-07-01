# AI Handoff — Yiğiter Sitesi

## Proje Amacı

Yiğiter Orman Ürünleri sitesini teknik olarak hızlı, güvenli, erişilebilir, SEO uyumlu ve B2B teklif talebi üretecek hale getirmek.

## Çalışma Prensipleri

- Büyük değişikliklerden kaçın.
- Her işi küçük sprint / ayrı branch / PR ile yap.
- Production'a merge etmeden önce preview test et.
- `npm run build` zorunlu.
- Route smoke test zorunlu.
- Console error / failed request / CSP error kontrolü zorunlu.
- Performansı bozacak yeni font, ağır JS, büyük görsel ekleme.
- CSP, header/dropdown, form submit gibi hassas alanlara gereksiz dokunma.
- Gerçek test yapılmadan "çalışıyor" deme.

## Hassas Alanlar

- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/pages/teklif-al.astro`
- `src/pages/kvkk.astro`
- `vercel.json`
- `astro.config.mjs`
- `public/images/`

## Önemli Kararlar

- Vercel'de `_headers` / `_redirects` yerine `vercel.json` kullanıldı.
- `preserveQueryParams` kullanılmadı; Vercel query string'i varsayılan olarak koruyor.
- Google Fonts kaldırıldı, sistem fontu kullanılıyor.
- CSP'ye `https://vercel.live` ve `font-src data:` eklendi.
- KVKK sayfası hukuki ön taslak olarak eklendi.
- Web3Forms canlıda kullanıcı tarafından test edildi ve teklif maili geldiği doğrulandı.
- PageSpeed Accessibility 95 kabul edilebilir; daha fazla kontrast koyulaştırma tasarımı bozabilir.
- Header'da "Ürünler" artık gerçek parent link olarak `/urunler/` sayfasına gider.
- Ürünler dropdown aç/kapat davranışı ayrı ok butonu ile korunur.
- Mobil menüde "Ürünler" parent linki `/urunler/` sayfasına gider.
- Bundan sonra Header/navigation değişikliklerinde hem parent link hem dropdown butonu ayrı ayrı test edilmelidir.
- `/teklif-al` formunda Web3Forms submit akışı korunuyor.
- Teklif formunda yeni B2B alanlar var: firma türü, ürün grubu, tahmini miktar, kullanım amacı, termin durumu ve teslimat şehri.
- `?urun=...` query prefill hem `product_details` hem `product_group` alanlarını dolduruyor.
- KVKK checkbox required kalmalı ve KVKK linki yeni sekmede açılmalı.
- Form alanlarında değişiklik yapılacaksa gerçek canlı mail testi tekrar önerilir.
- Canlı Web3Forms mail testi kullanıcı tarafından başarılı doğrulandı.
- Vercel Web Analytics ve Speed Insights `BaseLayout.astro` üzerinden tüm sayfalara eklendi.
- Analytics/Speed Insights metrikleri Vercel panelinde gerçek ziyaretlerden sonra dolacaktır.
- `BaseLayout.astro` sayfa bazlı `lang`, `ogLocale` ve `appendSiteName` prop'larını destekler; varsayılanlar Türkçe sayfaların eski davranışını korur.
- İngilizce ihracat landing page yayında: `/en/interior-door-components/`.
- İngilizce sayfa site menüsüne veya dil seçiciye bağlanmadı; şu an SEO landing page ve doğrudan URL olarak çalışıyor.
- `/teklif-al?urun=interior-door-components` prefill akışı `product_details = interior-door-components` ve `product_group = Kapı komponentleri` olarak doğrulandı.
- GSC yerel raporlama script'i read-only çalışır; credentials/token dosyaları commit edilmemelidir.

## Tamamlanan Sprintler

### Sprint 1 — Teknik Sağlamlaştırma

- Route/redirect düzeni
- SEO/head/canonical/OG
- CSP/header/cache
- 404
- `/urunler` ve `/teklif-al` route düzeni
- Görsel optimizasyon
- GTmetrix A / Performance 100

### Sprint 1.1 — Accessibility / UX Cleanup

- Header dropdown erişilebilirliği
- Focus-visible
- Heading hierarchy
- Form küçük UX düzeltmeleri
- Kontrast iyileştirme başlangıcı
- Console/CSP/failed request temiz

### Sprint 1.2 — Final Contrast Cleanup

- Küçük etiketler, yardımcı metinler, rozetler, WhatsApp butonu kontrastı iyileştirildi.
- Performance/SEO/Best Practices 100 korundu.
- Accessibility 95 seviyesinde kaldı.

### Sprint 2.1 — KVKK / Gizlilik

- `/kvkk` sayfası eklendi.
- Teklif formuna KVKK linkli required checkbox eklendi.
- Footer'a KVKK linki eklendi.
- Production başarılı.

### Sprint 2.2A — Homepage B2B Conversion

- Ana sayfadaki "Neden Yiğiter Orman Ürünleri?" bölümü B2B satış diliyle güçlendirildi.
- 6 güven kartı eklendi/güncellendi.
- Teklif Al ve Ürünleri İncele CTA'ları eklendi.
- Production başarılı.
- Son merge commit: `4d90a60`

### Sprint 2.2B — Products B2B Catalog Messaging

- `/urunler` sayfası B2B katalog mantığıyla güçlendirildi.
- 8 ürün grubu için uygun müşteri profili, kullanım alanı ve teklif CTA'ları netleştirildi.
- `/teklif-al?urun=...` query linkleri ürün kartlarında güçlendirildi.
- Production başarılı.
- Merge commit: `81d03ea`

### Sprint 2.2C — Quote Form B2B Lead Fields

- `/teklif-al` formu B2B teklif taleplerini daha iyi toplamak için genişletildi.
- Firma türü, ürün grubu, tahmini miktar, kullanım amacı, termin durumu ve teslimat şehri alanları eklendi/güçlendirildi.
- Teknik detay textarea etiketi ve placeholder'ı daha yönlendirici hale getirildi.
- `?urun=...` query prefill ile `product_details` ve `product_group` eşlemesi korunup doğrulandı.
- KVKK required checkbox ve `_blank` link davranışı korunuyor.
- Web3Forms submit akışı ve `/tesekkurler` redirect korunuyor.
- Canlı Web3Forms mail testi kullanıcı tarafından başarılı doğrulandı.
- Merge commit: `6c9cf84`

### Hotfix PR #14 — Products Navigation Link

- Canlıda Ürünler menü öğesine tıklanınca sayfanın açılmaması sorunu düzeltildi.
- Header desktop ve mobil Ürünler linkleri `/urunler/` olarak çalışır hale getirildi.
- Dropdown ok butonu ve klavye davranışı korundu.
- Merge commit: `93e81c0`.

### Sprint 2.3A — Kapı Pervazı SEO Ürün Detay Sayfası

- İlk ürün detay SEO sayfası production'a alındı.
- URL: `/urunler/kapi-pervazi/`
- B2B içerik: kapı pervazı nedir, kimler için uygundur, kullanım alanları, teklif için gerekli bilgiler, Yiğiter tedarik avantajları.
- `/urunler` Kapı Pervazı kartına `Detaylı İncele` linki eklendi.
- CTA `/teklif-al?urun=kapi-pervazi` olarak çalışıyor.
- Query prefill `product_details` ve `product_group` alanlarını dolduruyor.
- Merge commit: `f448650`.

### Sprint 2.3B — Kapı Kasası SEO Ürün Detay Sayfası

- İkinci ürün detay SEO sayfası production'a alındı.
- URL: `/urunler/kapi-kasasi/`
- B2B içerik: kapı kasası nedir, kimler için uygundur, kullanım alanları, teklif için gerekli bilgiler, Yiğiter tedarik avantajları.
- `/urunler` Kapı Kasası kartına `Detaylı İncele` linki eklendi.
- CTA `/teklif-al?urun=kapi-kasasi` olarak çalışıyor.
- Query prefill `product_details` ve `product_group` alanlarını dolduruyor.
- Merge commit: `dad10cd`.

### Sprint 2.3C — Melamin Kapı Yüzeyi SEO Ürün Detay Sayfası

- Üçüncü ürün detay SEO sayfası production'a alındı (mevcut dosya B2B şablonuyla yeniden yazıldı).
- URL: `/urunler/melamin-kapi-yuzeyi/`
- B2B içerik: melamin kapı yüzeyi nedir, kimler için uygundur, kullanım alanları, teklif için gerekli bilgiler, Yiğiter tedarik avantajları.
- `/urunler` Melamin Kapı Yüzeyi kartına `Detaylı İncele` linki eklendi.
- CTA `/teklif-al?urun=melamin-kapi-yuzeyi` olarak çalışıyor.
- Query prefill `product_details` ve `product_group` alanlarını dolduruyor.
- Merge commit: `5cc3db3`.

### Sprint 2.3D — PVC Film SEO Ürün Detay Sayfası

- Dördüncü ürün detay SEO sayfası production'a alındı.
- URL: `/urunler/pvc-film/`
- B2B içerik: PVC film nedir, kimler için uygundur, kullanım alanları, teklif için gerekli bilgiler, Yiğiter tedarik avantajları.
- `/urunler` PVC Film kartına `Detaylı İncele` linki eklendi.
- CTA `/teklif-al?urun=pvc-film` olarak çalışıyor.
- Query prefill `product_details` ve `product_group` alanlarını dolduruyor.
- Merge commit: `df6e65a`.

### Sprint 2.3E — MDF SEO Ürün Detay Sayfası

- Beşinci ürün detay SEO sayfası production'a alındı.
- URL: `/urunler/mdf/`
- B2B içerik: MDF nedir, kimler için uygundur, kullanım alanları, teklif için gerekli bilgiler, Yiğiter tedarik avantajları.
- `/urunler` MDF kartına `Detaylı İncele` linki eklendi.
- CTA `/teklif-al?urun=mdf` olarak çalışıyor.
- Query prefill mevcut mapping ile `MDF / MDFLAM` seçiyor.
- Canonical: `https://www.yigiter.com.tr/urunler/mdf/`
- Merge commit: `e41e953`.

### Sprint 2.3G — Kapı Paneli SEO Ürün Detay Sayfası

- Yedinci ürün detay SEO sayfası production'a alındı.
- URL: `/urunler/kapi-paneli/`
- B2B içerik: Kapı paneli nedir, kimler için uygundur, kullanım alanları, teklif için gerekli bilgiler, Yiğiter tedarik avantajları.
- `/urunler` Yonga Levha / Kapı Paneli kartına `Detaylı İncele` linki eklendi.
- Kartın mevcut quoteHref değeri korundu.
- CTA `/teklif-al?urun=kapi-paneli` olarak çalışıyor.
- Query prefill mevcut mapping ile `Yonga levha / kapı paneli` seçiyor.
- Canonical www standardında: `https://www.yigiter.com.tr/urunler/kapi-paneli/`
- Sitemap içinde Kapı Paneli URL mevcut.
- Merge commit: `9f12720`.

### Sprint 2.3F — MDFLAM SEO Ürün Detay Sayfası

- Altıncı ürün detay SEO sayfası production'a alındı.
- URL: `/urunler/mdflam/`
- B2B içerik: MDFLAM nedir, kimler için uygundur, kullanım alanları, teklif için gerekli bilgiler, Yiğiter tedarik avantajları.
- CTA `/teklif-al?urun=mdflam` olarak çalışıyor.
- Query prefill mevcut mapping ile `MDF / MDFLAM` seçiyor.
- Canonical www standardında: `https://www.yigiter.com.tr/urunler/mdflam/`
- Sitemap içinde MDFLAM URL mevcut.
- `/urunler/index.astro` değiştirilmedi; mevcut MDF detay linki korundu.
- Merge commit: `998bf15`.

### Header/Footer Trailing Slash ve Fallback Link Temizliği — PR #38

- Header, footer, home CTA ve `/urunler` kart linklerindeki eksik trailing slash'lar düzeltildi.
- Değişiklikler sadece `href` string seviyesinde yapıldı.
- Tasarım, component mantığı, form, canonical, noindex, sitemap ve redirect davranışı değiştirilmedi.
- `/teklif-al/` route'u 200 doğrulandı.
- Query'li teklif linkleri korunmuştur: `/teklif-al?urun=...`
- 24 canlı route testi ve 7 query teklif linki 200 döndü.
- Merge commit: `8887207`.

### Canonical Domain Alignment — www / no-www Standardı

- Production domain davranışı ile canonical üretimi hizalandı.
- Canonical standardı `https://www.yigiter.com.tr` olarak belirlendi.
- `astro.config.mjs` site değeri `https://www.yigiter.com.tr` yapıldı.
- Canonical, OG URL, Schema.org ve sitemap domain referansları www standardına taşındı.
- No-www canonical kalıntısı temizlendi.
- PVC eski URL redirect davranışı etkilenmedi.
- Merge commit: `43cfde7`.

### SEO Cleanup — Eski PVC Film Duplicate Sayfası

- Eski `/urunler/kapi-imalat-malzemeleri/pvc-film/` duplicate SEO riski nedeniyle kaldırıldı.
- Eski URL slash'li ve slash'siz olarak `/urunler/pvc-film/` adresine permanent redirect edildi (308).
- Eski iç linkler yeni URL'ye çevrildi (ProductCategories, kapi-imalat-malzemeleri/index, kagit-dolgu).
- Yeni `/urunler/pvc-film/` sayfası canonical ürün sayfası olarak korunuyor.
- Production redirect testi başarılı: 308 çalışıyor.
- Merge commit: `4a70cd8`.

### Vercel Analytics ve Speed Insights Entegrasyonu — 2026-06-28

- `@vercel/analytics` ve `@vercel/speed-insights` paketleri eklendi.
- `src/layouts/BaseLayout.astro` içinde `<Analytics />` ve `<SpeedInsights />` tüm sayfalara dahil edildi.
- İlk named import denemesi build'de hata verdi; Astro paketleri default export kullandığı için default import'a çevrildi.
- `npm run build` başarılı: 37 sayfa üretildi.
- Commit: `b51408f`.
- Production deploy Vercel'de `Ready`.
- Canlı kontrol: `https://www.yigiter.com.tr` HTTP/2 200.

### Sprint 2.4 — Search Visibility and B2B Door Components SEO

- `/subeler/` ve `/iletisim/` metadata güncellendi.
- `/urunler/kapi-komponentleri/` B2B SEO içeriği güçlendirildi.
- 7 ürün detay sayfasından `/urunler/kapi-komponentleri/` sayfasına doğal iç linkler eklendi veya güncellendi.
- Production doğrulama temiz geçti: route 200, console/failed/CSP error 0.
- Merge commit: `1060780`.

### Sprint 2.5A — Local GSC Reporting Script

- Google Search Console verilerini yerelde read-only çekmek için script eklendi.
- Değişen dosyalar: `.gitignore`, `config/gsc_urls.json`, `requirements-gsc.txt`, `scripts/gsc_check.py`.
- Scope: `https://www.googleapis.com/auth/webmasters.readonly`.
- Script "Dizine ekle" veya sitemap submit gibi yazma işlemleri yapmaz.
- Secret dosyalar `.gitignore` ile korunur: `credentials.json`, `client_secret*.json`, `service-account.json`, `token.json`, `.gsc/`, `reports/*.raw.json`.
- Merge commit: `96300e8`.

### Sprint 2.5 — Search Console Follow-up

- Local/commit dışı rapor dosyası: `reports/gsc-sprint-2-5-2026-06-29.md`.
- 7 ürün SEO sayfası URL Inspection sonucunda indexed/canonical match durumunda.
- Sitemap durumu başarılı.
- Search Analytics sinyali henüz çok sınırlı; international impression var ama tıklama yok.
- Bu veri Sprint 2.6 İngilizce ihracat landing page kararını destekledi.

### Sprint 2.6 — English Export Landing Page

- Yeni sayfa: `/en/interior-door-components/`.
- Hedef: Yurt dışı B2B alıcılar, kapı komponentleri ihracat görünürlüğü.
- SEO:
  - Title: `Interior Door Components Manufacturer from Türkiye | Yigiter`
  - Canonical: `https://www.yigiter.com.tr/en/interior-door-components/`
  - H1: `Interior Door Components from Türkiye`
  - `lang="en"`, `og:locale="en_US"`.
- Yeni çok dillilik altyapısı, language selector veya English menu eklenmedi.
- `BaseLayout.astro` sadece geriye uyumlu dil/meta prop'ları için değişti.
- Build: 38 sayfa.
- Merge commit: `deae0a4`.

### Sprint 2.6A — Quote Form Mapping Enhancement

- İngilizce landing page CTA query mapping'i eklendi.
- `/teklif-al?urun=interior-door-components` canlıda:
  - `product_details = interior-door-components`
  - `product_group = Kapı komponentleri`
- `/teklif-al?urun=kapi-pervazi` ve mevcut Türkçe mapping'ler korundu.
- Web3Forms, KVKK, redirect, header/footer, CSP, canonical ve sitemap değişmedi.
- Build: 38 sayfa.
- Merge commit: `a0d8319`.

### Kapı Paneli Duplicate Ayrıştırma — PR #36

- Yeni genel Kapı Paneli sayfası ile eski Kastamonu Entegre Kapı Paneli sayfası arasındaki orta seviye duplicate riski analiz edildi.
- Eski sayfa marka değeri taşıdığı için redirect yerine ayrıştırma seçildi.
- `src/pages/urunler/kastamonu-entegre/kapi-paneli.astro` içinde H1 `Kastamonu Entegre Kapı Paneli` yapıldı.
- Genel `/urunler/kapi-paneli/` sayfasına iç link eklendi.
- Canonical/noindex/sitemap/redirect değişmedi.
- Merge commit: `f2b6380`.
- Bu iki sayfa artık farklı niyete hizmet ediyor:
  - `/urunler/kapi-paneli/` → genel kategori/tedarik sayfası
  - `/urunler/kastamonu-entegre/kapi-paneli/` → marka/ürün grubu odaklı sayfa

## Trailing Slash Standartları

- Tüm iç nav linkleri (Header, Footer, home component CTA'ları) trailing slash'lı olmalı.
- Ürün kart `href` değerleri trailing slash'lı: `/urunler/kapi-komponentleri/`, `/urunler/genc-boya/` vb.
- `quoteHref` değerleri query string içerdiğinden trailing slash kullanılmaz: `/teklif-al?urun=...`
- Düz CTA linkleri: `/teklif-al/` (trailing slash'lı).
- Yeni iç link eklenirken trailing slash standardı korunmalı.

## Hassas Notlar

- Ürün detay SEO sayfalarında slug, CTA query ve canonical tutarlı olmalı.
- Kapı pervazı için standart slug: `kapi-pervazi` — yanlış `kapi-pervaz` kullanılmamalı.
- Kapı kasası için standart slug: `kapi-kasasi`.
- Melamin kapı yüzeyi için standart slug: `melamin-kapi-yuzeyi`.
- Header/Footer/diğer sayfalarda trailing slash'siz melamin referansları mevcut; Vercel yönetiyor, işlevsel sorun yok; ayrı temizlik sprintine bırakıldı.
- PVC Film için standart URL: `/urunler/pvc-film/` — eski `/urunler/kapi-imalat-malzemeleri/pvc-film/` artık kullanılmamalı.
- Canonical domain standardı: `https://www.yigiter.com.tr` — yeni sayfa eklenirken canonical www üzerinden kontrol edilmeli.
- `astro.config.mjs` → `site: 'https://www.yigiter.com.tr'` — gereksiz değiştirilmemeli.
- MDF için standart slug: `mdf`.
- MDFLAM için standart slug: `mdflam`.
- Kapı Paneli için standart slug: `kapi-paneli`.
- Canonical domain standardı: `https://www.yigiter.com.tr` — yeni sayfa eklenirken canonical www üzerinden kontrol edilmeli.
- `/urunler/kastamonu-entegre/kapi-paneli/` mevcut sitemap'te görülüyor; yeni `/urunler/kapi-paneli/` ile duplicate/legacy ilişkisi ileride değerlendirilebilir.
- Finder kopyası kontrolü: build öncesi `find src/pages -name "* 2.astro"` çalıştırılmalı.

## Ürün SEO Serisi Durumu

Sprint 2.3 ürün SEO serisi tamamlandı. Kapanış raporu: `SEO_CLOSING_REPORT.md`.

7 ürün SEO sayfası production'da: kapi-pervazi, kapi-kasasi, melamin-kapi-yuzeyi, pvc-film, mdf, mdflam, kapi-paneli. Tümü 200, canonical www standardında, noindex yok, sitemap'te mevcut.

## Sonraki Mantıklı İş

Ürün SEO serisi, GSC raporlama, İngilizce ihracat landing page ve quote form mapping tamamlandı. Sıradaki mantıklı iş için `NEXT_STEPS.md` ve varsa local/commit dışı `reports/gsc-sprint-2-5-2026-06-29.md` raporuna bak.
