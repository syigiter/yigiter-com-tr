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
- `/urunler/melamin-kapi-yuzeyi/` -> 200
- `/urunler/pvc-film/` -> 200
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
- 35 sayfa üretiliyor.
- `/kvkk/index.html` dahil.
- `/urunler/kapi-pervazi/index.html` dahil.
- `/urunler/kapi-kasasi/index.html` dahil.
- `/urunler/melamin-kapi-yuzeyi/index.html` dahil.
- `/urunler/pvc-film/index.html` dahil.
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

- `/urunler/melamin-kapi-yuzeyi/` — Melamin Kapı Yüzeyi SEO sayfası yayında
  - B2B hedef: kapı kanadı üreticileri, seri üretim yapan firmalar, toptan alıcılar, bayiler
  - CTA: `/teklif-al?urun=melamin-kapi-yuzeyi`
  - Query prefill çalışıyor: `product_details` ve `product_group = Melamin kapı yüzeyi`
  - Canonical: `https://yigiter.com.tr/urunler/melamin-kapi-yuzeyi/`
  - Not: Header/Footer/diğer sayfalardaki trailing slash'siz referanslar ayrı temizlik sprintine bırakıldı.

- `/urunler/pvc-film/` — PVC Film SEO sayfası yayında
  - B2B hedef: kapı üreticileri, mobilya üreticileri, membran pres kullanan firmalar, yüzey kaplama atölyeleri, bayiler ve toptancılar
  - CTA: `/teklif-al?urun=pvc-film`
  - Query prefill çalışıyor: `product_details` ve `product_group = PVC film`
  - Canonical: `https://yigiter.com.tr/urunler/pvc-film/`
  - Not: Eski `/urunler/kapi-imalat-malzemeleri/pvc-film/` sayfası hâlâ 200 dönüyor, canonical kendisine bakıyor, noindex yok — duplicate SEO cleanup ayrı sprint.

## Son Production Durumu

- Sprint 1, Sprint 1.1, Sprint 1.2, Sprint 2.1, Sprint 2.2A, Sprint 2.2B, Sprint 2.2C, Sprint 2.3A, Sprint 2.3B, Sprint 2.3C ve Sprint 2.3D tamamlandı.
- Son production deploy başarılı.
- Son merge commit: `df6e65a` — PR #24: Sprint 2.3D PVC Film SEO product page

## Son Production Commit / Son SEO Sprint

- Son SEO sprint: PR #24 — Sprint 2.3D PVC Film SEO product page
- Merge commit: `df6e65a`
- Yeni sayfa: `/urunler/pvc-film/`
- Build: 35 sayfa
- Production deploy: aktif

## Son Production Commit / Son Hotfix

- Son hotfix: PR #14 — Hotfix products navigation link
- Merge commit: `93e81c0`
- Amaç: Header ve mobil menüde Ürünler linkinin gerçek `/urunler/` linki olarak çalışmasını sağlamak.
- Production deploy: success

## Son Sprint

- Sprint 2.3D — PVC Film SEO Ürün Detay Sayfası tamamlandı.
- Dördüncü ürün detay SEO sayfası `/urunler/pvc-film/` production'a alındı.
- Merge commit: `df6e65a`
