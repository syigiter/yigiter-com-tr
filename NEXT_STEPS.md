# Next Steps — Yiğiter Sitesi

## Güncel Karar

Şu an yeni kod işi açılmayacak.

Ana öneri: **Bekle ve ölç**.

Sprint 2.7 ile İngilizce ihracat sayfası artık site içinde görünür iç linkler alıyor. Sprint 2.5B ve Sprint 2.5C ile GSC + Vercel Analytics takip hattı hazır. Bir sonraki adım, 7-14 gün veri biriktikten sonra birleşik takip raporu almaktır.

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
