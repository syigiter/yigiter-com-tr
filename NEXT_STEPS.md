# Next Steps — Yiğiter Sitesi

## Güncel Karar

Şu an yeni kod işi açılmayacak.

Ana öneri: **Bekle ve ölç**.

Sprint 2.7 ile İngilizce ihracat sayfası artık site içinde görünür iç linkler alıyor. Sprint 2.5B ve Sprint 2.5C ile GSC + Vercel Analytics takip hattı hazır. Bir sonraki adım, 7-14 gün veri biriktikten sonra birleşik takip raporu almaktır.

## Bekleme Dönemi Notu

Sprint 2.7, Sprint 2.5B ve Sprint 2.5C sonrası proje ölçüm dönemine geçti.

7-14 gün veri birikmeden yeni SEO içerik sprinti veya İngilizce sayfa genişletmesi açılmamalı.

Bu dönemde yapılmayacaklar:

- Yeni İngilizce ürün alt sayfası açma
- Header'a dil seçici ekleme
- Form akışını değiştirme
- Web3Forms / KVKK / CSP / canonical / sitemap tarafına dokunma
- Büyük tasarım veya görsel revizyon yapma
- GA4, Plausible, Umami veya Web Analytics Drains gibi yeni analytics sistemi kurma

Önce GSC + Vercel Analytics birleşik verisi okunmalı.

## 7-14 Gün Sonra Alınacak Birleşik Rapor

Kontrol kaynakları:

- GSC URL Inspection
- GSC Search Analytics
- Vercel Analytics
- Vercel Speed Insights

Kontrol edilecek ana sorular:

- `/en/interior-door-components/` Google tarafından biliniyor mu?
- İngilizce sayfa index'e girmiş mi?
- İngilizce sayfa impression almaya başlamış mı?
- İngilizce sayfa pageview artışı gösteriyor mu?
- ABD trafiği İngilizce sayfaya düşmeye başlamış mı?
- `/teklif-al/` ziyaret almaya başlamış mı?
- Google/Bing referrer sinyali büyüyor mu?
- Genç Boya / Melamin / Kastamonu Entegre tarafındaki iç pazar sinyalleri büyümüş mü?
- Ürün sayfası → teklif formu yolu Vercel Analytics'te görünür hale geliyor mu?

## Bir Sonraki Karar Eşiği

Bir sonraki GSC + Vercel Analytics birleşik raporunda karar şu kurala göre verilecek:

### İngilizce ihracat tarafı

Eğer `/en/interior-door-components/`:

- Google tarafından bilinir hale gelirse,
- index'e girerse,
- impression almaya başlarsa,
- ancak CTR veya `/teklif-al/` geçişi zayıf kalırsa,

Sprint 2.6B açılabilir:

- İngilizce FAQ ekleme
- Door jamb / door casing / MDF / melamine / PVC terimlerini güçlendirme
- Request Quote CTA metnini iyileştirme

### Türkiye iç pazar tarafı

Eğer `Genç Boya`, `Melamin kapı yüzeyi`, `Kastamonu Entegre` veya benzer Türkçe sorgular daha hızlı büyürse,

Sprint 2.8 açılabilir:

- Genç Boya SEO sayfası güçlendirme
- Melamin kapı yüzeyi fiyat/teklif dili iyileştirme
- Kastamonu Entegre bayi/tedarik mesajı güçlendirme
- Kapı imalat malzemeleri kategori sayfası güçlendirme

### Ölçüm tarafı

Eğer `/teklif-al/` ziyaret almaya başlarsa,

dönüşüm yolu ayrıca incelenecek:

- Hangi sayfadan teklif formuna gidiliyor?
- Hangi ülke/kanal teklif formuna trafik getiriyor?
- Ürün sayfası → teklif formu akışı güçlendirilmeli mi?

## Mevcut Ölçüm Notları

- Sprint 2.5B GSC raporuna göre 7 ürün SEO sayfası indexed/canonical match durumda.
- `/en/interior-door-components/` sitemap'te ve canlı canonical doğru; GSC'de henüz `URL Google tarafından bilinmiyor`.
- Sprint 2.5C ilk Vercel Analytics raporu:
  - Son 7 gün pageviews: 112
  - `/en/interior-door-components/`: 1 pageview
  - `/teklif-al/`: 0 pageview
  - United States: 76 pageview
  - Referrer: direct / empty 91, bing.com 10, google.com 10
  - p75 LCP: `/` 1240ms, `/en/interior-door-components` 431ms, `/urunler` 704ms
- Vercel `request_path` query string'i ayrı kırılım olarak vermeyebilir; `/teklif-al?urun=...` ana `/teklif-al` path'i altında değerlendirilmelidir.

## SEO Denetimi — 2026-07-03

Kod tabanı ve canlı site üzerinde genel bir SEO denetimi yapıldı. Tam rapor: `SEO_AUDIT_2026-07-03.md`.

Denetimde bulunan iki madde ölçüm dönemini bozmadan hemen uygulandı:

- Apex→www redirect'i 307'den 308'e (kalıcı) çevrildi (Vercel panel ayarı, kod değişikliği değil).
- 7 ürün SEO sayfası için GSC "Dizine ekle" talepleri gönderildi.

Kalan maddeler ölçüm dönemi bitene kadar açılmayacak, aday sprint olarak aşağıya eklendi.

### 4. Sprint 2.9 — SEO Denetim Bulguları (Ölçüm Sonrası)

Ölçüm dönemi bitip birleşik GSC + Vercel Analytics raporu alındıktan sonra değerlendirilmeli. Kapsam `SEO_AUDIT_2026-07-03.md`'de detaylı:

- Title/description kısaltma paketi: 7 ürün SEO sayfası + `/subeler/` + `/iletisim/` (`appendSiteName={false}` ile ~55 karakter title, ~150-155 karakter description).
- Kasa/pervaz keyword cannibalization kararı: `kapi-komponentleri/kasa.astro` ↔ `kapi-kasasi.astro` ve `kapi-komponentleri/pervaz.astro` ↔ `kapi-pervazi.astro` — birleştir (301) veya niyet ayrıştır.
- hreflang ekleme + İngilizce ürün alt sayfa genişlemesi (ABD sinyali teyit ederse, Sprint 2.6B ile birlikte değerlendirilebilir).
- Product/BreadcrumbList schema, `sameAs`'e sosyal profil ekleme.
- Dosya temizliği: stray Finder kopyaları (`dist/`, `SEARCH_CONSOLE_AUDIT 2.md`), redirect-only sayfaların (`quote.astro`, `products.astro`, `product-catalog.astro`) kaldırılması.

## Olası Sonraki Sprintler

### 1. Sprint 2.6B — İngilizce İhracat Sayfası Güçlendirme

Sadece İngilizce sayfa index'e girip impression alır ama CTR zayıf kalırsa açılmalı.

Olası kapsam:

- FAQ ekleme
- Door jamb / casing / MDF / melamine / PVC terimlerini doğal şekilde güçlendirme
- Request Quote CTA mikro kopyası
- İngilizce sayfadaki B2B güven unsurlarını derinleştirme

### 2. Sprint 2.8 — Türkiye İç Pazar SEO

GSC ve Vercel Analytics iç pazar sinyalleri daha güçlü büyürse açılmalı.

Olası odaklar:

- Genç Boya
- Melamin kapı yüzeyi
- Kastamonu Entegre
- Kapı imalat malzemeleri

### 3. Analytics Dönüşüm Takibi

`/teklif-al/` ziyaretleri ve ürün sayfası → teklif formu yolu görünür hale gelirse açılmalı.

Olası kapsam:

- `/teklif-al/` ziyaretleri
- Ürün sayfası → teklif formu yolu
- ABD trafiği → İngilizce sayfa yolu
- Vercel Analytics raporunun düzenli karşılaştırmalı kullanımı

## Uzun Vadeli

- Ürün görselleri ve katalog içerikleri
- KVKK metni hukuki kontrol
- Schema.org structured data genişletmesi
- B2B teklif dönüşüm takibi / CRM akışı
- Blog / haberler bölümü
