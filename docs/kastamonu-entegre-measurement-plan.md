# Kastamonu Entegre — Production QA ve Ölçüm Planı

Tarih: 2026-07-26
Program: `Sprint 2.10I`
Production origin: `https://www.yigiter.com.tr`
Yayın commit'i: `a72fb06baa3e307207a336e12af889ac2da31c23`
Geri dönüş noktası: `b4874a246e7d3ca4813ec7744f4c90cf0ac64d9d`

## 1. Production QA Başlangıcı

- Yedi hedef rota HTTP 200, tek H1, self-canonical ve CSP ile doğrulandı.
- Altı Kastamonu ürün rotası sitemap ve beklenen schema türleriyle doğrulandı.
- 73 ortak yerel görsel, PDF, stil ve script hedefinde HTTP hatası bulunmadı.
- Bilinmeyen rota HTTP 404 döndürüyor.
- 1440×900 ve 390×844 görünümde altı marka rotasında yatay taşma ve hata katmanı yok.
- Tarayıcı console warning/error sayısı 0.
- Dekoratif panelde ilk anda boş görünen lazy görseller 1,2 saniye içinde yüklendi; kalıcı kırık görsel yok.
- Tekrar çalıştırılabilir kontrol: `npm run qa:kastamonu:production`.

## 2. Ölçüm Altyapısı Kararı

- Vercel Web Analytics sayfa görüntüleme ve Speed Insights için kullanılmaya devam eder.
- Takım planı 2026-07-26 tarihinde `Hobby` olarak doğrulandı. Vercel özel olayları Pro/Enterprise gerektirdiği için mevcut planda dönüşüm raporu üretmez.
- `Catalog Download`, `Quote Click`, `WhatsApp Click` ve `Quote Submitted` olaylarının aktif hedefi Microsoft Clarity custom event API'sidir.
- Vercel `track()` çağrısı plan yükseltmesi hâlinde hazır olması için korunur.
- Clarity event adları: `catalog_download`, `quote_click`, `whatsapp_click`, `quote_submitted`.
- Clarity tag alanları yalnız ürün/katalog/yerleşim bağlamı taşır; ad, telefon, e-posta veya serbest form verisi gönderilmez.

## 3. T0 Metrik Tabanı — 2026-07-26

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

## 4. Takip Takvimi

| Kontrol | Tarih | Ana amaç |
| --- | --- | --- |
| T+24 saat | 2026-07-27 | HTTP, asset, console/CSP ve event yüklenme sağlığı |
| T+14 gün | 2026-08-09 | İlk GSC görünürlük ve CTA olay sinyali |
| T+28 gün | 2026-08-23 | Sorgu/landing eğilimi ve ürün ailesi karşılaştırması |
| T+56 gün | 2026-09-20 | Kalıcı içerik, SEO ve dönüşüm kararı |

Her kontrolde:

1. `npm run qa:kastamonu:production` çalıştır.
2. Vercel raporunu salt-okunur üret:
   `npx --yes --package=vercel@57.0.0 -- python3 scripts/vercel_analytics_report.py --days 7`.
3. GSC URL Inspection, Search Analytics ve sitemap raporunu çalıştır:
   `python3 scripts/gsc_check.py --output reports/gsc-kastamonu-YYYY-MM-DD.md`.
4. Clarity'de dört custom event için olay ve oturum sayılarını kaydet.
5. Önceki pencereye göre farkı ve alınacak kararı aşağıdaki eşiklerle yaz.

## 5. Karar Eşikleri

- `quote_click` var, `/teklif-al` artmıyorsa CTA hedefi/query akışı yeniden kontrol edilir.
- `quote_click` var, `quote_submitted` yoksa form sürtünmesi ve hata oturumları incelenir.
- `catalog_download` yüksek, teklif olayı düşükse katalog kartlarına teklif geçişi güçlendirilir.
- `whatsapp_click` yüksekse ürün bazlı WhatsApp yerleşimleri korunur ve satış ekibi geri dönüş kalitesiyle eşleştirir.
- Bir rota 28 günde GSC impression almıyorsa iç bağlantı, title-description ve yeniden index ihtiyacı değerlendirilir.
- Canonical mismatch, failed fetch veya sitemap hatası görülürse içerik genişletmeden önce teknik hotfix açılır.

## 6. GSC Durumu

- Production sitemap içinde altı Kastamonu rotası mevcut ve HTTP 200.
- `config/gsc_urls.json` URL Inspection ve performans listelerine altı rota eklendi.
- Bu çalışma ortamında `credentials.json`, `.gsc/token.json` ve Google API Python paketleri bulunmadığı için canlı GSC API çağrısı yapılmadı.
- GSC çağrısı salt-okunurdur; erişim hazır olduğunda yukarıdaki komutla T0/T+14 raporu alınacaktır.

## 7. Geri Dönüş

- 2.10H öncesine dönüş için hedef commit: `b4874a246e7d3ca4813ec7744f4c90cf0ac64d9d`.
- Güvenli geri alma yöntemi: `a72fb06baa3e307207a336e12af889ac2da31c23` merge commit'ini yeni bir revert commit'iyle geri almak.
- Geçmişi yeniden yazan `reset --hard` veya force-push kullanılmaz.
