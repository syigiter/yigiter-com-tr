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
- `/urunler/kapi-pervazi/` -> 200
- `/urunler/kapi-kasasi/` -> 200
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
- 34 sayfa üretiliyor.
- `/kvkk/index.html` dahil.
- `/urunler/kapi-pervazi/index.html` dahil.
- `/urunler/kapi-kasasi/index.html` dahil.
- Önceden build'i bozan untracked `"... 2"` kopya dosyalar temizlendi.
- Tracked dosyalara temizlik sırasında dokunulmadı.

## Ürün Detay SEO Sayfaları

- `/urunler/kapi-pervazi/` — Kapı Pervazı SEO sayfası yayında
  - B2B hedef: kapı üreticileri, bayiler, proje müşterileri, montaj ekipleri
  - CTA: `/teklif-al?urun=kapi-pervazi`
  - Query prefill çalışıyor: `product_details` ve `product_group = Kapı pervazı`
  - Canonical: `https://yigiter.com.tr/urunler/kapi-pervazi/`

- `/urunler/kapi-kasasi/` — Kapı Kasası SEO sayfası yayında
  - B2B hedef: iç kapı üreticileri, montaj bayileri, proje firmaları, toptan kapı malzemesi alıcıları
  - CTA: `/teklif-al?urun=kapi-kasasi`
  - Query prefill çalışıyor: `product_details` ve `product_group = Kapı kasası`
  - Canonical: `https://yigiter.com.tr/urunler/kapi-kasasi/`

## Son Production Durumu

- Sprint 1, Sprint 1.1, Sprint 1.2, Sprint 2.1, Sprint 2.2A, Sprint 2.2B, Sprint 2.2C, Sprint 2.3A ve Sprint 2.3B tamamlandı.
- Son production deploy başarılı.
- Son merge commit: `dad10cd` — PR #20: Sprint 2.3B Kapı Kasası SEO product page

## Son Production Commit / Son SEO Sprint

- Son SEO sprint: PR #20 — Sprint 2.3B Kapı Kasası SEO product page
- Merge commit: `dad10cd`
- Yeni sayfa: `/urunler/kapi-kasasi/`
- Build: 34 sayfa
- Production deploy: aktif

## Son Production Commit / Son Hotfix

- Son hotfix: PR #14 — Hotfix products navigation link
- Merge commit: `93e81c0`
- Amaç: Header ve mobil menüde Ürünler linkinin gerçek `/urunler/` linki olarak çalışmasını sağlamak.
- Production deploy: success

## Son Sprint

- Sprint 2.3B — Kapı Kasası SEO Ürün Detay Sayfası tamamlandı.
- İkinci ürün detay SEO sayfası `/urunler/kapi-kasasi/` production'a alındı.
- Merge commit: `dad10cd`
