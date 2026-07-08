# Next Steps — Yiğiter Sitesi

## Güncel Karar (2026-07-07)

Ölçüm dönemi tamamlandı. Birleşik GSC + Vercel raporu alındı ve karar verildi: **Sprint 2.9 (on-page/teknik SEO)** açılıyor. 2.6B ve 2.8 şu an açılmıyor.

### Rapor bulguları

- GSC index sağlığı kusursuz: 7 ürün sayfası da indexed, canonical match, sitemap 0 hata.
- Gerçek arama sinyali ince ama tümü Türkçe ve ticari: 28 günde ~32 impression, 1 klik. En iyi: `melamin-kapi-yuzeyi` (11 impr, 1 klik, poz 6-16), `kapi-pervazi` (10 impr, poz ~10), `mdf` ("mdf bayilik veren firmalar", poz 8).
- 4 sayfa 0 impression: `kapi-kasasi`, `pvc-film`, `mdflam`, `kapi-paneli`.
- Sayfalar 7-16. pozisyonda (2. sayfa civarı), CTR ~0. Tek klik 6. sıradaki melamin sayfasından geldi → top-6'ya çıkmak klik getiriyor.
- İngilizce **arama** talebi sıfır: GSC'de tek İngilizce sorgu yok, `/en/` impression almamış. Vercel'deki ABD 350 pv organik-arama-dışı (Linux %27, saçık datacenter coğrafyası → muhtemelen bot; kesinleştirmek için Vercel referrer/UA kırılımına bakılabilir ama sprint kararını bekletmez). Her halükârda İngilizce arama talebi olmadığı için 2.6B yine hayır.

### Karar gerekçesi

- **2.6B (İngilizce) → HAYIR**: sıfır İngilizce arama sinyali.
- **2.8 (Türkçe iç pazar) → henüz değil**: gerçek Türkçe ticari sinyal var ama 32 impression "ikiye katla" demek için çok ince.
- **2.9 (on-page/teknik) → EVET**: index sağlam, sayfalar 2. sayfada takılı + 4 ölü sayfa. Yeni içerik üretmeden mevcut sayfaların on-page'i düzeltilmeli — bu hem teknik düzeltme hem filizlenen Türkçe sinyali hasat etme yolu.

Her iş ayrı küçük branch/PR. Her PR sonrası stop-report-wait: build + route smoke test + console/CSP kontrolü, sonra ölç.

## Bekleme Dönemi Notu (kapandı — 2026-07-07)

> Bu dönem kapandı: birleşik GSC + Vercel raporu 2026-07-07'de alındı ve Sprint 2.9 seçildi (bkz. yukarıdaki "Güncel Karar"). Aşağıdaki freeze kuralları geçmiş kayıt olarak tutuluyor; artık aktif değil.

Sprint 2.7, Sprint 2.5B ve Sprint 2.5C sonrası proje ölçüm dönemine geçmişti.

7-14 gün veri birikmeden yeni SEO içerik sprinti veya İngilizce sayfa genişletmesi açılmıyordu.

O dönemde yapılmayanlar:

- Yeni İngilizce ürün alt sayfası açma
- Header'a dil seçici ekleme
- Form akışını değiştirme
- Web3Forms / KVKK / CSP / canonical / sitemap tarafına dokunma
- Büyük tasarım veya görsel revizyon yapma
- GA4, Plausible, Umami veya Web Analytics Drains gibi yeni analytics sistemi kurma

**Not (2026-07-07):** Bu "yeni analytics kurma yasağı" freeze dönemine aitti. Freeze sonrası Clarity kuruldu (davranış analitiği, ID xirpsgg0ls). Yasak tarihsel; yeni analytics kararları artık serbest ama aşağıdaki GA4 notundaki gibi ihtiyaç-tetikli değerlendirilmeli.

### B2B Buyer Review Notu

2026-07-05 tarihinde Türk kapı imalatçısı / potansiyel B2B alıcı gözüyle anasayfa ve kapı komponentleri sayfası için değerlendirme notları alındı.

Bu notlar ilk GSC + Vercel Analytics + Speed Insights birleşik ölçüm raporu sonrasında karar verirken dikkate alınacak.

Özellikle şu başlıklar değerlendirilecek:

- Ürün fotoğrafı, profil kesiti ve ölçü tablosu eksikliği
- İndirilebilir katalog / ürün föyü / melamin desen PDF’i ihtiyacı
- Sertifika ve ihracat kanıtı eksikliği
- “Kapı üreticisinin rakibi değil, yan sanayi tedarikçisi” konumlandırması
- İhracat haritası metninin yanlış anlaşılma riski
- E-posta, URL, canonical ve telif yılı hijyen kontrolü

> Güncelleme (2026-07-07): Ölçüm dönemi tamamlandı ve birleşik rapor okundu; Sprint 2.9 (on-page/teknik SEO) seçildi. Bu B2B alıcı notları artık 2.9 sonrası içerik/asset/hotfix önceliklendirmesi için aday havuzda tutuluyor.

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

### 4. Sprint 2.9 — On-page/Teknik SEO (AKTİF — 2026-07-07 raporuyla seçildi)

Kapsam `SEO_AUDIT_2026-07-03.md`'de detaylı. Aşağıdaki sıra 2026-07-07 GSC+Vercel raporuna göre önceliklendirildi: aktif zararı önce çöz, sonra mevcut impression'ı hasat et, en son gecikmeli getirili işler. Her madde ayrı branch/PR.

**①a — Kasa/pervaz cannibalization çöz (önce — ②'nin önkoşulu)**
- `kapi-komponentleri/kasa.astro` ↔ `kapi-kasasi.astro` ve `kapi-komponentleri/pervaz.astro` ↔ `kapi-pervazi.astro` aynı keyword için yarışıyor.
- Karar: her çift için tek canonical sayfa belirle; ötekini 301 ile birleştir **veya** niyeti net ayrıştır (marka/grup vs genel SEO).
- Neden önce: hangi sayfanın title'ını optimize edeceğimiz buna bağlı; çözülmeden ② belirsiz.
- Not: `kapi-pervazi` şu an 10 impression alan aktif sayfa — sinyali bölmemeye dikkat.

**② — 7 sayfa title/description kısaltma (en hızlı ölçülebilir getiri)**
- Zaten impression alan sayfaların CTR'ını kıpırdatmak için: `appendSiteName={false}` ile ~55 karakter title, ~150-155 karakter description.
- Kapsam: 7 ürün SEO sayfası + `/subeler/` + `/iletisim/`.
- Hedef: 7-16. pozisyondaki sayfaları top-6'ya taşıyıp klik almak (melamin tek kliği bu tezi destekliyor).

**①b — 4 ölü sayfa içerik güçlendirme (getirisi gecikmeli)**
- 0 impression alan sayfalar: `kapi-kasasi`, `pvc-film`, `mdflam`, `kapi-paneli`.
- İçerik zayıf/ince; yeniden index + sıralama oturması haftalar alır, o yüzden ②'den sonra.

**③ — Schema genişletme (en son)**
- Product/BreadcrumbList schema, `sameAs`'e sosyal profil ekleme.

**Dosya temizliği (yan iş, herhangi bir PR'a iliştirilebilir)**
- Redirect-only sayfalar: `quote.astro`, `products.astro`, `product-catalog.astro` kaldırma değerlendirmesi.
- `dist/` içindeki stray Finder kopyaları.

**Ölçüm dönemi dışında bırakılanlar:** hreflang + İngilizce ürün alt sayfa genişlemesi — İngilizce arama sinyali oluşana kadar ertelendi (bkz. yukarıdaki karar; şu an sıfır sinyal).

**GA4 — ertelendi, karar bekliyor.** Mevcut yığın: Clarity + Vercel Analytics + Speed Insights + GSC. GA4'ün ekleyeceği: kanal/kaynak kırılımı + olay/dönüşüm takibi (ör. teklif-al conversion) + Clarity↔GA4 bağlantısı + "ABD trafiği bot mu insan mı" belirsizliğini kesinleştirme. Şu anki trafik (~1 gerçek tık, çoğu bot) GA4'ün zengin verisini beslemez. Tetikleyici: Clarity/GSC 14-28 gün veri topladıktan sonra (2.9 + ①a etkisi oturunca) trafik anlamlı hacme ulaştıysa VE kanal ayrımı/dönüşüm takibi gerekliyse kur. Süre değil, hacim+ihtiyaç tetikler. Kurulumda: CSP'ye googletagmanager.com + google-analytics.com ekle, KVKK'yı Clarity ile birlikte tek seferde ele al (GA4 çerez koyar).

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
