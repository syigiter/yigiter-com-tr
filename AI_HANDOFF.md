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

## Hassas Alanlar

- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/pages/teklif-al.astro`
- `src/pages/kvkk.astro`
- `vercel.json`
- `astro.config.mjs`
- `public/images/`

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

## Hassas Notlar

- Ürün detay SEO sayfalarında slug, CTA query ve canonical tutarlı olmalı.
- Kapı pervazı için standart slug: `kapi-pervazi` — yanlış `kapi-pervaz` kullanılmamalı.
- Canonical domain mevcut standart gereği `https://yigiter.com.tr` üzerinden üretiliyor (`astro.config.mjs` → `site: 'https://yigiter.com.tr'`); `www` değişikliği ayrı karar konusudur.

## Sonraki Mantıklı İş

Sprint 2.3B: `/urunler/kapi-kasasi/` SEO ürün detay sayfası.
