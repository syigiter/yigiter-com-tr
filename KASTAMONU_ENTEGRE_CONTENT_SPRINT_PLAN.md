# Kastamonu Entegre İçerik ve Görsel Zenginleştirme Planı

Tarih: 2026-07-26  
Program: `Sprint 2.10 — Kastamonu Entegre İçerik ve Görsel Programı`  
Durum: Tamamlandı — `2.10A–2.10I`

## 1. Karar ve Dayanak

- Yiğiter'in Kastamonu Entegre ile aktif bayilik anlaşması vardır.
- Kullanıcı teyidine göre bayilik anlaşması, Kastamonu Entegre ürün görsellerinin Yiğiter sitesinde kullanımına izin vermektedir.
- Kastamonu Entegre'ye ait ürün görselleri, kataloglar ve ürün adları bu izin kapsamında kullanılabilir.
- Kaynak materyal izinli olsa da SEO açısından üretici metinleri uzun bloklar halinde kopyalanmayacak; içerik Yiğiter'in ana bayi, stok, sevkiyat ve teklif bağlamına göre özgün biçimde yazılacaktır.
- Üretici ürün gamı ile Yiğiter'in fiilen stokladığı/tedarik ettiği ürünler ayrı etiketlenecektir. Teyitsiz stok, ölçü, kalınlık, termin ve fiyat garantisi verilmeyecektir.

## 2. Programın Mevcut Sprintlere Yerleşimi

Bu program:

- aktif `Sprint 2.9 — On-page/Teknik SEO` işlerini değiştirmez;
- teknik profil/föy çalışmaları için ayrılmış `Sprint 2.9A` adını kullanmaz;
- `Sprint 2.8 — Türkiye İç Pazar SEO` içindeki Kastamonu Entegre adayını somutlaştırır;
- `W-010 Product Card Standard`, `W-011 Product PDF System`, `W-012 Quote Flow` ve `W-042 Schema Markup` maddelerini Kastamonu Entegre ürün ailesinde uygular;
- `NEXT_STEPS.md` içindeki “Panel Ürünleri — İki Katmanlı Mimari” kararını korur.

Yeni program numarası bu nedenle `Sprint 2.10` olarak belirlenmiştir.

## 3. Hedefler

1. Kastamonu Entegre ana bayi konumunu ürün seviyesinde kanıtlamak.
2. Mevcut ince/placeholder ağırlıklı marka sayfalarını görsel ve teknik içerikle güçlendirmek.
3. Dekoratif panel ürün gamı için yeni ve taranabilir bir bilgi mimarisi kurmak.
4. Doorpan ve Doorlam ürünlerini doğru isim, kullanım ve kataloglarla sunmak.
5. Resmî katalogları sürümlü ve izlenebilir biçimde siteye eklemek.
6. Generic çok-markalı sayfalar ile Kastamonu'ya özel sayfaların arama niyetini ayrıştırmak.
7. Ürün sayfasından teklif/WhatsApp aksiyonuna geçişi güçlendirmek.

## 4. Kapsam

### 4.1 Mevcut marka sayfaları

- `/urunler/kastamonu-entegre/`
- `/urunler/kastamonu-entegre/mdf/`
- `/urunler/kastamonu-entegre/mdflam/`
- `/urunler/kastamonu-entegre/yongalevha/`
- `/urunler/kastamonu-entegre/kapi-paneli/`

### 4.2 Yeni sayfa

- `/urunler/kastamonu-entegre/dekoratif-panel/`

### 4.3 İki katmanlı mimariyle ilişkili generic sayfalar

- `/urunler/mdf/`
- `/urunler/mdflam/`
- `/urunler/kapi-paneli/`
- yeni `/urunler/yongalevha/`

Generic sayfalar çok-markalı tedarik niyetini; Kastamonu altındaki sayfalar ise marka, ürün ailesi ve ana bayi niyetini hedefleyecektir. İlk sürümde bu URL'ler arasında 301 veya canonical birleştirmesi yapılmayacaktır.

## 5. Ürün Bilgi Mimarisi

### 5.1 Dekoratif panel grupları

Yeni dekoratif panel sayfasında aşağıdaki gruplar yer alacaktır:

- Melamin kaplı paneller
  - Medelam
  - Teknolam / Yongalam
- Parlak ve laklı yüzeyler
  - Glossmax
  - Glossmax Pro
  - Evogloss
- Mat yüzeyler
  - Mattplus
  - Evosoft
- Akrilik panel
  - Çizilmez akrilik
  - Endüstriyel akrilik
- Printpan
- Compact Panel Lam

Her ürün kartında:

- resmî ürün adı;
- kısa ve özgün açıklama;
- uygun kullanım alanları;
- öne çıkan yüzey/işleme avantajı;
- resmî görsel;
- ilgili katalog;
- “Stok ve ölçü için teklif al” CTA'sı bulunacaktır.

### 5.2 Yüzey örnekleri

İzinli yüzey görselleri ayrı bir galeri olarak kullanılacaktır. İlk adaylar:

- PS10 Düz
- PS11 Natural
- PS12 Parlak
- PS14 Bute
- PS16 Kumaş
- PS22 Wood
- PS27 Charm
- PS28 Grove
- PS30 Paint
- PS33 Stone
- PS37 Veneer
- PS60 Magma
- PS72 Leather
- PS73 Sıva
- PS74 Soft Mat
- PS76 Art
- PS77 Flow

Galeri “renk kartelası” gibi sunulmayacak; yüzey/doku örnekleri olduğu açıkça belirtilecektir. Ekran rengi ile fiziksel numune arasında fark olabileceği uyarısı bulunacaktır.

### 5.3 Kapı paneli

Mevcut genel ifadeler yerine iki gerçek ürün ailesi kullanılacaktır:

- Doorpan
  - beyaz astarlı kapı paneli;
  - şekilli ve düz yüzey aileleri;
  - iç kapı üretiminde kullanım;
  - resmî yüzey/model görselleri.
- Doorlam
  - 4 mm MDF üzerine dekoratif kâğıt kaplı hazır panel;
  - ek boya/cila ihtiyacını azaltan yapı;
  - Buz Meşe, Kastamonu Meşe, Zeugma, Urartu, Likya, Sümer ve Babil dekorları;
  - resmî Doorlam kataloğu.

Mevcut sayfadaki doğrulanmamış `5.000+ seçenek`, özel ölçü, yüksek nem direnci ve benzeri iddialar belgeyle teyit edilmezse kaldırılacaktır.

### 5.4 MDF, MDFLam ve yongalevha

- MDF sayfası: ham MDF, işlenebilirlik, CNC/freze, boyama/kaplama ve kullanım alanları.
- MDFLam sayfası: terminoloji “laminat kaplı MDF” yerine “melamin kaplı MDF” olarak düzeltilecek; Medelam ve ilgili yüzey teknolojileri anlatılacak.
- Yongalevha sayfası: ham yongalevha ile melamin kaplı Teknolam/Yongalam ayrıştırılacak.
- Kalınlık, ebat, yoğunluk ve stok bilgileri yalnızca güncel katalog veya Yiğiter satış/stok teyidiyle yayınlanacak.

## 6. İçerik ve Asset Modeli

### 6.1 Dosya yapısı

```text
public/
  images/products/kastamonu-entegre/
    dekoratif-panel/
    mdf/
    mdflam/
    yongalevha/
    kapi-paneli/
    yuzeyler/
  documents/kastamonu-entegre/
src/
  data/kastamonu-entegre.ts
docs/
  kastamonu-entegre-asset-manifest.csv
```

### 6.2 Asset manifest alanları

- resmî kaynak URL;
- ürün ailesi;
- asset türü;
- orijinal dosya adı;
- yerel dosya yolu;
- kaynak/alım tarihi;
- dosya hash'i;
- kullanım izni dayanağı;
- kullanıldığı sayfalar;
- alt metin;
- durum: `aday`, `onaylı`, `yayında`, `arşiv`.

### 6.3 Görsel standardı

- Hotlink yapılmayacak; izinli dosyalar yerelde barındırılacak.
- Orijinal dosya arşivlenecek, web sürümü WebP/AVIF üretilecek.
- Kart görselleri hedefi: 640 px ve mümkünse 80 KB altı.
- Geniş içerik görselleri hedefi: 1280–1600 px ve mümkünse 200 KB altı.
- `width`, `height`, açıklayıcı `alt`, `loading="lazy"` ve `decoding="async"` kullanılacak.
- İlk görünümdeki ana görselde lazy loading kullanılmayacak; diğerleri lazy olacaktır.
- Görsel kırpma ürün desenini veya teknik detayı yanıltmayacaktır.

### 6.4 PDF standardı

- Resmî PDF içeriği değiştirilmeden saklanacak.
- Dosya adı standardı:

```text
kastamonu-entegre-{urun}-{yil}-v{surum}.pdf
```

- Kaynak URL, yayın tarihi ve hash manifestte tutulacak.
- Eski sürümler `documents/.../archive/` altında saklanacak ancak kullanıcıya yalnızca güncel sürüm gösterilecek.
- PDF CTA metni “Resmî ürün kataloğunu indir” olacaktır.

## 7. Sprint ve PR Planı

Her alt sprint ayrı branch/PR olacak. Her PR sonrası build, Vercel preview ve stop-report-wait uygulanacaktır.

### Sprint 2.10A — Asset ve İddia Envanteri

Boyut: S  
Production etkisi: Yok

İşler:

- Resmî ürün görsellerini ve katalogları listele.
- Asset manifesti oluştur.
- Mevcut sayfalardaki tüm teknik/ticari iddiaları çıkar.
- Her iddiayı `resmî kaynak`, `Yiğiter teyidi`, `kaldırılacak` olarak sınıflandır.
- Üretici ürün gamı ile Yiğiter stok/tedarik listesini ayır.

Kabul kriterleri:

- Kullanılacak her assetin kaynak URL'si ve ürün ailesi kayıtlı.
- Teyitsiz kalınlık, ebat, stok, termin ve performans iddiası listelenmiş.
- Görsel/PDF kullanım izni dayanağı manifestte belirtilmiş.

Çıktılar:

- [`docs/kastamonu-entegre-asset-manifest.csv`](docs/kastamonu-entegre-asset-manifest.csv)
- [`docs/kastamonu-entegre-claims-audit.md`](docs/kastamonu-entegre-claims-audit.md)

Sonuç:

- `2.10A` 2026-07-26 tarihinde tamamlandı.
- Üretici gamı ile Yiğiter tedarik/stok bilgisi ayrıştırıldı.
- `Softmatt`, `5.000+`, `55+`, “Türkiye lider”, mutlak stok/termin ve teyitsiz teknik değerler sonraki veri modeline taşınmayacak.
- `2.10B`, manifestte `onaylı` olan varlıkların yerel arşive alınması, hash/metadata kaydı ve ürün veri modeliyle başlayabilir.

### Sprint 2.10B — Veri Modeli ve Asset Pipeline

Boyut: M  
Production etkisi: Düşük

İşler:

- `src/data/kastamonu-entegre.ts` ürün veri modelini oluştur.
- Asset dizinlerini ve isim standardını kur.
- Görselleri optimize et.
- Katalog dosyalarını sürümlü biçimde ekle.
- Tekrarlanan ürün kartı/katalog CTA bileşenlerini oluştur.

Kabul kriterleri:

- Sayfalarda ürün bilgisinin tek kaynağı veri dosyası.
- Kırık asset/PDF bağlantısı yok.
- Görsel bütçeleri sağlanıyor.
- Mevcut sayfaların görünümü bozulmuyor.

Çıktılar:

- [`src/data/kastamonu-entegre.ts`](src/data/kastamonu-entegre.ts)
- [`src/components/kastamonu-entegre/`](src/components/kastamonu-entegre/)
- [`scripts/sync-kastamonu-assets.mjs`](scripts/sync-kastamonu-assets.mjs)
- [`scripts/validate-kastamonu-data.mjs`](scripts/validate-kastamonu-data.mjs)
- [`docs/kastamonu-entegre-asset-pipeline.md`](docs/kastamonu-entegre-asset-pipeline.md)

Sonuç:

- `2.10B` 2026-07-26 tarihinde tamamlandı.
- 30 görsel/yüzey WebP olarak optimize edildi; her biri tanımlı bütçenin altında.
- 3 çekirdek resmî katalog değiştirilmeden yerel ve sürümlü olarak eklendi.
- Diğer onaylı katalogların SHA-256 ve boyut metadata'sı kaydedildi; büyük PDF paketi ilgili ürün sprintlerine bölündü.
- 14 ürün ailesi tek veri dosyasında, üretici iddiası ile Yiğiter stok/termin iddiası ayrılarak modellendi.
- Mevcut production sayfaları değiştirilmedi. Tek kaynak modeline sayfa geçişi `2.10C–2.10E` içinde yapılacak.

### Sprint 2.10C — Kastamonu Hub ve Dekoratif Panel Sayfası

Boyut: L  
Production etkisi: Yüksek

İşler:

- Kastamonu ana sayfasını ürün ailesi hub'ına dönüştür.
- Yeni `/dekoratif-panel/` sayfasını oluştur.
- Ürün grubu kartları, kullanım alanları, yüzey galerisi ve katalog CTA'ları ekle.
- Ana bayi/teklif/WhatsApp mesajlarını koru.
- Ana sayfa ve ürünler sayfasından doğal iç link ekle.

Kabul kriterleri:

- Yeni rota 200, self-canonical ve sitemap içinde.
- Mobilde ürün kartları ve galeri rahat taranıyor.
- Placeholder bulunmuyor.
- Her ürün grubu teklif veya katalog aksiyonuna sahip.
- Üretici metinleri birebir uzun bloklar halinde kopyalanmamış.

Sonuç:

- `2.10C` 2026-07-26 tarihinde tamamlandı.
- Kastamonu Entegre hub'ı 14 ürün ailesi, 25 yüzey örneği ve 3 yerel katalogdan beslenen veri odaklı bir yapıya geçirildi.
- Yeni `/urunler/kastamonu-entegre/dekoratif-panel/` rotasında 10 dekoratif panel ailesi, kullanım alanları, 18 dekoratif yüzey örneği ve Compactlam kataloğu yayın akışına hazırlandı.
- Ana sayfa, ürünler sayfası, header ve footer üzerinden yeni rotaya doğal iç bağlantılar eklendi.
- Teklif formuna dekoratif panel ürün grubu ve query ön seçimi eklendi.
- Üretim derlemesi 37 sayfayla tamamlandı; rota self-canonical, sitemap içinde ve kontrol edilen 94 yerel hedefte eksik dosya/bağlantı bulunmadı.

### Sprint 2.10D — MDF, MDFLam ve Yongalevha Marka Sayfaları

Boyut: L  
Production etkisi: Yüksek

İşler:

- Üç mevcut sayfadaki placeholder'ları kaldır.
- MDFLam terminolojisini “melamin kaplı MDF” olarak düzelt.
- Medelam, Teknolam/Yongalam ve ilgili yüzey teknolojilerini doğru sayfalara yerleştir.
- Resmî kullanım alanlarını özgün dille aktar.
- Teyitsiz teknik özellikleri kaldır veya doğrulanmış veriyle değiştir.
- İlgili katalog ve ürün görsellerini ekle.

Kabul kriterleri:

- Her sayfada gerçek ürün görseli, doğru ürün ailesi ve katalog CTA'sı var.
- Generic sayfalarla aynı giriş metni/H1 kullanılmıyor.
- Stok ve ölçü ifadeleri güvenli ve doğrulanmış.

Sonuç:

- `2.10D` 2026-07-26 tarihinde tamamlandı.
- Kastamonu Entegre MDF, MDFLam ve yonga levha sayfaları ortak veri modelini kullanan ürün sayfalarına dönüştürüldü.
- Placeholder'lar; kesin stok, ölçü, termin, desen sayısı ve teyitsiz performans iddiaları kaldırıldı.
- MDFLam terminolojisi “melamin kaplı MDF” olarak düzeltildi; Medelam, ham yonga levha ve Teknolam/Yongalam ürün aileleri ayrıştırıldı.
- MDF ve yonga levha için 1000×1000, Medelam için 1500×800 resmî kaynak görselleri yerelde WebP olarak optimize edildi.
- Güncelliği doğrulanamayan eski genel kataloglar yayınlanmadı; üç sayfada güncel katalog/numune talep CTA'sı ve resmî kaynak bağlantısı sunuldu.
- Üretim derlemesi 37 sayfayla tamamlandı; üç rotada self-canonical, tek H1, görsel metadata ve 49 yerel hedef doğrulandı.

### Sprint 2.10E — Doorpan / Doorlam Kapı Paneli

Boyut: M  
Production etkisi: Yüksek

İşler:

- Kastamonu kapı paneli sayfasını Doorpan ve Doorlam odaklı yeniden yaz.
- Doorpan model/yüzey galerisi ekle.
- Doorlam dekorlarını ve 4 mm hazır panel bilgisini ekle.
- Doorpan ve Doorlam kataloglarını ekle.
- Genel `/urunler/kapi-paneli/` sayfasıyla marka/genel niyet ayrımını güçlendir.

Kabul kriterleri:

- `5.000+ seçenek` ve doğrulanmamış performans iddiaları yok.
- Doorpan ve Doorlam ayrı başlık, görsel ve CTA ile sunuluyor.
- Genel kapı paneli sayfasıyla içerik çakışması düşük.

Sonuç:

- `2.10E` 2026-07-26 tarihinde tamamlandı.
- Kastamonu Entegre kapı paneli sayfası Doorpan ve Doorlam ürün ailelerini ayrı görsel, içerik, katalog ve teklif CTA'larıyla sunacak biçimde yeniden kuruldu.
- 282×163 kategori küçük resmi production kullanımından çıkarıldı; Doorpan için 1500×800, Doorlam için 1600×1600 optimize resmî WebP görselleri kullanıldı.
- Doorpan'ın 7 yüzey ailesi ve 16 şekilli / 3 düz model ayrımı; Doorlam'ın 7 dekoru, 4 mm MDF taşıyıcısı ve hazır dekoratif yüzey farkı açıklandı.
- Doorpan ve Doorlam'ın yerel resmî katalogları ürün kartlarına ve katalog bölümüne bağlandı.
- `5.000+ seçenek`, stoktan teslim, üretici garantisi, özel ölçü ve teyitsiz performans iddiaları kaldırıldı.
- Üretim derlemesi 37 sayfayla tamamlandı; rotada self-canonical, tek H1, Product schema, sitemap kaydı, 7 yüzey varlığı ve 7 dekor adı doğrulandı.

### Sprint 2.10F — İki Katmanlı Panel Mimarisi

Boyut: M  
Production etkisi: Orta

İşler:

- Generic MDF/MDFLam/Kapı Paneli sayfalarını çok-markalı tedarik niyetine göre farklılaştır.
- Yeni generic `/urunler/yongalevha/` sayfasını oluştur.
- Generic ↔ Kastamonu sayfaları arasında bağlamlı iç linkler ekle.
- Generic sayfalarda Kastamonu, Kronospan ve Çamsan yalnızca doğrulanmış ürün/tedarik kapsamıyla anılacak.

Kabul kriterleri:

- Generic ve Kastamonu sayfaları farklı H1, title, description ve içerik açısına sahip.
- Her iki katman self-canonical.
- 301 yönlendirme yok.
- Yeni generic yongalevha rotası sitemap ve teklif formu mapping'inde.

Sonuç:

- `2.10F` 2026-07-26 tarihinde tamamlandı.
- Generic MDF, MDFLam ve kapı paneli sayfaları tek bir üreticiye odaklanan anlatımdan çıkarılarak ortak çok markalı B2B tedarik yapısına geçirildi.
- Yeni `/urunler/yongalevha/` rotası ham ve melamin kaplı ürün ayrımıyla oluşturuldu.
- Teyitli ticari kapsam doğrultusunda MDF sayfasında Kastamonu Entegre ve Kronospan, MDFLam sayfasında Kastamonu Entegre Medelam ve Çamsan gösterildi; teyitsiz ürün serisi, ölçü ve stok ayrıntıları yayınlanmadı.
- Generic ve Kastamonu sayfaları arasında dört ürün grubunda çift yönlü, bağlamlı iç linkler kuruldu.
- Ürün kataloğundaki birleşik MDF/MDFLam ve yonga levha/kapı paneli kartları dört ayrı ürün grubuna ayrıldı.
- Teklif formu MDF, MDFLam, yonga levha ve kapı paneli query'lerini ayrı ürün gruplarına eşleyecek biçimde güncellendi.
- Üretim derlemesi 38 sayfayla tamamlandı; dört generic rotada tek H1, farklı marka/genel içerik açısı, self-canonical, eksiksiz yerel hedef ve yeni yongalevha sitemap kaydı doğrulandı.

### Sprint 2.10G — Katalog Merkezi ve Yüzey Galerisi

Boyut: M  
Production etkisi: Orta

İşler:

- Kastamonu hub içinde filtrelenebilir katalog alanı oluştur.
- Yüzey galerisine ürün ailesi filtresi ekle.
- PDF sürüm/tarih bilgisini kullanıcıya göster.
- Fiziksel numune ile ekran rengi farkı uyarısı ekle.
- Katalog ve yüzey CTA'larını ilgili ürün sayfalarına dağıt.

Kabul kriterleri:

- Güncel katalogların tamamı tek merkezden erişilebilir.
- Eski sürümler kullanıcıya görünmüyor.
- Yüzey görsellerinde kod ve ad doğru.
- Mobilde yatay taşma yok.

Sonuç:

- `2.10G` 2026-07-26 tarihinde tamamlandı.
- Kastamonu Entegre hub içinde Compactlam 2026, Doorlam 2024 ve Doorpan 2024 yerel resmî dosyalarını kapsayan filtreli katalog merkezi oluşturuldu.
- Katalog kartlarında ürün ailesi, yayın yılı, sürüm ve dosya boyutu görünür hâle getirildi; metadata-only ve güncelliği belirsiz eski dokümanlar kullanıcıya açılmadı.
- 18 dekoratif panel dokusu ile 7 Doorpan yüzeyi tek galeride birleştirildi; Tümü, Dekoratif Panel ve Doorpan filtreleri eklendi.
- Filtre kontrolleri `aria-pressed` ve canlı sonuç sayısıyla erişilebilir biçimde uygulandı; JavaScript olmadan tüm katalog ve yüzey içerikleri görünür kalır.
- Ekran rengi/fiziksel numune farkı ile Doorpan örneklerinin yalnız yüzey biçimini gösterdiği uyarısı galeri öncesinde görünür hâle getirildi.
- Filtre satırları mobilde satır kıracak, kartlar minimum genişlik dayatmayacak biçimde kuruldu; yatay taşma üreten sınıf kullanılmadı.
- Üretim derlemesi 38 sayfayla tamamlandı; 14 ürün ailesi, 25 yüzey, 3 yerel katalog, 63 yerel hedef ve Kastamonu hub self-canonical kaydı doğrulandı.

### Sprint 2.10H — SEO, Schema ve Dönüşüm

Boyut: M  
Production etkisi: Orta

İşler:

- Title/description'ları marka ve ürün niyetine göre yaz.
- Kastamonu hub/dekoratif panel için `CollectionPage` + `ItemList`.
- Marka ürün sayfalarında uygun olanlarda `Product`/`ProductGroup`, `brand: Kastamonu Entegre`, `seller: Yiğiter`.
- Breadcrumb ve Organization bağlantılarını doğrula.
- Ürün bazlı teklif query mapping'lerini genişlet.
- Katalog indirme, teklif ve WhatsApp aksiyonlarına ölçüm etiketi ekle.

Kabul kriterleri:

- Schema doğrulamasında kritik hata yok.
- Canonical ve sitemap doğru.
- Teklif formu doğru ürün grubunu seçiyor.
- Generic sayfalar marka-agnostik schema; Kastamonu sayfaları marka odaklı schema kullanıyor.

Sonuç:

- `2.10H` 2026-07-26 tarihinde tamamlandı.
- Kastamonu Entegre hub ve dekoratif panel sayfalarının marka/ürün niyetine göre ayrışan title-description metinleri denetlendi; tek H1, self-canonical ve sitemap kayıtları korundu.
- Hub için 5 ürün grubunu, dekoratif panel için 10 ürün ailesini bağlayan `CollectionPage` + `ItemList` şemaları eklendi.
- MDF ve Medelam/MDFLam sayfaları `Product`; ham yonga levha/Teknolam ile Doorpan/Doorlam sayfaları ikişer varyantlı `ProductGroup` olarak modellendi.
- Marka ürün şemalarında `Kastamonu Entegre` marka bağlantısı ve fiyat yayınlamadan `Offer.seller → Yiğiter Organization` ilişkisi kuruldu; mevcut `BreadcrumbList` ve Organization `@id` bağlantıları doğrulandı.
- Teklif query eşlemesi 13 temsilî ürün sorgusuyla doğrulandı; Medelam'ın “melamin kapı yüzeyi” grubuna yanlış düşmesine neden olan öncelik sırası düzeltildi.
- Katalog indirme, teklif ve WhatsApp aksiyonları Vercel Analytics özel olaylarına bağlandı; başarılı teklif gönderimi ayrıca kişisel veri taşımayan `Quote Submitted` olayıyla işaretlendi.
- Üretim derlemesi 38 sayfayla tamamlandı; 6 Kastamonu rotasında schema, canonical, sitemap, tek H1 ve 2.421 yerel hedefte sıfır eksik doğrulandı.

### Sprint 2.10I — Yayın, Kalite ve Ölçüm

Boyut: S  
Production etkisi: Kontrol

İşler:

- Tüm program için production smoke test.
- Kırık link, 404, console, CSP ve failed request kontrolü.
- Masaüstü/mobil görsel kontrol.
- GSC URL Inspection ve sitemap kontrolü.
- Yayın öncesi metrik tabanı ile 14/28/56 günlük takip şablonu oluştur.

Kabul kriterleri:

- `npm run build` başarılı.
- Tüm hedef rotalar 200.
- Console/CSP kritik hata yok.
- Kırık resim/PDF yok.
- Yeni sayfalar sitemap içinde.
- Geri dönüş deployment'ı ve önceki commit kayıtlı.

Sonuç:

- `2.10I` 2026-07-26 tarihinde tamamlandı.
- Yedi production rotası, 73 ortak yerel hedef, altı sitemap/schema kaydı, CSP/Analytics ve 404 davranışı tekrar çalıştırılabilir production QA script'iyle doğrulandı.
- Altı Kastamonu rotası 1440×900 ve 390×844 görünümde kontrol edildi; yatay taşma, hata katmanı ve console warning/error bulunmadı.
- Dekoratif panelin lazy yüzey görselleri yükleme tamamlandıktan sonra eksiksiz görüntülendi; kalıcı kırık asset bulunmadı.
- Vercel planının `Hobby` olduğu ve özel olay raporlamadığı doğrulandı. Dönüşüm olayları aktif Microsoft Clarity custom event API'sine de bağlandı; Vercel hook'u plan yükseltmesi için korundu.
- Vercel Analytics raporuna beş alt marka rotası, Speed Insights raporuna hub/dekoratif panel eklendi; T0 değeri 352/1.139 toplam 7/28 günlük pageview olarak kaydedildi.
- GSC yapılandırmasına altı Kastamonu rotası eklendi. Yerel GSC kimlik bilgileri bulunmadığı için canlı API çağrısı yapılmadı; sitemap tarafı production'da temiz ve salt-okunur takip komutu kayıtlıdır.
- 2026-07-27, 2026-08-09, 2026-08-23 ve 2026-09-20 kontrol tarihleri; metrikler, karar eşikleri ve geri dönüş noktası `docs/kastamonu-entegre-measurement-plan.md` içinde kaydedildi.

## 8. Uygulama Sırası ve Bağımlılıklar

```text
2.10A Envanter
  ↓
2.10B Veri/asset altyapısı
  ↓
2.10C Hub + Dekoratif Panel
  ├── 2.10D MDF/MDFLam/Yonga
  └── 2.10E Doorpan/Doorlam
          ↓
2.10F İki katmanlı mimari
          ↓
2.10G Katalog + yüzey galerisi
          ↓
2.10H SEO/schema/dönüşüm
          ↓
2.10I QA + ölçüm
```

`2.10D` ve `2.10E`, `2.10B` tamamlandıktan sonra paralel hazırlanabilir; production'a aynı anda alınmaları gerekmez.

## 9. Yayın Stratejisi

- Her alt sprint ayrı feature branch ve PR.
- Önce Vercel preview, sonra production.
- İlk sürümde mevcut URL silinmeyecek ve yönlendirme yapılmayacak.
- Yeni içerik yayına girdikten sonra ilgili URL için GSC yeniden index talebi değerlendirilecek.
- Büyük asset paketi tek PR yerine ürün ailesine göre bölünecek.
- Her merge sonrası 24 saat teknik sağlık; 14/28/56 gün arama ve dönüşüm ölçümü yapılacak.

## 10. Ölçüm Planı

### Yayın öncesi taban

- Kastamonu Entegre route'larının son 28 günlük impression/click/position verisi.
- Ürün sayfası görüntülenmeleri.
- Teklif sayfasına geçişler.
- WhatsApp ve katalog CTA görünürlüğü.

### İzlenecek sorgu kümeleri

- kastamonu entegre bayi / ana bayi
- kastamonu entegre mdf
- kastamonu entegre mdflam
- kastamonu entegre yongalevha / sunta
- kastamonu entegre dekoratif panel
- glossmax / mattplus / evogloss bayi
- doorpan / doorlam panel

### Başarı göstergeleri

- Marka ürün sayfalarında impression artışı.
- 0 impression olan MDFLam/Kapı Paneli sayfalarının sorgu almaya başlaması.
- Ürün sayfasından teklif veya WhatsApp aksiyonuna geçiş.
- Katalog indirme/tıklama kullanımı.
- Generic ve marka sayfalarının farklı sorgularla görünmesi.
- Görsel eklemelerine rağmen LCP/CLS regresyonu olmaması.

## 11. Riskler ve Önlemler

| Risk | Önlem |
|---|---|
| Üretici portföyü ile Yiğiter stoğunun karışması | “Üretici ürün gamı” ve “stok/tedarik” alanlarını ayrı göster |
| Teyitsiz teknik özellik | Manifestte kaynak/teyit durumu olmadan yayınlama |
| Generic/marka keyword çakışması | H1, meta, içerik açısı ve schema'yı iki katmana göre ayır |
| Ağır görseller | WebP/AVIF, boyut bütçesi, lazy loading, sabit ölçüler |
| Eski katalog | Sürüm, tarih, hash ve arşiv standardı |
| Üretici metniyle duplicate content | Özgün Yiğiter bayi/tedarik bağlamı ve kısa kaynak referansı |
| Yanlış renk beklentisi | Ekran/fiziksel numune farkı uyarısı |
| Büyük tek seferlik release | Küçük PR'lar ve ürün ailesi bazlı rollout |

## 12. Program Definition of Done

- Kastamonu hub ve beş marka alt sayfasında placeholder kalmaması.
- Dekoratif panel sayfasının production'da olması.
- Doorpan/Doorlam içeriğinin doğru ve görselli olması.
- MDFLam terminolojisinin düzeltilmesi.
- Katalogların sürümlü ve erişilebilir olması.
- Generic yongalevha sayfasının açılması.
- Generic ve marka katmanlarının farklılaştırılması.
- Schema/canonical/sitemap/CTA kontrollerinin geçmesi.
- Tüm assetlerin manifestte izlenebilir olması.
- 14/28/56 günlük ölçüm takviminin başlatılması.

## 13. Kapsam Dışı

- Fiyatların açık yayınlanması.
- Gerçek zamanlı stok entegrasyonu.
- ERP/CRM entegrasyonu.
- Kullanıcıya özel bayi portalı.
- Kastamonu Entegre'nin tüm ürün portföyünün tek sürümde yayınlanması.
- Floorpan, laminat tezgâh, süpürgelik ve duvar profili; satış önceliği ayrıca teyit edilmeden bu programa alınmayacaktır.
