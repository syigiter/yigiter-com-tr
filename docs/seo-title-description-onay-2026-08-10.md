# Title ve Description Düzeltme Önerileri — Onay Bekliyor

Tarih: 2026-08-10
Kaynak: `SEO_AUDIT_2026-08-10.md` § 3 ve § 7 (Hızlı Kazanımlar 4, 5, 6)
Durum: **Uygulanmadı.** Onay sonrası tek PR olarak uygulanacak.

## Hesaplama kuralı

`BaseLayout` başlığın sonuna otomatik olarak ` | Yiğiter Orman Ürünleri` ekliyor — **25 karakter**. Aşağıdaki "etkin" değerler bu ek dahildir; Google SERP'te görünen budur. Hedef: etkin title ≤ 60 karakter, description ≤ 155 karakter.

`appendSiteName={false}` prop'u kullanıldığında ek yapılmaz ve title'ın tamamı size kalır. Uzun ama değerli başlıklarda bu yol tercih edilmiştir.

---

## ÖNCE KARAR GEREKEN İKİ KONU

Bunlar benim tek başıma değiştirmemem gereken, iş bilgisi gerektiren konular.

### K1 — "Melamin Kapı Yüzeyi **Üreticisi**" ifadesi

`/urunler/melamin-kapi-yuzeyi` sayfasının title'ı "Melamin Kapı Yüzeyi Üreticisi", description'ı "üreticisi ve toptan tedarikçisi" diyor.

`CLAUDE.md` şirket kimliğinde melamin kapı yüzeyi **ithalat** kalemi olarak tanımlı ("İTHALATÇI — Melamin kaplı kapı yüzeyi ithalatı"), üretim kalemi olarak kapı kasası ve pervaz listeleniyor. Aynı dosyadaki 10. çalışma kuralı da rolün doğru belirtilmesini şart koşuyor.

**Gerginlik:** Bu sayfanın sıralandığı ve tıklama getiren sorgu `melamin kapı yüzeyi üreticileri` (poz 4,2 — sitenin en iyi dönüşen sorgusu, 28 günde 3 klik). Yani yanlış olabilecek kelime aynı zamanda en çok işe yarayan kelime.

**Seçenekler:**

- **A)** Melamin yüzeyi gerçekten üretiyorsanız → mevcut metin doğru, dokunmuyoruz.
- **B)** Üretmiyorsanız → "Melamin Kapı Yüzeyi Tedarikçisi" veya "İthalatçısı" olmalı. Sıralamada kısa vadeli kayıp riski var ama beyan doğru olur.
- **C)** Ara yol → title "Melamin Kapı Yüzeyi Tedariki", description içinde "üretici firmalardan ithal ediyoruz" gibi net bir cümle. Sorgu eşleşmesi kısmen korunur, beyan doğru olur.

**Kararınız gerekiyor. Aşağıdaki M9 önerisi (C) şıkkına göre yazıldı — değiştirmek isterseniz söyleyin.**

### K2 — `/ihracat` sayfasının description'ı İngilizce

Türkçe bir sayfa (`title: "İhracat"`, `lang="tr"`) ama meta description tamamen İngilizce:

> "Yiğiter Orman Ürünleri — Door frame and architrave manufacturer, exporting to Europe, Middle East, Central Asia and Africa. Regular shipments, international quality standards."

Türkçe SERP'te İngilizce açıklama çıkıyor. Bu bir hata gibi duruyor ama bilinçli bir tercih de olabilir (yurt dışı alıcı hedefi). Aşağıdaki M8 önerisi Türkçeye çevirdi. İngilizce kalması gerekiyorsa asıl yapılması gereken, o içeriği `/en/` altına taşımak.

---

## A. Title Düzeltmeleri (5 sayfa)

### T1 — `/en/interior-door-components/`

**Ek sorun:** Mevcut title zaten `| Yigiter` içeriyor, `BaseLayout` üstüne `| Yiğiter Orman Ürünleri` ekliyor → **çift markalama**. SERP'te "… | Yigiter | Yiğiter Orman Ürünleri" görünüyor.

| | Metin | Etkin |
|---|---|---|
| Şimdi | `Interior Door Components Manufacturer from Türkiye \| Yigiter` | **85** ❌ |
| Öneri | `Door Frame & Architrave Manufacturer Türkiye \| Yigiter` | **54** ✅ |

Uygulama: `appendSiteName={false}` eklenecek.
Gerekçe: `CLAUDE.md` İngilizce hedef kelimeleri "Door frame manufacturer Turkey" ve "Door architrave supplier Turkey" — yeni başlık ikisini de karşılıyor. Çift markalama gidiyor.

### T2 — `/urunler/kapi-komponentleri/`

| | Metin | Etkin |
|---|---|---|
| Şimdi | `Kapı Komponentleri \| Kapı Kasası, Pervaz ve Panel Tedariki` | **83** ❌ |
| Öneri | `Kapı Kasası, Pervaz ve Panel Tedariki` | **62** ⚠️ |
| Alternatif | `Kapı Kasası, Pervaz ve Kapı Paneli` | **59** ✅ |

Gerekçe: "Kapı Komponentleri" ifadesi breadcrumb ve H1'de zaten var, title'da tekrarı yer kaybı. **Alternatifi öneriyorum.**

### T3 — `/urunler/kastamonu-entegre/kapi-paneli`

| | Metin | Etkin |
|---|---|---|
| Şimdi | `Kastamonu Entegre Doorpan ve Doorlam Kapı Paneli` | **73** ❌ |
| Öneri | `Kastamonu Entegre Doorpan ve Doorlam Kapı Paneli` | **48** ✅ |

Uygulama: Metin **aynı kalıyor**, yalnız `appendSiteName={false}` ekleniyor.
Gerekçe: `doorlam` (poz 11) ve `medelam` sorguları geliyor; marka terimlerinin hiçbirini feda etmeye gerek yok.

### T4 — `/urunler/mdf`

| | Metin | Etkin |
|---|---|---|
| Şimdi | `Toptan MDF Levha ve Çok Markalı Tedarik` | **64** ❌ |
| Öneri | `Toptan MDF Levha Tedariki` | **50** ✅ |

Gerekçe: "Çok markalı" kullanıcının aradığı bir terim değil; sayfa içinde zaten anlatılıyor.

### T5 — `/urunler/yongalevha`

| | Metin | Etkin |
|---|---|---|
| Şimdi | `Toptan Yonga Levha ve Sunta Tedariki` | **61** ❌ |
| Öneri | `Toptan Yonga Levha ve Sunta` | **52** ✅ |

Gerekçe: Sınırın 1 karakter üstünde. "Sunta" halk dilinde daha çok aranan terim, korunuyor.

---

## B. Description Düzeltmeleri (7 sayfa)

### M6 — `/` (anasayfa) · 176 → 152

| | Metin |
|---|---|
| Şimdi | Kastamonu Entegre Ana Bayisi, Genç Boya Distribütörü, kapı kasası ve pervaz üreticisi, melamin kapı yüzeyi ithalatçısı. 20+ yıllık tecrübeyle Türkiye geneli ve 4 kıtaya hizmet. |
| Öneri | Kastamonu Entegre Ana Bayisi ve Genç Boya Distribütörü. Kapı kasası ve pervaz üreticisi, melamin kapı yüzeyi ithalatçısı. 20+ yıl, Türkiye geneli sevkiyat. |

### M7 — `/subeler` · 164 → 149

| | Metin |
|---|---|
| Şimdi | Yiğiter Orman Ürünleri'nin İkitelli ve Dudullu satış noktaları. MDF, MDFLAM, kapı komponentleri, boya ve yardımcı ürünler için şube bilgileri ve iletişim detayları. |
| Öneri | Kastamonu Entegre satış noktalarımız: İkitelli ve Dudullu şubeleri. MDF, MDFLam, kapı komponentleri ve boya için adres, telefon ve çalışma saatleri. |

Gerekçe: `kastamonu entegre satış noktaları` sorgusu poz 33'ten geliyor, `kastamonu entegre istanbul bayileri` poz 37'den. Bu sayfa ikisini de karşılayabilecek en yakın varlık. `MDFLAM` → `MDFLam` marka yazımı da düzeltildi.

### M8 — `/ihracat` · 175 → 151 · **K2 kararına bağlı**

| | Metin |
|---|---|
| Şimdi | Yiğiter Orman Ürünleri — Door frame and architrave manufacturer, exporting to Europe, Middle East, Central Asia and Africa. Regular shipments, international quality standards. |
| Öneri | Kendi ürettiğimiz kapı kasası ve pervazı Avrupa, Orta Doğu, Türki Cumhuriyetler ve Afrika'ya düzenli olarak ihraç ediyoruz. İhracat teklifi için bize ulaşın. |

### M9 — `/urunler/melamin-kapi-yuzeyi` · 162 → 154 · **K1 kararına bağlı**

| | Metin |
|---|---|
| Şimdi | Melamin kapı yüzeyi üreticisi ve toptan tedarikçisi. Kapı kanadı üreticileri için renk, desen, adet ve teslimat ihtiyacına uygun melamin kapı yüzeyi teklifi alın. |
| Öneri (C şıkkı) | Melamin kapı yüzeyi toptan tedarikçisi ve ithalatçısı. Kapı kanadı üreticileri için renk, desen, adet ve teslimat ihtiyacına göre teklif alın. |

Title için (C şıkkı): `Melamin Kapı Yüzeyi Üreticisi` → `Melamin Kapı Yüzeyi Tedariki` (etkin 53).
**A şıkkını seçerseniz bu maddenin tamamı iptal, mevcut metin kalır.**

### M10 — `/urunler/genc-boya` · 168 → 153

| | Metin |
|---|---|
| Şimdi | Yiğiter Orman Ürünleri — Genç Boya İstanbul Anadolu Yakası Distribütörü ve Avrupa Yakası Bayisi. Avrupa'nın en büyük 5 mobilya boyası üreticisi. Stoktan hızlı teslimat. |
| Öneri | Genç Boya İstanbul Anadolu Yakası Distribütörü ve Avrupa Yakası Bayisi. Mobilya ve ahşap boyası ürün gamı, stoktan hızlı teslimat, toptan teklif. |

⚠️ **Dikkat:** "Avrupa'nın en büyük 5 mobilya boyası üreticisi" iddiası kaynak gösterilmeden yayınlanıyor. Genç Boya'nın resmî kurumsal metninde geçen bir ifade ise sorun yok; değilse teyitsiz iddia riski var. Öneride çıkardım — kalması gerekiyorsa söyleyin.

### M11 — `/urunler/kapi-komponentleri/` · 174 → 150

| | Metin |
|---|---|
| Şimdi | Yiğiter Orman Ürünleri, kapı üreticileri için kapı kasası, kapı pervazı, kapı paneli, melamin kapı yüzeyi, PVC film ve kapı imalat malzemelerinde B2B tedarik çözümleri sunar. |
| Öneri | Kapı üreticileri için kapı kasası, pervaz, panel, melamin yüzey, PVC film ve kağıt dolgu tedariki. Ölçü ve miktara göre fiyat teklifi alın. |

### M12 — `/en/interior-door-components/` · 201 → 149

| | Metin |
|---|---|
| Şimdi | Yigiter supplies interior door components from Türkiye, including door jambs, casings, panels, MDF, MDFLAM, PVC film and melamine door skins for distributors, millwork companies and door manufacturers. |
| Öneri | Turkish manufacturer of door frames and architraves. We supply door panels, MDF, MDFLam, PVC film and melamine door skins to distributors and door makers. |

---

## C. Description Genişletme (1 sayfa)

### M13 — `/hakkimizda/sirketimiz` · 73 → 151

| | Metin |
|---|---|
| Şimdi | Yiğiter Orman Ürünleri'nin 20+ yıllık tarihi, vizyonu ve sektördeki rolü. |
| Öneri | 20+ yıllık aile şirketi Yiğiter Orman Ürünleri'nin hikayesi: Kastamonu Entegre ana bayiliği, kendi kapı komponenti üretimi ve 4 kıtaya uzanan ihracat. |

Gerekçe: 73 karakter SERP alanının yarısını boşa harcıyor. Yeni metin dört rolü de (bayi, üretici, ihracatçı, köklü aile şirketi) tek cümlede veriyor.

---

## Uygulama Özeti

| Değişiklik | Sayfa | Durum |
|---|---|---|
| Title kısaltma | 5 | T2'de alternatif seçimi gerekiyor |
| `appendSiteName={false}` | 2 (T1, T3) | Hazır |
| Description kısaltma | 7 | M8 ve M9 karara bağlı |
| Description genişletme | 1 | Hazır |
| Çift markalama düzeltmesi | 1 (T1) | Hazır |
| Marka yazımı düzeltmesi | 2 (`MDFLAM` → `MDFLam`) | Hazır |

**Bekleyen kararlar:** K1 (melamin "üretici" beyanı), K2 (`/ihracat` dil tercihi), T2 (öneri mi alternatif mi), M10 ("Avrupa'nın en büyük 5" iddiası).

Onay verdiğinizde tek PR olarak uygulanır, ardından `npm run build` + rota smoke testi çalıştırılır. Etkiler T+28 ölçümünde (2026-08-23) okunabilir olur.
