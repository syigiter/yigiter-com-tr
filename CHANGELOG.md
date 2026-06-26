# Changelog

## 2026-06-26

### Sprint 2.3B — Kapı Kasası SEO Product Page

- `/urunler/kapi-kasasi/` ürün detay SEO sayfası eklendi.
- Kapı kasası için B2B hedef kitle, kullanım alanları, teklif için gerekli bilgiler ve tedarik avantajları anlatıldı.
- `/urunler` sayfasındaki Kapı Kasası kartına `Detaylı İncele` linki eklendi.
- CTA `/teklif-al?urun=kapi-kasasi` olarak ayarlandı.
- PR #20 merge edildi.
- Merge commit: `dad10cd`.

### Sprint 2.3A — Kapı Pervazı SEO Product Page

- `/urunler/kapi-pervazi/` ürün detay SEO sayfası eklendi.
- Kapı pervazı için B2B hedef kitle, kullanım alanları, teklif için gerekli bilgiler ve tedarik avantajları anlatıldı.
- `/urunler` sayfasındaki Kapı Pervazı kartına `Detaylı İncele` linki eklendi.
- CTA `/teklif-al?urun=kapi-pervazi` olarak ayarlandı.
- Slug tutarlılığı düzeltildi: `kapi-pervaz` yerine `kapi-pervazi` kullanıldı.
- PR #18 merge edildi.
- Merge commit: `f448650`.

### Sprint 2.2C — Quote Form B2B Lead Fields

- `/teklif-al` formu B2B teklif taleplerini daha iyi toplamak için genişletildi.
- Firma türü, ürün grubu, tahmini miktar, kullanım amacı, termin durumu ve teslimat şehri alanları eklendi/güçlendirildi.
- Teknik detay textarea metni daha yönlendirici hale getirildi.
- `?urun=...` query prefill ile `product_details` ve `product_group` eşlemesi korundu.
- KVKK required checkbox ve yeni sekme link davranışı korundu.
- Web3Forms submit akışı ve `/tesekkurler` redirect korunuyor.
- PR #16 merge edildi.
- Merge commit: `6c9cf84`.

### Hotfix — Products Navigation Link

- Header'daki Ürünler öğesinin sadece dropdown button olması nedeniyle `/urunler` sayfasına gitmemesi sorunu düzeltildi.
- Desktop Header "Ürünler" linki `/urunler/` olarak çalışır hale getirildi.
- Mobil menüde Ürünler parent linki `/urunler/` olarak çalışır hale getirildi.
- Dropdown ok butonu, Enter ve Escape davranışı korundu.
- Ana sayfa ürün CTA linkleri `/urunler/` ile tutarlı hale getirildi.
- PR #14 merge edildi.
- Merge commit: `93e81c0`.

### Sprint 2.2B — Products B2B Catalog Messaging

- Sprint 2.2B ürünler sayfası B2B katalog iyileştirmesi production'a alındı.
- `/urunler` sayfasındaki ürün grupları kullanım alanı, uygun müşteri profili ve teklif CTA'larıyla güçlendirildi.
- PR #13 merge edildi.
- Merge commit: `81d03ea`.

## 2026-06-25

### Sprint 2.2A — Homepage B2B Conversion

- "Neden Yiğiter Orman Ürünleri?" bölümü B2B odaklı güncellendi.
- Kastamonu Entegre, Genç Boya, Tosya OSB, Türkiye geneli sevkiyat, ihracat ve kapı yan sanayi uzmanlığı vurgulandı.
- Teklif Al ve Ürünleri İncele CTA'ları eklendi.
- PR #11 merge edildi.
- Merge commit: `4d90a60`.

### Sprint 2.1 — KVKK / Gizlilik

- `/kvkk` sayfası eklendi.
- Teklif formuna KVKK linkli required checkbox eklendi.
- Footer'a KVKK linki eklendi.
- PR #10 merge edildi.
- Merge commit: `b0c88e2`.

### Local Repo Cleanup

- Build'i bozan untracked `"... 2"` kopya dosyalar temizlendi.
- `git status` temiz.
- `npm run build` başarılı.

### Sprint 1.2 — Contrast Cleanup

- Kontrast iyileştirmeleri production'a alındı.
- PR #9 merge edildi.
- Merge commit: `9f28dee`.

### Sprint 1.1 — Accessibility / UX Cleanup

- Header dropdown erişilebilirliği ve form UX iyileştirmeleri production'a alındı.
- PR #8 merge edildi.
- Merge commit: `0d07f70`.

### Sprint 1 — Technical Hardening

- Route, redirect, SEO, CSP, cache, 404 ve görsel optimizasyon çalışmaları production'a alındı.
- PR #7 merge edildi.
