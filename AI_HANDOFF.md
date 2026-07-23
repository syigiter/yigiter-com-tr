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

## Güncel Handoff — 2026-07-23

### Kapı Pervazı / Profil Görselleri — Güncel Durum

Sprint 2.8D ve 2.8F tamamlandı. Kapı Pervazı sayfasında artık ölçü ailesi / üretim kabiliyeti tablosu ve gerçek pervaz profil örnekleri var. Kapı Komponentleri sayfasında kısa pervaz ölçü özeti ile 2 pervaz + 3 seren örneği içeren profil aileleri özeti var.

- Sprint 2.8D: PR #61, merge `b8239f1057a1ce2b5160442dc264c4d166fbcbed`.
- Sprint 2.8F: PR #62, merge `9e33e7306035a0bcd54814e82982619964a7d4dd`.
- Kapı Pervazı profil gridi: 33 adet 640×640 WebP; mobil 2, tablet 3, masaüstü 4 kolon.
- Public asset seti: 33 pervaz + 5 seren WebP, toplam `416.192 byte` / yaklaşık 406 KiB.
- Kapı Komponentleri özeti: 2 pervaz + 3 seren örneği, Kapı Pervazı linki ve teklif CTA'sı.
- Build başarılı: 36 statik sayfa.
- Production route, form/query mapping, console, failed request ve CSP kontrolleri temiz.

Dikkat:

- Excel miktarları siteye konmadı ve konmamalı.
- Ürün kodu, adet, stok veya iç envanter bilgisi müşteriye gösterilmemeli.
- `envanter.csv` public'e konmamalı.
- Uzun PNG katalog görselleri production'da kullanılmamalı.
- Seren için şimdilik ayrı sayfa açılmadı.
- Stok, termin ve aktif ölçü/profil kombinasyonlarının teklif aşamasında doğrulandığı dil korunmalı.
- Minimum sipariş için “Minimum sipariş genellikle bir palet üzerinden değerlendirilir.” güvenli ifadesi korunmalı.
- `/teklif-al?urun=kapi-pervazi` ve `/teklif-al?urun=kapi-komponentleri` query mapping'i korunmalı.

Sıradaki gerçek ihtiyaç:

- Ölçülü profil kesit çizimleri
- Gerçek kasa/pervaz ürün fotoğrafları
- Üretim hattı ile ambalaj/palet/sevkiyat fotoğrafları
- Teknik föy veya PDF katalog
- Sertifika/test belgeleri
- Aktif ölçü kombinasyonları ile yüzey/profil örneklerinin firma onayı

Yeni kod sprintinden önce doğrulanmış teknik asset ve belgeler toplanmalı. Bunlar geldikten sonra `Sprint 2.9A — Teknik Föy / Profil Kesit / Sertifika Entegrasyonu` açılabilir.

Production testlerinde Microsoft Clarity'nin proje ayarları nedeniyle veri toplamadığını bildiren uyarı görülüyor. Site davranışını bozmuyor ve yeni sprinti engelleyen kritik hata değildir; ayrı analytics/ölçüm kontrolünde değerlendirilmelidir.

## Güncel Handoff — 2026-07-01 (SUPERSEDE — bkz. 2026-07-07)

**Not (2026-07-07):** Bu bölüm ölçüm freeze'i aktifken yazıldı. Freeze o dönemdeydi; sonrasında iki iş açıldı ve merge edildi — Sprint 2.9 ①a (kasa/pervaz konsolidasyonu) ve Clarity kurulumu. Aşağıdaki "yeni kod açılmamalı" kuralı artık geçerli değil, tarihsel kayıt olarak duruyor.

- Şu an yeni kod işi açılmamalı.
- Sıradaki mantıklı iş: 7-14 gün sonra GSC + Vercel Analytics birleşik takip raporu almak.
- Birleşik raporda şu veriler birlikte değerlendirilmeli:
  - GSC URL Inspection
  - GSC Search Analytics
  - Vercel Analytics pageview / ülke / referrer / path
  - Vercel Speed Insights p75 metrikleri
- Ana karar: `/en/interior-door-components/` index, impression ve pageview sinyali oluşana kadar bekle ve ölç.
- Eğer İngilizce sayfa index'e girip impression alır ama CTR zayıf kalırsa Sprint 2.6B düşünülebilir.
- Eğer Türkiye iç pazar sinyali daha güçlü büyürse Genç Boya / Melamin / Kastamonu Entegre odaklı SEO sprinti önceliklendirilebilir.

## Ölçüm Dönemi Kararı

Sprint 2.7, Sprint 2.5B, Sprint 2.5C ve PR #49 sonrası yeni kod işi açılmamalı.

Bir sonraki aktif operasyon 7-14 gün sonra alınacak birleşik takip raporudur:

- GSC URL Inspection
- GSC Search Analytics
- Vercel Analytics
- Speed Insights

Bu veri gelmeden aşağıdaki işler yapılmamalı:

- Yeni İngilizce ürün alt sayfaları
- Header dil seçici
- İngilizce sayfa FAQ genişletmesi
- Form akışı değişikliği
- Yeni analytics sistemi
- Büyük tasarım/görsel revizyon

Karar kuralı:

- İngilizce sayfa index + impression alır ama CTR veya teklif formu geçişi zayıf kalırsa Sprint 2.6B açılabilir.
- Türkçe iç pazar sinyalleri daha hızlı büyürse Sprint 2.8 açılabilir.
- `/teklif-al/` ziyaretleri oluşursa dönüşüm yolu ayrıca analiz edilir.

### B2B Alıcı Değerlendirme Notları — 2026-07-05

Kullanıcı, siteyi Türk kapı imalatçısı / potansiyel B2B alıcı gözüyle değerlendirdi.

Ayrıntılı ve sınıflandırılmış kayıt: [`B2B_BUYER_REVIEW_NOTES_2026-07-05.md`](B2B_BUYER_REVIEW_NOTES_2026-07-05.md).

Bu notlar ilk ölçüm dönemi sonrasında sprint seçimi yapılırken dikkate alınmalı.

Ana bulgular:

- Kasa/pervaz için gerçek ürün fotoğrafı, profil kesiti ve ölçü tablosu eksik.
- Teknik veri eksik: ölçüler, malzeme türü, MOQ, teslim süresi, stok, melamin ve honeycomb gramaj bilgisi.
- İndirilebilir katalog/föy yok.
- Sertifika ve ihracat kanıtları zayıf.
- “Tedarikçiyiz, kapı üreticisi müşterilerimizle rekabet etmeyiz” mesajı netleştirilmeli.
- İhracat haritasındaki “Kaynak: TİM 2025” ibaresi yanlış anlaşılabilir; harita firma ihracat pazarlarını gösteriyor ama kaynak ibaresi harita görseli/altlığı olarak ayrılmalı.
- Kuruluş yılı, kurucu/yönetim yüzü ve ekip fotoğrafı değerlendirilmeli.
- Metinlerde tekrar azaltılıp teknik veri ve kanıt artırılmalı.
- E-posta, URL, canonical ve telif yılı hijyen maddeleri canlı sitede doğrulanmalı.

Karar:

Bu notlar yeni sprint açmak için tek başına yeterli değildir. Önce 7–14 günlük GSC + Vercel Analytics + Speed Insights birleşik ölçüm raporu alınacak. Sonra içerik/asset/hotfix önceliği veriye göre belirlenecek.

> Güncelleme (2026-07-07): Ölçüm dönemi kapandı, birleşik rapor alındı ve Sprint 2.9 (on-page/teknik SEO) seçildi (aşağıdaki 2026-07-07 kayıtlarına bak). Bu B2B alıcı notları artık 2.9 sonrası içerik/asset/hotfix önceliklendirmesi için aday havuzda tutuluyor.

## Hassas Alanlar

- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/pages/teklif-al.astro`
- `src/pages/kvkk.astro`
- `vercel.json`
- `astro.config.mjs`
- `public/images/`
- `.vercel/`, `.env.local`, `.gsc/`, credential/token dosyaları asla commit edilmemeli.
- `reports/` lokal rapor çıktısıdır ve commit dışında kalabilir.
- Vercel Analytics script'i read-only kullanılmalı; deploy/env yazma işlemi yapmamalı.
- Vercel `request_path` query string'i ayrı kırılım vermeyebilir; `/teklif-al?urun=...` verisi `/teklif-al` ana path'i altında görülebilir.

## Ölçüm Hattı

- GSC: arama görünürlüğü, index/canonical, sorgu, impression, tıklama ve ortalama pozisyon için ana kaynak.
- Vercel Analytics: gerçek ziyaret, ülke, referrer, path ve cihaz kırılımı için ana kaynak.
- Vercel Speed Insights: gerçek kullanıcı performansı ve p75 Web Vitals takibi için ana kaynak.
- GSC raporları `reports/gsc-...` altında lokal kalabilir.
- Vercel Analytics raporları `reports/vercel-analytics-...` altında lokal kalabilir.

## Ara Ölçüm — 2026-07-10

Amaç: Sprint 2.9 ①a ve Clarity merge'inden kısa süre sonra enstrümantasyon sağlık kontrolü yapmak. Bu ölçüm nihai SEO sonucu değildir; 3 gün SEO etkisi okumak için erkendir.

- GSC + Vercel raporlama script'leri hatasız çalıştı; token geçerli, ölçüm hattı sağlıklı.
- ①a index/canonical tarafı temiz oturdu: `kapi-kasasi/` ve `kapi-pervazi/` self-canonical, son crawl 2026-07-07, reindex talebi işlemiş görünüyor.
- Kaybeden URL'ler raporda görünmüyor; eski `kapi-komponentleri/kasa` ve `.../pervaz` URL'leri 301 ile birleştirildi.
- Arama görünürlüğü hâlâ erken: `kapi-kasasi` ticari impression üretmiyor; `kapi-pervazi` ağırlıkla bilgi amaçlı `kapı pervazı nedir` sorgularında görünüyor.
- Vercel'deki ABD trafiği tek başına ihracat talebi sayılmamalı; GSC'de İngilizce sorgu yoksa ve Linux/datacenter benzeri kırılımlar yüksekse bot/referrer yanılsaması ihtimali var.
- O tarihteki en net ticari sinyal `melamin-kapi-yuzeyi` tarafında görüldü: üretici/fiyat odaklı sorgular ve tek gerçek klik bu sayfadan geldi.
- Sprint 2.9 ② için acele edilmemeli: ①a'nın arama sinyali birkaç gün daha oturmalı; title/description optimizasyonu yeni veriyle seçilmeli.
- Clarity için manuel dashboard işleri: kendi IP'lerini blockla, teklif formu alanlarının maskeli olduğunu kontrol et, GA4 bağlantısını trafik hacmi anlamlı olana kadar ertele.

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
- `/en/interior-door-components/` İngilizce ihracat sayfası yayında ve artık site içinde görünür iç linkler alıyor.
- İngilizce sayfaya link kaynakları: Footer `English Export`, ana sayfa international buyers linki, `/ihracat/` international buyers linki.
- Header dil seçici bilinçli olarak eklenmedi; çok dilli site mimarisi bu sprintlerin kapsamı dışında.
- Sprint 2.5B GSC raporunda 7 ürün SEO sayfası indexed/canonical match durumda.
- Sprint 2.5B GSC raporunda `/en/interior-door-components/` henüz Google tarafından bilinmiyor; sayfa yeni olduğu için bekle ve ölç kararı verildi.
- Sprint 2.5C ile `scripts/vercel_analytics_report.py` eklendi; Vercel Analytics / Speed Insights raporu read-only üretilebiliyor.
- İlk Vercel Analytics sinyali: son 7 gün 112 pageview, United States 76, `/en/interior-door-components/` 1, `/teklif-al/` 0.
- 2026-07-03: Kod tabanı ve canlı site üzerinde genel SEO denetimi yapıldı. Tam rapor: `SEO_AUDIT_2026-07-03.md`.
- Denetimde apex→www redirect'inin 307 (geçici) olduğu tespit edildi — Google'ın www property'de sayfa index'lememesinin muhtemel nedeni. Kullanıcı Vercel panelinden 308'e (kalıcı) çevirdi.
- Denetim sonrası 7 ürün SEO sayfası için GSC "Dizine ekle" talepleri kullanıcı tarafından gönderildi.
- Denetimde bulunan diğer maddeler (title/description kısaltma, kasa/pervaz keyword cannibalization, hreflang, schema genişletme, dosya temizliği) ölçüm dönemi bitene kadar açılmayacak; `NEXT_STEPS.md` → Sprint 2.9 adayı olarak eklendi.
- 2026-07-07: Ölçüm dönemi kapandı. Birleşik GSC + Vercel raporu alındı (`reports/gsc-sprint-2-5-2026-07-07.md`, `reports/vercel-analytics-2026-07-07.md`).
- Rapor sonucu: 7 ürün sayfası index sağlıklı; gerçek arama sinyali ince ve tümü Türkçe/ticari (28g ~32 impression, 1 klik); 4 sayfa 0 impression (kapi-kasasi, pvc-film, mdflam, kapi-paneli); sayfalar 7-16. pozisyonda, CTR ~0.
- İngilizce arama talebi sıfır: GSC'de tek İngilizce sorgu yok, `/en/` impression almamış. Vercel'deki ABD ~350 pv organik-arama-dışı (Linux %27 + saçık datacenter coğrafyası → muhtemelen bot; kesin ayrım için Vercel referrer/UA kırılımına bakılabilir).
- Script'in otomatik "Recommend Sprint 2.6: build /en" önerisi reddedildi: gömülü naif heuristik, bot/arama-dışı trafiği ihracat talebi sanıyor. Gerçek veri sıfır İngilizce arama sinyali gösteriyor.
- KARAR: Sprint 2.9 (on-page/teknik SEO) açılıyor. 2.6B (İngilizce) sıfır arama sinyali nedeniyle hayır; 2.8 (Türkçe iç pazar) 32 impression çok ince olduğu için henüz değil.
- Sprint 2.9 PR sırası (`NEXT_STEPS.md`): ①a kasa/pervaz cannibalization → ② 7 sayfa title/description → ①b 4 ölü sayfa içerik → ③ schema. Cannibalization önce çünkü ②'nin önkoşulu.
- ②'nin önkoşulu: ①a GSC yansıması + reindex. ②'yi açmadan önce (a) kazanan `kapi-kasasi`/`kapi-pervazi` reindex talebi gönderilmiş, (b) bu iki sayfanın konsolidasyon-sonrası GSC impression/pozisyonu birkaç gün oturmuş olmalı — çünkü sinyal onlarda toplandı ve title önceliği bu veriye göre değişebilir. Beklemek veri toplamadır, gecikme değil.
- **2026-07-07:** Microsoft Clarity kuruldu (davranış analitiği — ısı haritası + oturum kaydı, proje ID xirpsgg0ls). BaseLayout `<head>`'e script; CSP'de script-src + connect-src'ye `https://*.clarity.ms` + `https://c.bing.com` eklendi. PR #54, merge `1feab4f`. Production'da doğrulandı (aşağıda Clarity bölümü).

## Sprint 2.9 ①a — Kasa/Pervaz Cannibalization Konsolidasyonu (2026-07-07)

Durum: **Kod tarafı KAPANDI ve production'da doğrulandı. GSC yansıması BEKLİYOR (manuel adımlar + Google crawl süresi).**

Yapılan (PR #53, merge commit `a8167d8`; kod commit `2ff07b4`):

- İki duplicate alt sayfa silindi: `urunler/kapi-komponentleri/kasa.astro`, `.../pervaz.astro`.
- `vercel.json`'a 4 kalıcı 301 (pvc-film precedent'i): `komponentleri/kasa[/]` → `/urunler/kapi-kasasi/`, `komponentleri/pervaz[/]` → `/urunler/kapi-pervazi/`.
- `ihracat.astro`'da 2 iç link doğrudan slash'lı top-level'a repointlendi (zincirsiz).
- Parent hub `kapi-komponentleri/index.astro` dokunulmadı (indexli, inbound link var, çocuklarına link vermiyordu).

Production doğrulaması (2026-07-07, `curl -sIL` hop testi, deploy `a8167d8` canlıyken):

- `komponentleri/kasa` (slash'sız + slash'lı) → **1 hop** → `kapi-kasasi/` → 200
- `komponentleri/pervaz` (slash'sız + slash'lı) → **1 hop** → `kapi-pervazi/` → 200
- `kapi-kasasi/`, `kapi-pervazi/` → **0 hop** → 200
- Zincir yok, yanlış hedef yok. (Davranış testi deploy-doğruluğunun da kanıtı: eski deploy canlı olsaydı çocuklar 0-hop-200 dönerdi.)

Rollback (gerekirse): `vercel.json`'daki ilgili redirect satırını düzelt + redeploy; ya da `git revert 2ff07b4` (SHA korundu, merge/rebase yapılmadı).

BEKLEYEN manuel GSC adımları (kod değil, kullanıcı tarafında — henüz YAPILMADI):

- Kazanan `kapi-kasasi/` + `kapi-pervazi/` için GSC reindex talebi gönder.
- Kaybeden 2 eski URL'yi (`komponentleri/kasa`, `komponentleri/pervaz`) manuel URL Inspection'dan geçir → "Taranmış, yönlendirilmiş" statüsünü tetikle. Bu URL'ler GSC izlenen sette değildi (`config/gsc_urls.json`), crawl kuyruğunda olmadıkları için Google 301'i kendiliğinden görmesi haftalar alabilir.

## Clarity Analitik Kurulumu (2026-07-07)

**Durum:** Kuruldu, production'da doğrulandı, çalışıyor.

**Yapılan:** Microsoft Clarity (proje ID xirpsgg0ls) — BaseLayout `<head>`'e inline tag script (apple-touch-icon'dan sonra, `</head>`'den önce); vercel.json CSP'de script-src + connect-src'ye `https://*.clarity.ms` + `https://c.bing.com`. PR #54 → main (`1feab4f`). Not: CSP'de her iki direktife de eklenmesi zorunluydu — default-src fallback'i açık script-src/connect-src varken devreye girmez.

**Doğrulama (üç katman, hepsi yeşil):**

- CSP header (production curl): her iki direktifte de clarity domainleri canlı, mevcut token'lar korunmuş.
- Network (incognito): `https://www.clarity.ms/tag/xirpsgg0ls` = 200, ardından *.clarity.ms'e /collect XHR'ları veri gönderiyor.
- Clarity dashboard: oturum kaydı göründü — uçtan uca (veri Microsoft'a ulaştı + kaydedildi) teyit edildi.

**Rollback:** `git revert 1feab4f` (PR #54 merge'i). CSP tek yerde (vercel.json), site kırılmaz — geri alınırsa Clarity susar, başka bir şey etkilenmez.

**Beklenti notu:** Trafik hâlâ ince (çoğu bot); anlamlı ısı haritası/oturum verisi 2.9 sonrası gerçek trafikle oluşur. Kurulum tek seferlik, değeri ertelenmiş.

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

### Sprint 2.7 — English Export Internal Link & Discovery

- `/en/interior-door-components/` İngilizce ihracat landing page'i site içinde keşfedilebilir hale getirildi.
- Footer'a `English Export` linki eklendi.
- Ana sayfa ihracat alanına international buyers linki eklendi.
- `/ihracat/` sayfasına international buyers linki eklendi.
- Header, form submit, Web3Forms, KVKK, CSP, canonical, sitemap, `astro.config.mjs`, `vercel.json` ve query mapping akışlarına dokunulmadı.
- Production route/browser testleri temiz: console error 0, failed request 0, CSP error 0.
- Merge commit: `d386df9647b89079b469b311bf2e424bc394f3f0`.

### Sprint 2.5B — Search Console Follow-up Report

- Kod değişikliği yapılmadan GSC takip raporu üretildi.
- Rapor: `reports/gsc-sprint-2-5b-2026-07-01.md`.
- CSV: `reports/gsc-sprint-2-5b-2026-07-01.csv`.
- 17 URL kontrol edildi.
- 7 ürün SEO sayfası indexed/canonical match durumda.
- Sitemap warning 0, error 0.
- `/en/interior-door-components/` sitemap'te ve canlı canonical doğru; GSC'de henüz Google tarafından bilinmiyor.
- Karar: teknik müdahale değil, bekle ve ölç.

### Sprint 2.5C — Vercel Analytics Local Report Script

- Read-only lokal rapor script'i eklendi: `scripts/vercel_analytics_report.py`.
- Vercel Analytics ve Speed Insights verilerini Markdown rapora döküyor.
- Raw JSON yazmıyor, token/secret commit etmiyor.
- Raporlar `reports/` altında commit dışı kalıyor.
- İlk rapor: `reports/vercel-analytics-2026-07-01.md`.
- Merge commit: `fea8f72d6f12b86a4d170cf4b107dcd52c9c0f58`.

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
- Canonical domain mevcut standart gereği `https://yigiter.com.tr` üzerinden üretiliyor (`astro.config.mjs` → `site: 'https://yigiter.com.tr'`); `www` değişikliği ayrı karar konusudur.
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
- **CSP düzenlerken Clarity domainleri korunmalı:** vercel.json CSP'sinin script-src VE connect-src'sinde `https://*.clarity.ms` + `https://c.bing.com` bulunmalı. Silinirse Clarity sessizce bloklanır (script yüklenmez/veri gitmez, hata görünmez).

## Ürün SEO Serisi Durumu

Sprint 2.3 ürün SEO serisi tamamlandı. Kapanış raporu: `SEO_CLOSING_REPORT.md`.

7 ürün SEO sayfası production'da: kapi-pervazi, kapi-kasasi, melamin-kapi-yuzeyi, pvc-film, mdf, mdflam, kapi-paneli. Tümü 200, canonical www standardında, noindex yok, sitemap'te mevcut.

## Sonraki Mantıklı İş

Ürün SEO serisi ve teknik temizlik tamamlandı. Opsiyonel sonraki sprintler için `NEXT_STEPS.md` ve `SEO_CLOSING_REPORT.md` bkz.
