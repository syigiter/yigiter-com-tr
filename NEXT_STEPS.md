# Next Steps — Yiğiter Sitesi

## Durum

Sprint 2.6A tamamlandı ve production'a alındı.

Son tamamlanan işler:

- Sprint 2.4: Search visibility metadata ve B2B door components SEO.
- Sprint 2.5A: Google Search Console yerel read-only raporlama script'i.
- Sprint 2.5: Search Console takip raporu.
- Sprint 2.6: `/en/interior-door-components/` İngilizce ihracat landing page.
- Sprint 2.6A: İngilizce landing page CTA'sı için teklif formu mapping düzeltmesi.

Mevcut build sonucu: `38 page(s) built`.

Kalan kritik teknik risk yok.

---

## Kısa Vadeli Takip

- [ ] 2-5 Temmuz 2026 arasında Search Console tekrar kontrolü yap.
- [ ] `/en/interior-door-components/` sayfası için index, canonical, impression ve query durumunu izle.
- [ ] 7 ürün SEO sayfasının yeni gösterim/tıklama sinyallerini takip et.
- [ ] www/no-www canonical tercihi Google tarafında stabil kalıyor mu kontrol et.
- [ ] Vercel Analytics ve Speed Insights panelinde gerçek ziyaret verileri oluşmaya başladı mı kontrol et.

Detaylı son GSC raporu local/commit dışı dosya olarak bulunabilir: `reports/gsc-sprint-2-5-2026-06-29.md`

---

## Önerilen Sonraki Sprintler

### 1. İngilizce Sayfaya Düşük Profilli İç Link

Şu an `/en/interior-door-components/` canlıda ve sitemap içinde, ancak menüde veya sayfa içi görünür bir giriş yok. SEO ve kullanıcı keşfi için düşük riskli bir iç link eklenebilir.

Önerilen yerler:

- Footer'da küçük `English Export` linki.
- Ana sayfa ihracat bölümünde `For international buyers` CTA'sı.
- `/ihracat/` sayfasında İngilizce export landing page bağlantısı.

### 2. Search Console Sprint 2.5B Raporu

2-5 Temmuz 2026 aralığında GSC verileri yeniden çekilip karşılaştırmalı rapor hazırlanabilir.

Kontrol edilecekler:

- 7 ürün SEO sayfası yeni impression aldı mı?
- `/en/interior-door-components/` index'e girdi mi?
- ABD/yurt dışı gösterimleri tıklamaya dönmeye başladı mı?
- Canonical mismatch var mı?
- Sorgu bazında yeni fırsat kelimeleri oluştu mu?

### 3. Genç Boya SEO / Marka Sayfası

Mevcut `/urunler/genc-boya/` sayfası B2B SEO şablonuyla güçlendirilebilir. Distribütörlük, bayi rolü, Avrupa/Anadolu yakası ayrımı ve teklif CTA'ları netleştirilebilir.

### 4. Kapı İmalat Malzemeleri Kategori Sayfası

Honeycomb dolgu, PVC film ve yardımcı kapı üretim malzemeleri için `/urunler/kapi-imalat-malzemeleri/` kategori sayfası güçlendirilebilir.

### 5. B2B Teklif Dönüşüm Takibi

Vercel Analytics verisi oluştuktan sonra teklif formu ziyaretleri ve CTA tıklamaları için ölçüm/disiplin planı yapılabilir.

---

## Uzun Vadeli

- Ürün görselleri ve katalog içerikleri (gerçek fotoğraflar)
- KVKK metni hukuki kontrol
- Schema.org structured data genişletmesi (Product, FAQ, Breadcrumb)
- B2B teklif dönüşüm takibi / CRM akışı
- Blog / bilgi merkezi
- Daha kapsamlı İngilizce ihracat sayfa grubu
