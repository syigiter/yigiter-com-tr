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

## Sonraki Mantıklı İş

Sprint 2.2B: Ürünler sayfasını B2B katalog mantığına yaklaştırmak.
