# SEO Düzeltme Planı — yigiter.com.tr

Tarih: 2026-07-28
Kaynak bulgular: [SEO_AUDIT_2026-07-28.md](SEO_AUDIT_2026-07-28.md) (7 uzman sub-agent denetimi)
Kural: Fabrikasyon veri yok (sahte fiyat/rating/review yasak). Marka isimleri resmi yazımıyla korunur.

Durum kolonu: ☐ yapılmadı · ◐ devam · ☑ bitti

---

## Faz 1 — Kritik (bu hafta, kod + yönlendirme)

### F1.1 ☑ Eski 404/403 URL'lerini 301'le — YAPILDI (2026-07-28)
Uygulandı: `vercel.json` redirects — `/en/home` (+`/en/home/`) → `/en/interior-door-components/`, `/index.php` → `/`. Deploy sonrası `curl -IL` ile teyit et.

- **GSC (2026-07-28) tam "Bulunamadı (404)" raporu = sadece 2 URL** (SXO'nun tahmin ettiği `/bayilik/...`, `/pdf/fiyatlistesi.pdf` gerçek raporda YOK):
  - `http://www.yigiter.com.tr/en/home` + `http://yigiter.com.tr/en/home` → eski EN anasayfa.
- **403 raporu = 1 URL:** `http://yigiter.com.tr/index.php` (eski PHP sitesi artığı).
- **Dosya:** `vercel.json` (redirects).
- **Adım:**
  - `/en/home` → `/en/interior-door-components/` (yeni EN sayfa) 301.
  - `/index.php` → `/` 301 (opsiyonel, düşük öncelik).
- **Kabul:** `curl -IL http://yigiter.com.tr/en/home` → 301 → yeni EN sayfa (200).
- **NOT:** Korkulan büyük migration 404 krateri yok. Bu iş küçük; asıl ROI F1.2'de.

### F1.1b ☐ (Opsiyonel) Trailing-slash 301'leri
- GSC "Alternatif/canonical" raporunda slash'sız varyantlar (`/subeler`, `/iletisim`, `/hakkimizda/ihracat`...) alternatif olarak işaretli — Google canonical'ı zaten doğru tanıyor, acil değil. İstenirse non-slash → slash 301 (vercel.json) ile tamamen temizlenir.
- Eski `teklif-al?urun=...` query URL'leri zaten sitemap dışı + canonical'lı → dokunma.

### F1.2 ☐ Yeni Kastamonu sayfalarının indexlenmesini sağla — DÜZELTİLDİ (redirect DEĞİL)
- **Önceki yanlış varsayım:** "flat sayfalar duplike, 301'le." **Kod incelemesi bunu çürüttü:** `/urunler/mdf/` bilerek FARKLI bir sayfa — "Toptan MDF, Çok Markalı Tedarik (Kastamonu Entegre + Kronospan)", ve zaten Kastamonu özel sayfasına link veriyor. Sitemap ajanı haklı, içerik ajanı yanılmış. **301 redirect yanlış olurdu** (meşru çok-markalı toptan sayfasını yok ederdi).
- **Gerçek durum (GSC):** Yeni `/urunler/kastamonu-entegre/{mdf,mdflam,yongalevha,dekoratif-panel}/` sayfaları "Keşfedildi - dizine eklenmiş değil". Bu, **2 günlük yeni sayfalar için normal** — Google henüz indexlememiş. Duplike bastırması KANITLANMADI (önceki iddia abartıydı).
- **Doğru aksiyon (redirect yok):**
  1. GSC → URL İnceleme → her yeni Kastamonu sayfası için "Dizine eklenmeyi iste".
  2. İç linkleri güçlendir: anasayfa/nav'dan yeni Kastamonu sayfalarına doğrudan link (şu an 2 tık derinde).
  3. Flat vs Kastamonu sayfalarının başlık/içeriğini belirgin farklı tut (F2.2 içerik derinliği bunu güçlendirir).
- **Ek GSC bulgusu (gerçek, ayrı iş):** `/urunler/kastamonu-entegre/kapi-paneli/` Google-canonical'ı **non-www** (`https://yigiter.com.tr/...`), son crawl 2026-05-15. Site canonical'ı www; bu sayfanın www self-canonical'ı neden non-www görünüyor kontrol et (muhtemelen eski crawl; yeni crawl'da düzelir).
- **Kabul:** yeni sayfalar birkaç crawl içinde "indexli"; canonical hepsinde www.

### F1.3 ☑ Schema tip bug'ı + bozuk Offer (bekleyen GSC "Product snippets") — YAPILDI (2026-07-28)
Uygulandı: `src/lib/schema.ts` (fiyatsız Offer kaldırıldı, ItemList default `Product`, `buildProductGroup` silindi), `kastamonu-entegre/index.astro` (`type:'ProductGroup'` kaldırıldı), `kapi-paneli.astro` + `PanelFamilyPage.astro` (`buildProduct`'a çevrildi). Build temiz; dist'te 0 ProductGroup, 0 fiyatsız Offer, ItemList 5 item = Product.

- **Sorun:** `src/lib/schema.ts:177` default `ProductGroup` → 5 ayrı ürün yanlış tipte; `/mdf/`'te `offers` var ama `price` yok.
- **Fix:**
  - `buildCollectionPage` item default'unu `Product` yap (veya çağrılarda `type:'Product'` geç).
  - `productEntity`'de `soldByYigiter` ile eklenen fiyatsız `offers` düğümünü kaldır (kapi-pervazi/genc-boya deseni gibi).
- **Kabul:** Rich Results Test → ProductGroup hatası yok; `offers` ya tam ya hiç yok. `npm run build` temiz.
- **Not:** Fiyat/rating UYDURMA. Bu sayfalar Product zengin sonucuna uygun olmayacak — beklenen, ranking'e zarar yok.

### F1.4 ☐ NAP tutarsızlıklarını düzelt + tek veri kaynağı
- **Sorun:** `src/pages/urunler/genc-boya.astro` LocalBusiness adresleri "Necip Fazıl Bulvarı" / "Ziyagökalp Mah." eksik; `subeler.astro` ile uyumsuz.
- **Fix:** Şube verisini `src/data/subeler.ts`'e taşı, tüm sayfalarda import et. Telefon formatını normalize et (`+90 212 670 2025`).
- **Kabul:** grep ile adres string'i tek kaynakta; genc-boya schema = subeler schema.

---

## Faz 2 — Yüksek (1-2 hafta, içerik + teknik)

- **F2.1 ☐ `/ihracat/` genişlet** (~151w → 400w+): bölgeler (Avrupa/Orta Doğu/Orta Asya/Afrika), Incoterms, konteyner kadansı, ihracat CTA + EN link.
- **F2.2 ☐ Hub + ince ürün sayfaları** 300w+, ürün-özel teknik farklılaşma (mdf/mdflam/yongalevha ayrı iskelet). Örnek: kapi-pervazi (773w).
- **F2.3 ☐ hreflang TR↔EN** (homepage ↔ `/en/interior-door-components/` + `x-default`).
- **F2.4 ☐ `/tesekkurler/` noindex** + `astro.config.mjs` sitemap filtresinden çıkar.
- **F2.5 ☐ FAQPage schema** — EN'de içerik var, TR homepage + `/ihracat/`'a FAQ blok + schema ekle.
- **F2.6 ☐ Clickjacking:** `vercel.json` CSP'ye `frame-ancestors 'self'` ekle.

---

## Faz 3 — Orta (1 ay)

- **F3.1 ☐ Şube sayfası fragmentasyonu:** `/subeler` + `/iletisim` + `/hizmet-bolgesi` kanonikleştir; şube-başı indexlenebilir URL (`/subeler/tosya-uretim/`); her şubeye LocalBusiness + `GeoCoordinates` (5 ondalık) + `openingHoursSpecification`.
- **F3.2 ☐ `manufacturer`'ı Tosya üretim tesisi `@id`'sine bağla** (kasa/pervaz için) — "kendi tesisimizde üretim" iddiasını geo-varlığa bağlar.
- **F3.3 ☐ IndexNow** kurulumu: key dosyası + deploy hook (Yandex/Bing — Türki/CIS pazarları).
- **F3.4 ☐ E-E-A-T:** üretim süreci bölümü, kapasite figürü, tarihli tesis fotoğrafları, sertifika taramaları (numara/tarih), spec tabloları.
- **F3.5 ☐ Off-site marka:** LinkedIn şirket sayfası + YouTube (tesis/ürün videosu) → Organization `sameAs`.

---

## Faz 4 — Düşük / sürekli

- **F4.1 ☐** Sitemap `lastmod`, schema `dateModified`, görünür "son güncelleme" damgaları.
- **F4.2 ☐** `/urunler` slash'sız → 301; LCP hero `preload`; `Permissions-Policy` header.
- **F4.3 ☐** llms.txt (AI crawler özeti).
- **F4.4 ☐** Resmi bayi-locator citation'ları teyit et (Kastamonu Entegre + Genç Boya siteleri).
- **F4.5 ☐** "3. Cadde" vs "3. Cad." adres abbreviation drift'i normalize et.

---

## Ölçüm bağlantısı
- Bu düzeltmeler T+14 (2026-08-09) ölçüm penceresinden önce yapılırsa, o pencere düzeltmelerin etkisini de yakalar.
- Deploy sonrası `npm run qa:kastamonu:production` ile regresyon kontrolü.
- Değişiklik öncesi/sonrası: `seo-drift` skill'i ile baseline alınabilir.
