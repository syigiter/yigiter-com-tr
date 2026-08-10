# Kastamonu Entegre — Production QA ve Ölçüm Planı

Tarih: 2026-07-26
Program: `Sprint 2.10I`
Durum: Kod ve production yayını tamamlandı; takip ölçümleri aktif
Production origin: `https://www.yigiter.com.tr`
2.10I yayın commit'i: `f980789fda592b063879bf0efd5cdf8c75d4ecfd`
Son doğrulanan uygulama/QA head'i: `12718f52341d412245257d13ac4f9ceb92c7129c`
Geri dönüş noktası: `b4874a246e7d3ca4813ec7744f4c90cf0ac64d9d`

## 1. Yayın Kaydı

| PR | Merge commit | Kapsam | Durum |
| --- | --- | --- | --- |
| [#76](https://github.com/syigiter/yigiter-com-tr/pull/76) | `a72fb06baa3e307207a336e12af889ac2da31c23` | 2.10H SEO, schema ve dönüşüm etiketleri | Production |
| [#77](https://github.com/syigiter/yigiter-com-tr/pull/77) | `f980789fda592b063879bf0efd5cdf8c75d4ecfd` | 2.10I production QA, ölçüm tabanı ve Clarity olay köprüsü | Production |
| [#78](https://github.com/syigiter/yigiter-com-tr/pull/78) | `12718f52341d412245257d13ac4f9ceb92c7129c` | QA script'inde sınırlı eşzamanlılık, yeniden deneme ve düzenli ağ hatası raporu | Production |

- Ölçüm başlangıç anı PR #77 merge zamanı olan **2026-07-26 23:47:54 TSİ** olarak alınır.
- PR #78 yalnız QA aracını güçlendirir; sayfa içeriği, tasarım veya ölçüm olaylarının anlamını değiştirmez.
- T0 değerleri PR #77 öncesinde/alınırken kaydedilen karşılaştırma tabanıdır; T+24 ve sonraki pencereler bu yayın anına göre hesaplanır.

## 2. Production QA Başlangıcı

- Yedi hedef rota HTTP 200, tek H1, self-canonical ve CSP ile doğrulandı.
- Altı Kastamonu ürün rotası sitemap ve beklenen schema türleriyle doğrulandı.
- 73 ortak yerel görsel, PDF, stil ve script hedefinde HTTP hatası bulunmadı.
- Bilinmeyen rota HTTP 404 döndürüyor.
- 1440×900 ve 390×844 görünümde altı marka rotasında yatay taşma ve hata katmanı yok.
- Tarayıcı console warning/error sayısı 0.
- Dekoratif panelde ilk anda boş görünen lazy görseller 1,2 saniye içinde yüklendi; kalıcı kırık görsel yok.
- Tekrar çalıştırılabilir kontrol: `npm run qa:kastamonu:production`.
- PR #78 sonrasında production kontrolü yeniden çalıştırıldı: 7 sayfa, 73 yerel hedef, 6 sitemap/schema rotası, CSP/Analytics ve 404 başarılı.
- QA aracı en fazla 6 asset isteğini eşzamanlı çalıştırır, geçici ağ hatalarını 3 kez dener ve kalıcı hataları stack trace yerine rota/asset bazlı bulgu olarak raporlar.

## 3. Ölçüm Altyapısı Kararı

- Vercel Web Analytics sayfa görüntüleme ve Speed Insights için kullanılmaya devam eder.
- Takım planı 2026-07-26 tarihinde `Hobby` olarak doğrulandı. Vercel özel olayları Pro/Enterprise gerektirdiği için mevcut planda dönüşüm raporu üretmez.
- `Catalog Download`, `Quote Click`, `WhatsApp Click` ve `Quote Submitted` olaylarının aktif hedefi Microsoft Clarity custom event API'sidir.
- Vercel `track()` çağrısı plan yükseltmesi hâlinde hazır olması için korunur.
- Clarity event adları: `catalog_download`, `quote_click`, `whatsapp_click`, `quote_submitted`.
- Clarity tag alanları yalnız ürün/katalog/yerleşim bağlamı taşır; ad, telefon, e-posta veya serbest form verisi gönderilmez.
- Clarity olay köprüsünün production bundle'da bulunması doğrulandı; dashboard'da gerçek olay/oturum görülmesi T+24 ve özellikle T+14 ölçümünün konusudur.

## 4. T0 Metrik Tabanı — 2026-07-26

Salt-okunur Vercel raporu: `reports/vercel-analytics-kastamonu-baseline-2026-07-26.md`
Not: `reports/` git dışında ve yerel çalışma kaydıdır.

| Metrik | Son 7 gün | Son 28 gün |
| --- | ---: | ---: |
| Toplam pageview | 352 | 1.139 |
| `/teklif-al` | 15 | 73 |
| Kastamonu hub | 4 | 16 |
| Dekoratif panel | 3 | 3 |
| Kastamonu MDF | 2 | 2 |
| Kastamonu MDFLam | 2 | 2 |
| Kastamonu yonga levha | 2 | 2 |
| Kastamonu kapı paneli | 2 | 2 |

Başlangıç Web Vitals:

| Path | LCP p75 | CLS p75 | TTFB p75 |
| --- | ---: | ---: | ---: |
| Kastamonu hub | 848 ms | 0 | 81 ms |
| Dekoratif panel | 1.672 ms | 0 | 54 ms |

## 5. Takip Takvimi

| Kontrol | Zaman | Durum | Ana amaç |
| --- | --- | --- | --- |
| T+24 saat | 2026-07-27 23:48 TSİ sonrası | ✅ Tamam (2026-07-28 10:53 TSİ) | HTTP, asset, console/CSP ve event yüklenme sağlığı |
| T+14 gün | 2026-08-09 | ✅ Tamam (2026-08-10 11:11 TSİ) | İlk GSC görünürlük ve CTA olay sinyali |
| T+28 gün | 2026-08-23 | Bekliyor | Sorgu/landing eğilimi ve ürün ailesi karşılaştırması |
| T+56 gün | 2026-09-20 | Bekliyor | Kalıcı içerik, SEO ve dönüşüm kararı |

T+24 raporu belirtilen saatten önce “tamamlandı” olarak işaretlenmez. Sıfır Clarity olayı tek başına teknik hata değildir; bundle/hook sağlığı ile gerçek kullanıcı trafiği ayrı değerlendirilir.

### T+24 sonucu — 2026-07-28 10:53 TSİ

- `npm run qa:kastamonu:production`: **başarılı** — 7 sayfa, 73 yerel hedef, 6 sitemap/schema rotası, CSP/Analytics ve 404 doğrulandı.
- Teknik regresyon görülmedi; karar eşiklerinden hiçbiri tetiklenmedi. İçerik/CTA değişikliği yapılmadı (planla uyumlu).
- Vercel Analytics/Speed Insights, GSC ve Clarity olay sayıları bu ortamda kimlik bilgisi/dashboard erişimi gerektirdiği için T+14 penceresinde değerlendirilecek.

### T+14 sonucu — 2026-08-10 11:11 TSİ

Kaynak raporlar: `reports/gsc-kastamonu-2026-08-10.md`, `reports/vercel-analytics-kastamonu-2026-08-10.md`, `reports/checkpoint-2026-08-10/`.
Koşucu: `bash scripts/run-measurement-checkpoint.sh 2026-08-10` (üç adım da başarılı).

**Teknik sağlık**

- `npm run qa:kastamonu:production`: **başarılı** — 7 sayfa, 73 yerel hedef, 6 sitemap/schema rotası, CSP/Analytics ve 404 doğrulandı.
- 13 rotanın 13'ü `PASS` ve canonical match. `/urunler/kastamonu-entegre/kapi-paneli/` T+8'de `NEUTRAL` ("doğru standart etikete sahip alternatif sayfa", canonical www'suz) idi; bu pencerede `PASS` ve www canonical'a döndü. Canonical mismatch, failed fetch veya sitemap hatası yok — teknik hotfix eşiği tetiklenmedi.

**GSC görünürlük eğilimi**

| Pencere | T+2 (07-28) | T+8 (08-03) | T+14 (08-10) |
| --- | ---: | ---: | ---: |
| Son 7 gün impression | 42 | 48 | 57 |
| Son 7 gün klik | 1 | 2 | 3 |
| Son 28 gün impression | 282 | 292 | 257 |
| Son 28 gün klik | 5 | 7 | 8 |

- 7 günlük pencere üç ölçümde de istikrarlı büyüdü; klik sayısı da arttı. 28 günlük impression düşüşü kayan pencerenin eski günleri düşürmesinden kaynaklanıyor, klik yönü yukarı.
- **T+14'ün ana amacı gerçekleşti:** Kastamonu alt rotaları ilk kez arama görünürlüğü aldı. T+2 ve T+8'de hiçbir alt rota impression almamıştı.
  - `/urunler/kastamonu-entegre/kapi-paneli/` — 4 impression (7 gün), sorgu: `doorlam`
  - `/urunler/kastamonu-entegre/mdflam/` — 3 impression, sorgular: `kastamonu mdf lam`, `medelam`
  - `/urunler/kastamonu-entegre/yongalevha/` — 1 impression
- Hub `/urunler/kastamonu-entegre/` 28 günde 51 impression / 2 klik. Taşıyıcı sorgu ailesi bayi aramaları: `kastamonu entegre mdf bayileri` (18 impr, 2 klik, poz 10,8), `kastamonu entegre bayileri`, `kastamonu mdf bayileri`. Şehir kırılımlı varyantlar da geldi (Ankara, İzmir, İstanbul) ama 23-33. pozisyonda.
- İhracat açısından kayda değer: `kastamonu entegre mdf bayileri` sorgusu Irak'tan (irq) 2 impression, ayrıca Kıbrıs, Kanada ve Butan'dan tekil impression'lar var.
- En iyi dönüşen sayfa hâlâ `/urunler/melamin-kapi-yuzeyi/`: 28 günde 23 impression / 3 klik, `melamin kapı yüzeyi üreticileri` sorgusunda poz 4,2.

**Karar eşiği tetiklenen: 28 günde sıfır impression alan rotalar**

- `/urunler/mdflam/`
- `/urunler/kapi-paneli/`
- `/urunler/kastamonu-entegre/mdf/`
- `/urunler/kastamonu-entegre/dekoratif-panel/`

Dördü de indexed ve canonical match; sorun index değil görünürlük. Plan md. 6 uyarınca iç bağlantı, title ve description ihtiyacı değerlendirilmeli. `dekoratif-panel` özellikle dikkat çekiyor: Vercel'de 28 günde 7 pageview almış ama arama görünürlüğü sıfır.

**Vercel Analytics**

| Metrik | T0 (07-26) 7g | T+14 7g | T0 28g | T+14 28g |
| --- | ---: | ---: | ---: | ---: |
| Toplam pageview | 352 | 128 | 1.139 | 736 |
| `/teklif-al` | 15 | 3 | 73 | 37 |
| Kastamonu hub | 4 | 2 | 16 | 21 |
| Dekoratif panel | 3 | 1 | 3 | 7 |

- Toplam pageview düşüşünün büyük kısmı bot trafiğinin çekilmesi: 28 günlük pencerede GNU/Linux 268 pv ve ABD 247 pv görünürken 7 günlük pencerede Linux 1, ABD 18'e inmiş. 7 günlük 128 pageview'ün 86'sı Türkiye.
- `/teklif-al` düşüşü **karar için henüz yeterli değil**. T0'ın 15 pageview'ü de aynı bot dönemine ait olduğu için iki pencere temiz karşılaştırılamıyor. Bir sonraki temiz pencereye (T+28) kadar izlenmeli.
- Kastamonu hub ve dekoratif panel 28 günlük değerleri T0'ın üzerinde — yayının yönü doğru.

**Web Vitals (p75) — T0 ile karşılaştırma**

| Path | LCP T0 | LCP T+14 | CLS | TTFB T+14 |
| --- | ---: | ---: | ---: | ---: |
| Kastamonu hub | 848 ms | **432 ms** | 0 | 65 ms |
| Dekoratif panel | 1.672 ms | **259 ms** | – | 151 ms |

- Her iki rotada da belirgin iyileşme, regresyon yok.
- Tek dikkat noktası: `/teklif-al` INP p75 **200 ms** — "iyi" eşiğinin tam sınırında. T+28'de tekrar bakılmalı.

**Clarity — eksik**

Dört custom event (`catalog_download`, `quote_click`, `whatsapp_click`, `quote_submitted`) bu ölçümde okunamadı; dashboard erişimi gerektiriyor. `AI_HANDOFF.md`'de production'da Clarity'nin proje ayarları nedeniyle veri toplamadığını bildiren uyarı kayıtlı. Dolayısıyla plan md. 6'daki ilk dört karar eşiği (`quote_click` / `quote_submitted` / `catalog_download` / `whatsapp_click`) **değerlendirilemedi**.

**Karar**

1. Yeni içerik sprinti açılmıyor. Teknik taban sağlam, sinyal büyüyor ama 28 günde 8 klik hâlâ ince.
2. Öncelik: dört sıfır-impression rotası için iç bağlantı + title/description düzeltmesi. Yeni sayfa değil, mevcut sayfaların on-page'i.
3. Clarity'nin gerçekten veri toplayıp toplamadığı doğrulanmalı. Toplamıyorsa bu bir ölçüm arızasıdır ve T+28 öncesi giderilmelidir; yoksa dönüşüm tarafı üç penceredir kör kalıyor.
4. `/teklif-al` hacmi ve `/teklif-al` INP değeri T+28'de tekrar okunacak.

Her kontrolde:

1. `npm run qa:kastamonu:production` çalıştır.
2. Vercel raporunu salt-okunur üret:
   `npx --yes --package=vercel@57.0.0 -- python3 scripts/vercel_analytics_report.py --days 7`.
3. GSC URL Inspection, Search Analytics ve sitemap raporunu çalıştır:
   `python3 scripts/gsc_check.py --output reports/gsc-kastamonu-YYYY-MM-DD.md`.
4. Clarity'de dört custom event için olay ve oturum sayılarını kaydet.
5. Önceki pencereye göre farkı ve alınacak kararı aşağıdaki eşiklerle yaz.

## 6. Karar Eşikleri

- `quote_click` var, `/teklif-al` artmıyorsa CTA hedefi/query akışı yeniden kontrol edilir.
- `quote_click` var, `quote_submitted` yoksa form sürtünmesi ve hata oturumları incelenir.
- `catalog_download` yüksek, teklif olayı düşükse katalog kartlarına teklif geçişi güçlendirilir.
- `whatsapp_click` yüksekse ürün bazlı WhatsApp yerleşimleri korunur ve satış ekibi geri dönüş kalitesiyle eşleştirir.
- Bir rota 28 günde GSC impression almıyorsa iç bağlantı, title-description ve yeniden index ihtiyacı değerlendirilir.
- Canonical mismatch, failed fetch veya sitemap hatası görülürse içerik genişletmeden önce teknik hotfix açılır.

## 7. GSC Durumu

- Production sitemap içinde altı Kastamonu rotası mevcut ve HTTP 200.
- `config/gsc_urls.json` URL Inspection ve performans listelerine altı rota eklendi.
- Bu çalışma ortamında `credentials.json`, `.gsc/token.json` ve Google API Python paketleri bulunmadığı için canlı GSC API çağrısı yapılmadı.
- GSC çağrısı salt-okunurdur; erişim hazır olduğunda yukarıdaki komutla T0/T+14 raporu alınacaktır.

## 8. Geri Dönüş

- 2.10H öncesine dönüş için hedef commit: `b4874a246e7d3ca4813ec7744f4c90cf0ac64d9d`.
- Yalnız QA dayanıklılık değişikliğini geri almak için `12718f52341d412245257d13ac4f9ceb92c7129c` merge commit'i revert edilir.
- 2.10I ölçüm değişikliklerini geri almak için önce `12718f52341d412245257d13ac4f9ceb92c7129c`, sonra `f980789fda592b063879bf0efd5cdf8c75d4ecfd` merge commit'leri revert edilir.
- 2.10H öncesindeki `b4874a2` noktasına dönmek için bağımlılıkların ters sırasında `12718f5`, `f980789` ve `a72fb06` merge commit'leri ayrı revert commit'leriyle geri alınır.
- Merge commit'leri geri alınırken ana ebeveyn `main` olduğu için `git revert -m 1 <merge-commit>` yaklaşımı kullanılır; gerçek uygulama öncesinde hedefler tekrar salt-okunur `git show` ile doğrulanır.
- Bu plandan sonra merge edilen yalnız dokümantasyon değişiklikleri uygulama davranışını etkilemez; birebir çalışma ağacı dönüşü istenirse aradaki dokümantasyon merge commit'leri de ters sırada revert edilir.
- Geçmişi yeniden yazan `reset --hard` veya force-push kullanılmaz.
