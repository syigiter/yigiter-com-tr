# Yiğiter Sitesi Proje Durumu

## Genel Bilgi

- Site: https://www.yigiter.com.tr/
- Repo: git@github.com:syigiter/yigiter-com-tr.git
- Production platform: Vercel
- Local clean repo path: `/Users/sakiryigiter/Desktop/yigiter-com-tr-clean`
- Teknoloji: Astro tabanlı statik site
- Ana hedef: Yiğiter Orman Ürünleri için hızlı, güvenilir, SEO uyumlu ve B2B teklif talebi üreten kurumsal web sitesi

## Canlı Kalite Durumu

Son bilinen sonuçlar:

- GTmetrix: Grade A
- GTmetrix Performance: 100%
- GTmetrix Structure: 100%
- PageSpeed Mobile Performance: 100
- PageSpeed Accessibility: 95
- PageSpeed Best Practices: 100
- PageSpeed SEO: 100

## Canlı Route Durumu

Son production doğrulamalarına göre:

- `/` -> 200
- `/urunler` -> 200
- `/urunler/` -> 200
- `/teklif-al` -> 200
- `/kvkk` -> 200
- `/hizmet-bolgesi` -> 200
- `/subeler` -> 200
- invalid route -> custom 404

## Navigasyon Durumu

- Desktop Header "Ürünler" tıklanınca `/urunler/` açılıyor.
- Mobil menü "Ürünler" tıklanınca `/urunler/` açılıyor.
- Ürünler yanındaki ok butonu dropdown açma/kapatma davranışını koruyor.
- Klavye Enter ile açma ve Escape ile kapama davranışı korunmuş.
- Ana sayfa ürün CTA'ları `/urunler/` sayfasına gidiyor.

## Header / Güvenlik / SEO Durumu

- `content-security-policy` geliyor.
- `cache-control` geliyor.
- `x-robots-tag: noindex` gelmiyor.
- Canonical, meta description, OG/Twitter bilgileri `BaseLayout` üzerinden geliyor.
- KVKK sayfası noindex değil.
- Sitemap üretimi mevcut Astro yapısına göre devam ediyor.

## Form Durumu

- `/teklif-al` formu canlıda görünüyor.
- Sprint 2.2C sonrası form, B2B teklif taleplerini daha iyi toplamak için ek alanlarla güçlendirildi.
- `?urun=kapi-pervazi` gibi query parametreleri form alanına doluyor.
- KVKK checkbox required.
- KVKK linki `/kvkk` sayfasını yeni sekmede açıyor.
- Kullanıcı canlı Web3Forms mail testinin başarılı olduğunu ve mailin ulaştığını doğruladı.
- Son sprintlerde Web3Forms entegrasyon akışı değiştirilmedi.
- Form submit akışına son sprintlerde dokunulmadı.

## Repo Durumu

- `git status` temiz.
- `npm run build` başarılı.
- 32 sayfa üretiliyor.
- `/kvkk/index.html` dahil.
- Önceden build'i bozan untracked `"... 2"` kopya dosyalar temizlendi.
- Tracked dosyalara temizlik sırasında dokunulmadı.

## Son Production Durumu

- Sprint 1, Sprint 1.1, Sprint 1.2, Sprint 2.1, Sprint 2.2A ve Sprint 2.2B tamamlandı.
- Sprint 2.2C tamamlandı.
- Son production deploy başarılı.
- Son merge commit: `6c9cf84` - Merge PR #16: Sprint 2.2C Quote form B2B lead fields

## Son Production Commit / Son Hotfix

- Son hotfix: PR #14 — Hotfix products navigation link
- Merge commit: `93e81c0`
- Amaç: Header ve mobil menüde Ürünler linkinin gerçek `/urunler/` linki olarak çalışmasını sağlamak.
- Production deploy: success

## Son Sprint

- Sprint 2.2C — Teklif Formu B2B İyileştirmesi tamamlandı.
- Teklif formu B2B alanları ile güçlendirildi ve `?urun=...` query prefill davranışı korundu.
- Canlı Web3Forms mail testi kullanıcı tarafından doğrulandı.
- Merge commit: `6c9cf84c5c9e33d12f2644c3ef4acb1b1788f88c`
