# Kastamonu Entegre İddia Denetimi

Tarih: 2026-07-26

Sprint: `2.10A — Asset ve İddia Envanteri`

Kapsam: Mevcut Kastamonu Entegre hub, MDF, MDFLam, yongalevha ve kapı paneli sayfaları

## Sonuç

Mevcut sayfalardaki teknik ve ticari ifadeler üç yayın sınıfına ayrıldı:

- `resmî kaynak`: Kastamonu Entegre'nin güncel ürün sayfası veya resmî kataloğu ile destekleniyor. Üretici metni birebir kopyalanmadan, kaynak anlamı korunarak yeniden yazılabilir.
- `Yiğiter teyidi`: Stok, tedarik, ölçü, kesim, sevkiyat, termin, fiyat, garanti ve bayi statüsü gibi yalnızca Yiğiter'in güncel ticari verisiyle doğrulanabilecek ifade.
- `kaldırılacak`: İncelenen resmî kaynaklarda desteklenmeyen, yanlış ürün ailesine bağlanan, mutlak/süperlatif veya terminolojik olarak hatalı ifade.

`Yiğiter teyidi` sınıfındaki bir ifade, satış/operasyon sahibi tarafından tarihli olarak doğrulanmadıkça production metnine kesin bilgi olarak yazılmayacak. Teklif çağrısı kullanılabilir; stok veya teslim süresi taahhüt edilmeyecek.

## İncelenen Kaynaklar

| Kod | Resmî kaynak | Kullanım |
|---|---|---|
| `KE-DP` | [Dekoratif Panel](https://www.kastamonuentegre.com/tr_tr/urunler/dekoratif-panel) | Medelam, Teknolam/Yongalam, Glossmax, Glossmax Pro, Mattplus, Evogloss, akrilik, Printpan, Compact Panel Lam ve yüzey kodları |
| `KE-MY` | [MDF / Yonga Levha / Compact Panel](https://www.kastamonuentegre.com/tr_tr/urunler/mdf-yonga-levha) | Ham MDF, yonga levha ve Compact Panel tanımı, kullanım ve işlenebilirlik |
| `KE-KP` | [Kapı Paneli](https://www.kastamonuentegre.com/tr_tr/urunler/kapi-paneli) | Doorpan, Doorlam, yüzey aileleri, dekor adları ve kullanım |
| `KE-KAT` | [Kataloglar](https://www.kastamonuentegre.com/tr_tr/kataloglar) | Güncel ürün kataloğu ve broşür adayları |
| `KE-KS` | [Kullanım Şartları](https://www.kastamonuentegre.com/tr_tr/sayfa/kullanim-sartlari) | Genel site kullanım çerçevesi |

Görsel ve katalog kullanım dayanağı, kullanıcının 2026-07-26 tarihinde verdiği “bayilik anlaşması görsel kullanımına izin veriyor” teyididir. Sözleşme nüshası repoda tutulmuyor; bu belge hukuki görüş yerine içerik ve yayın izlenebilirliği sağlar.

## Mevcut İddiaların Sınıflandırılması

### Hub: `/urunler/kastamonu-entegre/`

| ID | Mevcut ifade/iddia | Sınıf | Dayanak / sorun | Uygulama kararı |
|---|---|---|---|---|
| `H-01` | “Yiğiter, Kastamonu Entegre Ana Bayisi” | `Yiğiter teyidi` | Kullanıcı aktif bayilik anlaşmasını teyit etti; üretici sayfaları tekil bayi statüsünü kanıtlamıyor. | Ana bayi ifadesi korunabilir; sözleşme/kurumsal teyit tarihi içerik kaydında tutulmalı. |
| `H-02` | “Yongalevha, MDF, MDFLam ve panel ürünlerinin tüm portföyü stoktan” | `Yiğiter teyidi` | Üretici gamı, Yiğiter'in fiilî stok listesi değildir. “Tüm” ve “stoktan” mutlak ifadeleri teyitsiz. | “Tüm portföy” kaldırılacak. “Stok ve tedarik durumu için teklif alın” kullanılacak. |
| `H-03` | “MDFLam ve kapı paneli ürünleri stoktan” | `Yiğiter teyidi` | Güncel SKU/dekor stok listesi yok. | Satış ekibi tarihli liste verene kadar kesin stok ifadesi kaldırılacak. |
| `H-04` | “Türkiye geneli sevkiyat” | `Yiğiter teyidi` | Üreticinin ürün özelliği değil, Yiğiter operasyon iddiası. | Operasyon tarafından kapsam ve istisnalar teyit edilirse korunacak. |
| `H-05` | “En kısa sürede ulaştırıyoruz” | `kaldırılacak` | Ölçülebilir termin veya SLA yok; mutlak hız vaadi. | “Teslimat planı teklif aşamasında paylaşılır” olarak değiştirilecek. |
| `H-06` | “5.000+ yüzey/desen/renk seçeneği” | `kaldırılacak` | İncelenen güncel resmî ürün sayfalarında bu toplam desteklenmiyor; yüzey kodu ile dekor sayısı da aynı şey değil. | Rozet ve liste maddesi kaldırılacak; yalnızca doğrulanmış yüzey kodları gösterilecek. |
| `H-07` | “55+ ülkeye ihracat” | `kaldırılacak` | Ürün sayfası amacıyla ilgisiz ve incelenen kaynak setinde güncel sayı doğrulanmadı. | Hub rozetinden kaldırılacak. Kurumsal içerik gerekirse ayrıca güncel resmî kaynakla hazırlanacak. |
| `H-08` | “Türkiye lider üretici” | `kaldırılacak` | Süperlatif ve kıyas ölçütü yok. | “Kastamonu Entegre ürün ailesi” gibi nötr marka anlatımı kullanılacak. |
| `H-09` | “Orijinal ürün, üretici garantisi” | `Yiğiter teyidi` | Bayilik, tek başına her ürün için garanti kapsamı ve süresini açıklamaz. | “Yetkili tedarik kanalı” gibi doğrulanabilir ifade tercih edilecek; garanti şartı ürün belgesine bağlanacak. |
| `H-10` | “Rekabetçi ana bayi fiyatı” | `Yiğiter teyidi` | Fiyat karşılaştırması ve dönem tanımı yok. | “Projenize özel teklif” olarak değiştirilecek. |
| `H-11` | “20+ yıllık panel piyasası tecrübesi” | `Yiğiter teyidi` | Şirket geçmişiyle doğrulanmalı; Kastamonu ürün kaynağı bunu desteklemez. | Kuruluş tarihi/fiilî faaliyet alanı doğrulanırsa genel şirket kanıtıyla korunabilir. |
| `H-12` | Safe Surface: “antibakteriyel ve hijyenik yüzey” | `resmî kaynak` | Resmî broşür mevcut; ancak hangi güncel ürün/dekorlarda geçerli olduğu henüz eşlenmedi. | 2.10B'de broşür içeriği ve ürün eşleşmesi doğrulanmadan ham MDF kartına bağlanmayacak. |
| `H-13` | QuietPan: “ses yalıtımlı panel / akustik çözüm” | `resmî kaynak` | Resmî broşür mevcut; ürün ailesi ve performans değeri sayfada ayrıştırılmamış. | Ayrı ürün/teknoloji olarak anlatılacak; ölçülebilir performans yalnızca katalog değeriyle yazılacak. |
| `H-14` | Mattplus: “parmak izi bırakmayan mat yüzey” | `resmî kaynak` | `KE-DP`, yüksek parmak izi dayanımı, kolay temizlenebilirlik ve soft-touch özelliklerini destekliyor. | “Parmak izi bırakmayan” mutlak ifadesi yerine “parmak izine karşı yüksek dayanım” kullanılacak. |
| `H-15` | Glossmax: “yüksek parlaklıklı laminat yüzey” | `resmî kaynak` | `KE-DP`, UV akrilik lak uygulanan dekoratif parlak panel olarak tanımlıyor; “laminat” ifadesi doğru ürün tanımı değil. | “Yüksek parlaklıklı dekoratif panel/yüzey” olarak düzeltilecek. |
| `H-16` | Evogloss: “parlak ve dirençli; yoğun kullanım için ideal” | `resmî kaynak` | `KE-DP`, parlak/mat desenleri ve mikro çizilme/solmaya karşı yüksek dayanımı destekliyor; “ideal” genellemesi kaynaklanmıyor. | Somut özellikler yazılacak; “ideal” çıkarılacak. |
| `H-17` | Softmatt: “kadife dokunuşlu mat yüzey” | `kaldırılacak` | İncelenen güncel ürün listesinde `Softmatt` ürün adı yok. `PS74 Soft Mat`, `Mattplus` ve katalogdaki `Evosoft` birbirine karıştırılmamalı. | Softmatt kartı kaldırılacak; Evosoft yalnızca katalog/ürün eşleştirmesi doğrulanınca eklenecek. |

### MDF: `/urunler/kastamonu-entegre/mdf/`

| ID | Mevcut ifade/iddia | Sınıf | Dayanak / sorun | Uygulama kararı |
|---|---|---|---|---|
| `M-01` | MDF; orta yoğunluklu lif levhadır | `resmî kaynak` | `KE-MY` MDF tanımını destekliyor. | Kısa ve özgün tanım olarak korunacak. |
| `M-02` | Pürüzsüz yüzey ve hassas işçilikte kullanım | `resmî kaynak` | `KE-MY`, yüzey yapısı, makineyle kesim ve kaplama/işleme kullanımını destekliyor. | Abartısız biçimde yeniden yazılacak. |
| `M-03` | Frezeleme, oyma, boyama ve kaplama performansı | `resmî kaynak` | `KE-MY`, frezelik MDF, dekoratif folyo/PVC/ahşap kaplama ve işlenebilirliği destekliyor. | “Üstün performans” kaldırılarak uygulama olanağı anlatılacak. |
| `M-04` | “Standart ve lamine MDF ürünlerinin tümü stoktan” | `Yiğiter teyidi` | Ürün ailesi/stoğu belirsiz; “tümü” mutlak. “Lamine MDF” de hangi ürünün kastedildiğini açıklamıyor. | Ürün gamı ve stok ayrıştırılacak; kesin stok ifadesi kaldırılacak. |
| `M-05` | Kalınlık: 3, 4, 6, 8, 10, 12, 15, 18, 22, 25, 30 mm | `Yiğiter teyidi` | İncelenen resmî web sayfasında bu liste yok; ürün türüne göre değişebilir. | Güncel katalog + Yiğiter tedarik listesi olmadan yayınlanmayacak. |
| `M-06` | Yoğunluk: 650–750 kg/m³ | `kaldırılacak` | Genel MDF aralığı ürün-spesifik belgeye bağlanmamış; Compact Panel için resmî sayfa ayrıca ≥1000 kg/m³ veriyor. | Ham MDF sayfasından kaldırılacak; her ürünün teknik föyü ayrı yönetilecek. |
| `M-07` | Safe Surface, QuietPan, Mattplus, Glossmax, Evogloss ve Softmatt ham MDF “teknolojileri” | `kaldırılacak` | Özel ürün/yüzey aileleri ham MDF özellikleri gibi sunulmuş. Softmatt ayrıca doğrulanmıyor. | Ham MDF sayfasından çıkarılıp dekoratif panel/veri modelinde doğru ürün ailelerine bağlanacak. |
| `M-08` | Mobilya, kapak, kaplama/boyama, iç mekân kullanım alanları | `resmî kaynak` | `KE-MY` mobilya ve yaşam alanları ile membran/akrilik kapak ve kaplama zeminini destekliyor. | Kaynak anlamı korunarak sadeleştirilecek. |
| `M-09` | “Sunta alternatifi yüksek kaliteli panel” | `kaldırılacak` | “Yüksek kaliteli” kıyas ölçütü yok; MDF ve yonga levha farklı ihtiyaçlara hizmet eder. | Kullanım/işleme farkı tarafsız biçimde anlatılacak. |

### MDFLam: `/urunler/kastamonu-entegre/mdflam/`

| ID | Mevcut ifade/iddia | Sınıf | Dayanak / sorun | Uygulama kararı |
|---|---|---|---|---|
| `L-01` | “Laminat kaplı / hazır laminat yüzeyli MDF” | `kaldırılacak` | `KE-DP`, Medelam'ı MDF üzerine melamin uygulanan panel olarak tanımlıyor. Laminat ve melamin aynı ürün değildir. | Başlık, meta ve gövde “melamin kaplı MDF (Medelam)” olarak düzeltilecek. |
| `L-02` | Ek kaplama işlemi olmadan kullanılabilir | `resmî kaynak` | Melamin kaplı panelin dekoratif hazır yüzey niteliğiyle uyumlu; ifade ürün bağlamında yazılmalı. | Medelam tanımı içinde, “uygulamaya hazır dekoratif yüzey” şeklinde kullanılacak. |
| `L-03` | “Geniş MDFLam renk ve desen kataloğu stoktan” | `Yiğiter teyidi` | Üretici desen gamı ile Yiğiter stoğu ayrıştırılmamış. | “Üretici ürün gamı” ve “teklif anındaki tedarik/stok” ayrı alanlara bölünecek. |
| `L-04` | Kalınlık: 8, 10, 12, 15, 18, 22, 25 mm | `Yiğiter teyidi` | Güncel ürün/katalog ve Yiğiter tedarik listesiyle doğrulanmadı. | Teyit edilene kadar kaldırılacak. |
| `L-05` | “100+ renk & desen” | `kaldırılacak` | Güncel katalog sayımı veya kaynak notu yok. | Sayı kaldırılacak; seçili yüzey/doku kodları gösterilecek. |
| `L-06` | “Meşe, ceviz, gürgen vb. 200+ desen” | `kaldırılacak` | İncelenen resmî sayfada bu sayı desteklenmiyor. | Sayı kaldırılacak; doğrulanmış dekorlar ileride katalog verisinden üretilecek. |
| `L-07` | Mat, parlak, ahşap, düz renk, taş/beton yüzey grupları | `resmî kaynak` | `KE-DP` PS yüzey ailelerini listeliyor; fakat her yüzey her ürün/dekor için geçerli olmayabilir. | Yüzey galerisi “doku örnekleri” olarak sunulacak; ürün eşleşmesi veri modelinde ayrı tutulacak. |
| `L-08` | Glossmax ve Softmatt, MDFLam yüzey seçenekleridir | `kaldırılacak` | Glossmax ayrı UV akrilik laklı dekoratif paneldir; Softmatt doğrulanmıyor. | Glossmax ayrı ürün kartına taşınacak; Softmatt kaldırılacak. |
| `L-09` | Mobilya, mutfak/banyo, raf, mağaza donanımı kullanım alanları | `resmî kaynak` | `KE-DP`, melamin kaplı paneller için mobilya ve iç dekorasyon kullanımını destekliyor; ayrıntılı alt kullanımlar katalogla teyit edilmeli. | Genel kullanım korunacak; spesifik iddialar katalogla eşlenecek. |

### Yongalevha: `/urunler/kastamonu-entegre/yongalevha/`

| ID | Mevcut ifade/iddia | Sınıf | Dayanak / sorun | Uygulama kararı |
|---|---|---|---|---|
| `Y-01` | Yonga levha; odun yongalarının reçineyle sıcaklık ve basınç altında preslenmesiyle üretilir | `resmî kaynak` | `KE-MY` tanımı destekliyor. | Özgün ve kısa anlatımla korunacak. |
| `Y-02` | “Tüm yongalevha portföyü stoktan” | `Yiğiter teyidi` | Üretici gamı ve Yiğiter stoğu ayrıştırılmamış; mutlak ifade. | Kaldırılacak; güncel durum teklif aşamasına bağlanacak. |
| `Y-03` | “Geniş ölçü, renk ve desen; her projeye uygun” | `kaldırılacak` | Mutlak uygunluk ve katalog sayımı yok. | Ham yonga levha ile melamin kaplı Teknolam/Yongalam ayrı anlatılacak. |
| `Y-04` | “Siparişiniz en kısa sürede ulaşır” | `kaldırılacak` | Teyitli teslim süresi/SLA yok. | Teslimat planının teklifte netleştiği yazılacak. |
| `Y-05` | 2800×2070 mm standart levha | `Yiğiter teyidi` | İncelenen resmî web sayfasında ürün/tesis bazlı ebat tablosu yok. | Güncel katalog ve tedarik listesi olmadan yayınlanmayacak. |
| `Y-06` | Özel kesim mevcut | `Yiğiter teyidi` | Yiğiter operasyon hizmetidir; üretici kaynağı doğrulamaz. | Kesim tesisi, tolerans ve minimum sipariş koşullarıyla birlikte teyit edilirse yayınlanacak. |
| `Y-07` | Ham ve melamin kaplı seçenekler | `resmî kaynak` | `KE-MY` ham yonga levhayı; `KE-DP` yonga levha üzerine melamin uygulanan Teknolam/Yongalam'ı destekliyor. | İki ürün ailesi ayrı kart/alt başlık olarak sunulacak. |
| `Y-08` | Mobilya, iç dekorasyon ve kaplama kullanım alanları | `resmî kaynak` | `KE-MY` mobilya, iç dekorasyon ve kaplamayı destekliyor. Kapı dolgu gibi özel kullanım ayrıca teyit gerektirir. | Genel kullanımlar korunacak; kapı dolgu iddiası teknik belge olmadan çıkarılacak. |

### Kapı Paneli: `/urunler/kastamonu-entegre/kapi-paneli/`

| ID | Mevcut ifade/iddia | Sınıf | Dayanak / sorun | Uygulama kararı |
|---|---|---|---|---|
| `K-01` | “Melamin ve laminat yüzeyli genel kapı paneli serisi” | `kaldırılacak` | Resmî kaynak iki somut aile tanımlıyor: beyaz astarlı Doorpan ve dekoratif kâğıt kaplı Doorlam. | Sayfa Doorpan ve Doorlam olarak ikiye ayrılacak. |
| `K-02` | “Yüksek baskı dayanımı” | `kaldırılacak` | İncelenen resmî ürün sayfasında ölçülebilir baskı dayanımı yok. | Teknik föy olmadan yayınlanmayacak. |
| `K-03` | “5.000+ renk ve desen” | `kaldırılacak` | Doorpan için 7 yüzey ailesi; Doorlam için 7 dekor listeleniyor. 5.000+ desteklenmiyor. | Doğrulanmış aile/dekor adları kullanılacak. |
| `K-04` | “Standart ve ısmarlama ölçüler” | `Yiğiter teyidi` | Resmî metin model/ölçü çeşitliliğinden söz ediyor ancak ısmarlama üretim taahhüdü vermiyor. | Özel ölçü ifadesi kaldırılacak; güncel ebatlar katalogdan, tedarik durumu Yiğiter'den alınacak. |
| `K-05` | “Çizilme, darbe ve nem direnci yüksek” | `kaldırılacak` | İncelenen kapı paneli sayfasında bu üçlü performans iddiası yok. | Ürün-spesifik test değeri olmadan kullanılmayacak. |
| `K-06` | “Kesme, frezeleme ve yapıştırmaya uygun” | `kaldırılacak` | Genel panel bilgisi Doorpan/Doorlam'a doğrudan taşınmış; resmî kapı paneli kaynağında bu işlem listesi yok. | Kullanım/işleme talimatı katalogla doğrulanırsa ürün bazında eklenecek. |
| `K-07` | Kapı gövdesi, çerçeve, pervaz, dolap, duvar paneli kullanımı | `kaldırılacak` | `KE-KP`, Doorpan ve Doorlam için ev/ofis iç kapı panellerini destekliyor; diğer kullanım alanları doğrulanmıyor. | İlk sürüm yalnızca iç kapı paneli kullanımını söyleyecek. |
| `K-08` | Doorpan: 16 şekilli, 3 düz yüzey; Meşe, Çam, Maun, Fantezi, Freze, Modern, Düz | `resmî kaynak` | `KE-KP` açıkça listeliyor. | Doorpan bölümünde model/yüzey galerisiyle kullanılacak. |
| `K-09` | Doorpan beyaz astarlı; örnek renklendirme yalnızca yüzeyi göstermek için | `resmî kaynak` | `KE-KP` teknik notunda açıkça belirtiliyor. | Galeri yanında zorunlu açıklama olarak gösterilecek. |
| `K-10` | Doorlam: 4 mm MDF üzerine dekoratif kâğıt kaplı hazır panel | `resmî kaynak` | `KE-KP` açıkça destekliyor. | Doorlam ürün tanımının çekirdeği olacak. |
| `K-11` | Doorlam için ek cila/boya gerekmez; zaman ve maliyet avantajı | `resmî kaynak` | `KE-KP` destekliyor. | Mutlak tasarruf oranı vermeden, ek işlem ihtiyacını azaltan yapı olarak yazılacak. |
| `K-12` | Doorlam: Buz Meşe, Kastamonu Meşe, Zeugma, Urartu, Likya, Sümer, Babil; toplam 7 dekor | `resmî kaynak` | `KE-KP` açıkça listeliyor. | Dekor adları katalog görselleriyle eşlenerek kullanılacak. |
| `K-13` | Doorpan/Doorlam stoktan teslim | `Yiğiter teyidi` | Güncel model/dekor stok listesi yok. | “Stok ve termin için teklif alın” kullanılacak. |

## Üretici Gamı ile Yiğiter Tedarik/Stok Ayrımı

| Ürün ailesi | Üretici gamı kaynağı | Yiğiter tedarik durumu | Yiğiter stok durumu | Yayın kuralı |
|---|---|---|---|---|
| Ham MDF | `KE-MY` | Genel ürün satışı teyitli; Kastamonu alt ürün/SKU listesi bekleniyor | Bekleniyor | Ürün tanımı yayınlanabilir; kalınlık/ebat/stok yayınlanamaz. |
| Ham yonga levha | `KE-MY` | Genel ürün satışı teyitli; Kastamonu alt ürün/SKU listesi bekleniyor | Bekleniyor | Ürün tanımı yayınlanabilir; ebat/stok yayınlanamaz. |
| Medelam | `KE-DP` | Bekleniyor | Bekleniyor | Üretici gamı olarak anlatılabilir; stok iddiası yok. |
| Teknolam / Yongalam | `KE-DP` | Bekleniyor | Bekleniyor | Üretici gamı olarak anlatılabilir; stok iddiası yok. |
| Glossmax / Glossmax Pro | `KE-DP` | Bekleniyor | Bekleniyor | Ürün ailesi/katalog yayınlanabilir; tedarik CTA'sı kesin stok söylemez. |
| Mattplus | `KE-DP` | Bekleniyor | Bekleniyor | Resmî özellikler yayınlanabilir; dekor/SKU stok iddiası yok. |
| Evogloss / Evogloss Reflections | `KE-DP`, `KE-KAT` | Bekleniyor | Bekleniyor | Sürüm ilişkisi doğrulanınca güncel katalog seçilir. |
| Evosoft | `KE-KAT` | Bekleniyor | Bekleniyor | Ürün sayfası/güncel gam eşleşmesi doğrulanana kadar `aday`. |
| Çizilmez ve endüstriyel akrilik | `KE-DP` | Bekleniyor | Bekleniyor | Ürün ailesi yayınlanabilir; marka/malzeme ayrıntısı katalogdan doğrulanır. |
| Printpan | `KE-DP` | Bekleniyor | Bekleniyor | Üretici gamı olarak anlatılabilir; stok iddiası yok. |
| Compact Panel / Compact Panel Lam | `KE-MY`, `KE-DP` | Bekleniyor | Bekleniyor | Ham ve melamin kaplı ürün ayrımı korunur. |
| Doorpan | `KE-KP` | Bekleniyor | Bekleniyor | Resmî yüzey aileleri yayınlanabilir; model/ebat/stok teklifte netleşir. |
| Doorlam | `KE-KP` | Bekleniyor | Bekleniyor | 4 mm ve 7 dekor yayınlanabilir; stok/termin teklifte netleşir. |

## Satış Ekibinden Gereken Teyit Paketi

2.10C–2.10E production metinlerinde ticari iddia kullanmadan önce aşağıdaki alanlar tarihli bir CSV veya onay notuyla sağlanmalı:

1. Ürün ailesi ve resmî ürün adı.
2. Düzenli tedarik edilen / sadece siparişle gelen ayrımı.
3. Stokta tutulan kalınlık, ebat, dekor ve yüzey kodları.
4. Kesim hizmeti varsa tesis, tolerans, minimum sipariş ve kapsam.
5. Türkiye geneli sevkiyat kapsamı ve hariç bölgeler/koşullar.
6. Ortalama değil, müşteriye söylenmesine izin verilen termin dili.
7. Üretici garantisi varsa ürün ve belge bazında kapsam.
8. Ana bayi unvanının webde kullanılacak tam yazımı.

## 2.10B İçin Yayın Kapıları

- Manifestte `onaylı` olan dosyalar indirilecek; orijinal dosya hash'i ve boyutu kaydedilecek.
- `aday` kataloglar, PDF içeriği ve ürün gamı eşleşmesi doğrulanmadan kullanıcıya gösterilmeyecek.
- Kaynak dosyalar hotlink edilmeyecek; yerel, optimize edilmiş web varlıkları kullanılacak.
- MDFLam veri modelinde ana terim `melamin kaplı MDF`, ürün ailesi `Medelam` olacak.
- `Softmatt`, `5.000+`, `55+`, “Türkiye lider”, mutlak stok/termin ve teyitsiz teknik değerler yeni veri modeline taşınmayacak.
- Üretici gamı ile Yiğiter tedarik/stok alanları ayrı tip ve alanlarda tutulacak.
