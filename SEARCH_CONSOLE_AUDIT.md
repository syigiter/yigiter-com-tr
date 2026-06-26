# Google Search Visibility Audit — Yiğiter Orman Ürünleri
**Tarih:** 2026-06-26
**Veri aralığı:** Son 3 ay (2026-05-13 – 2026-06-24)
**Kaynak:** Google Search Console

---

## Özet

Site Google'da görünür durumda, marka aramaları tıklama getiriyor, temel TO sağlıklı (%10+). Sprint 2.3 kapsamında eklenen 7 ürün SEO sayfası henüz index edilmedi — bu beklenen bir durum, sayfalar yeni yayına girdi. En kritik teknik bulgu: Google, no-www versiyonu (`https://yigiter.com.tr`) canonical olarak benimsemiş; canonical tag'larımız www'ye işaret etse de Google tarihsel nedenle no-www'yi tercih ediyor. www property'ye sitemap gönderildi, 4–8 hafta içinde düzelmesi bekleniyor.

---

## 1. Genel Performans

| Metrik | Değer |
|---|---|
| Toplam tıklama | ~61 |
| Toplam gösterim | ~570 |
| Ortalama TO | ~10.7% |
| Masaüstü tıklama | 36 |
| Mobil tıklama | 25 |

**Dönem bazında trend:**

| Dönem | Tıklama | Gösterim | TO |
|---|---|---|---|
| 13–31 Mayıs | 15 | 123 | 12.2% |
| 1–24 Haziran | 46 | 447 | 10.3% |

Haziran'da gösterim ve tıklama belirgin artmış — iyi işaret.

---

## 2. Sorgular

Toplam 6 sorgu verisi mevcut — tümü marka veya yarı-marka:

| Sorgu | Tıklama | Gösterim | TO | Pozisyon |
|---|---|---|---|---|
| yiğiter orman ürünleri | 25 | 124 | 20.2% | 5.6 |
| yiğiter orman ürünleri ikitelli | 0 | 10 | 0% | 5.9 |
| yiğit orman ürünleri | 0 | 7 | 0% | 8.1 |
| kastamonu kapı fabrikası | 0 | 3 | 0% | 41.7 |
| kompozit kasa pervaz | 0 | 3 | 0% | 59.0 |
| orman ürünleri dudullu | 0 | 1 | 0% | 61.0 |

**Gözlemler:**
- Ürün odaklı sorgu yok — "kapı kasası üretici", "kapı pervazı toptan" gibi hedef kelimeler henüz gösterim almıyor.
- "kastamonu kapı fabrikası" pozisyon 41 — fırsat kelimesi, içerik güçlendirilirse ilk sayfaya çıkabilir.
- "kompozit kasa pervaz" pozisyon 59 — uzun vadeli fırsat.
- Sprint 2.3 ürün sayfaları index'e girdikçe bu tablo değişecek.

---

## 3. Sayfalar Performansı

| Sayfa | Gösterim | Tıklama | TO | Ort. Pozisyon |
|---|---|---|---|---|
| `/` (Ana sayfa) | 386 | 49 | 12.7% | 5.0 |
| `/iletisim/` | 253 | 6 | 2.4% | 7.4 |
| `/subeler/` | 166 | 0 | 0% | 7.1 |
| `/hizmet-bolgesi/` | 69 | 0 | 0% | 7.9 |
| `/urunler/kapi-komponentleri/` | 30 | 3 | 10% | 19.8 |
| `/hakkimizda/bayilik-belgeleri/` | 26 | 1 | 3.9% | 13.6 |
| `/hakkimizda/sirketimiz/` | 38 | 0 | 0% | 8.1 |
| `/urunler/kapi-imalat-malzemeleri/` | 19 | 1 | 5.3% | 12.0 |
| `/urunler/kapi-imalat-malzemeleri/kagit-dolgu/` | 12 | 2 | 16.7% | 8.0 |
| `/hakkimizda/` | 29 | 0 | 0% | 9.8 |
| `/urunler/kastamonu-entegre/kapi-paneli/` | 8 | 0 | 0% | 24.3 |
| `/urunler/kapi-imalat-malzemeleri/pvc-film/` | 7 | 0 | 0% | 17.4 |
| `/hakkimizda/ihracat/` | 15 | 0 | 0% | 17.4 |
| `/ihracat/` | 9 | 0 | 0% | 15.9 |
| `/urunler/kapi-komponentleri/kasa/` | 5 | 0 | 0% | 6.4 |
| `/urunler/kapi-komponentleri/pervaz/` | 2 | 0 | 0% | 5.5 |

**Öne çıkan bulgular:**

- **`/subeler/` — 166 gösterim, 0 tıklama, pozisyon 7.1:** İlk sayfada ama kimse tıklamıyor. Title/meta description revizyonu ile CTR artırılabilir.
- **`/iletisim/` — 253 gösterim, TO %2.4:** Marka aramasından geliyor olabilir. Meta description daha çekici yapılabilir.
- **`/urunler/kapi-imalat-malzemeleri/kagit-dolgu/` — TO %16.7:** Küçük hacimde güçlü sinyal. Honeycomb/kağıt dolgu içeriği değerli.
- **`/urunler/kapi-imalat-malzemeleri/pvc-film/`:** Redirect var ama Google henüz index'ten çıkarmadı. Bekleniyor.

---

## 4. Ürün SEO Sayfaları Durumu

Sprint 2.3 kapsamında eklenen 7 sayfa:

| URL | Index | Gösterim | Tıklama | Durum |
|---|---|---|---|---|
| `/urunler/kapi-pervazi/` | ❌ Henüz yok | — | — | Google'da görünmüyor |
| `/urunler/kapi-kasasi/` | ❌ Henüz yok | — | — | Google'da görünmüyor |
| `/urunler/melamin-kapi-yuzeyi/` | ❌ Henüz yok | — | — | Google'da görünmüyor |
| `/urunler/pvc-film/` | ❌ Henüz yok | — | — | Google'da görünmüyor |
| `/urunler/mdf/` | ❌ Henüz yok | — | — | Google'da görünmüyor |
| `/urunler/mdflam/` | ❌ Henüz yok | — | — | Google'da görünmüyor |
| `/urunler/kapi-paneli/` | ❌ Henüz yok | — | — | Google'da görünmüyor |

**Not:** Sayfalar en erken Haziran 2026'da yayına girdi. Google'ın sitemap'i en son 18 Haziran'da okuduğu ve www property'ye sitemap bugün gönderildiği göz önüne alındığında, bu sayfaların 4–8 hafta içinde index'e girmesi bekleniyor. URL Denetimi ile "Dizine ekle" talepleri gönderilmesi süreci hızlandırır.

---

## 5. Index Durumu

### No-WWW Property (`https://yigiter.com.tr/`)
- **Index edilmiş:** 15 sayfa
- **Keşfedildi, index edilmedi:** 9 sayfa
- **Tarandı, index edilmedi:** 1 sayfa
- **Son tarama:** En güncel sayfa 11 Haziran 2026

### WWW Property (`https://www.yigiter.com.tr/`)
- **Index edilmiş:** 0 sayfa
- **Durum:** Tüm www sayfaları "Beklemede"
- **Sorun:** `Doğru standart etikete sahip alternatif sayfa`
- **Açıklama:** Google, no-www'yi canonical olarak seçmiş. Www sayfaları canonical tag'e rağmen "alternatif" olarak işaretleniyor.

---

## 6. Sitemap Durumu

| Property | Sitemap | Gönderildi | Son okuma | Keşfedilen | Durum |
|---|---|---|---|---|---|
| `yigiter.com.tr` | `/sitemap-index.xml` | 14 May 2026 | 18 Haz 2026 | 25 | ✅ Başarılı |
| `www.yigiter.com.tr` | `/sitemap-index.xml` | 26 Haz 2026 | — | — | Beklemede |

Mevcut sitemap'te **31 URL** var. Google no-www property'sinde **25** keşfetmiş — fark 6 URL, bunlar Sprint 2.3 sayfaları.

---

## 7. Teknik SEO Durumu

### www / No-WWW Canonical Sorunu

| | Değer |
|---|---|
| Vercel redirect | ✅ `yigiter.com.tr` → `www.yigiter.com.tr` yönlendiriyor |
| Canonical tag (tüm sayfalar) | `https://www.yigiter.com.tr/...` |
| Google'ın seçimi | `https://yigiter.com.tr/...` (no-www) |
| Durum | ⚠️ Google canonical override yapıyor |

Google'ın no-www'yi seçmesinin nedeni tarihsel — site başlangıçta no-www ile index'lendi. Www property'ye sitemap gönderildi. Tutarlı canonical + redirect kombinasyonu zamanla Google'ı www'ye geçirecek.

### Trailing Slash Durumu
- Eski trailing slash'siz URL'ler (`/hakkimizda`, `/iletisim` vb.) Google tarafından hâlâ taranıyor.
- PR #38 ile iç linkler temizlendi. Yeni taramalarda slash'lı versiyonlar görülecek.

### Dikkat Gerektiren URL'ler
- `/iletisim/teklif-al?urun=...` — eski route, Google tarafından crawl ediliyor, redirect var
- `/urunler/kapi-imalat-malzemeleri/pvc-film/` — eski duplicate, redirect var, Google henüz index'ten çıkarmadı

---

## 8. Ülke Dağılımı

| Ülke | Tıklama | Gösterim | TO | Pozisyon |
|---|---|---|---|---|
| Türkiye | 59 | 432 | 13.7% | 6.8 |
| İtalya | 1 | 4 | 25% | 1 |
| Hindistan | 1 | 2 | 50% | 5 |
| **ABD** | 0 | 109 | 0% | 4.8 |
| Hollanda | 0 | 4 | 0% | 1.3 |
| Almanya | 0 | 3 | 0% | 10 |

**ABD'den 109 gösterim, 0 tıklama:** İngilizce içerik yok, Türkçe sayfalar çıkıyor, tıklanmıyor. İhracat odaklı İngilizce landing page için güçlü veri.

---

## 9. Fırsat Analizi

### Kısa Vadeli Fırsatlar

| Sayfa | Sorun | Öneri |
|---|---|---|
| `/subeler/` | 166 gösterim, %0 TO, pozisyon 7.1 | Title ve meta description revizyonu |
| `/iletisim/` | 253 gösterim, %2.4 TO | Meta description güçlendirme |
| `/urunler/kapi-komponentleri/` | 30 gösterim, %10 TO, pozisyon 19.8 | B2B SEO sayfası ile güçlendirme |
| `kastamonu kapı fabrikası` sorgusu | Pozisyon 41 | İlgili içerik geliştirme |

### Orta Vadeli Fırsatlar

| Fırsat | Potansiyel |
|---|---|
| 7 ürün SEO sayfasının index'e girmesi | Ana hedef anahtar kelimelerinde sıralama |
| Kapı Komponentleri B2B SEO sayfası | "kapı kasası üretici", "kapı pervazı toptan" |
| Genç Boya marka sayfası | "Genç Boya distribütör", "Genç Boya Anadolu Yakası" |
| İngilizce landing page | ABD, Avrupa, Orta Doğu — 109 gösterim var |

---

## 10. Yapılan Aksiyonlar

- [x] www property Search Console'a eklendi
- [x] www property'ye sitemap gönderildi
- [ ] 7 ürün SEO sayfası için URL Denetimi → "Dizine ekle" talebi (yapılacak)

---

## 11. 30 Günlük Aksiyon Planı

### Hafta 1 (Bu hafta)
- [ ] 7 ürün SEO sayfası için URL Denetimi → "Dizine ekle" talebi gönder
- [ ] www property'de sitemap okunma tarihini takip et

### Hafta 2
- [ ] `/subeler/` title ve meta description revizyonu değerlendir
- [ ] `/iletisim/` meta description güçlendirme değerlendir
- [ ] www property'de ilk verilerin gelip gelmediğini kontrol et

### Hafta 3
- [ ] Ürün SEO sayfaları ilk gösterim alıyor mu kontrol et
- [ ] Kapı Komponentleri B2B SEO sayfası sprint kararı
- [ ] İngilizce landing page önceliklendirmesi

### Hafta 4
- [ ] Hafta 1 ile karşılaştırmalı performans raporu
- [ ] Google'ın www/no-www tercihinin değişip değişmediğini kontrol et
- [ ] Sonraki sprint önceliklendirmesi

---

## 12. Sonuç

Site teknik olarak sağlam, Vercel redirect çalışıyor, canonical tag'ler doğru. Ana sorun tarihsel: Google no-www'yi canonical olarak benimsemiş. Www property'ye sitemap gönderildi, 4–8 hafta içinde düzelmesi bekleniyor.

Sprint 2.3'ün 7 ürün SEO sayfası henüz gösterim almıyor — index talebi gönderilmeli ve 4–6 hafta beklenmeli. Bunlar index'e girdikçe "kapı kasası üretici", "kapı pervazı toptan", "melamin kapı yüzeyi" gibi hedef anahtar kelimelerde sıralama oluşması bekleniyor.

En yüksek öncelikli aksiyon: **URL Denetimi ile 7 sayfaya "Dizine ekle" talebi göndermek.**
