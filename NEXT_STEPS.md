# Next Steps — Yiğiter Sitesi

## Sıradaki Sprint: Sprint 2.3G — Kapı Paneli SEO Ürün Detay Sayfası

## Amaç

Mevcut ürün detay SEO şablonunu kullanarak `/urunler/kapi-paneli/` sayfasını oluşturmak veya mevcut sayfa varsa B2B SEO şablonuyla güncellemek.

## Önerilen Yapı

- H1: Kapı Paneli
- URL: `/urunler/kapi-paneli/`
- CTA: `/teklif-al?urun=kapi-paneli`
- Hedef kitle:
  - Kapı üreticileri
  - İç kapı üretim firmaları
  - Panel işleyen firmalar
  - Proje bazlı kapı tedarikçileri
  - Bayiler / toptancılar
- Bölümler:
  - Kapı paneli nedir?
  - Kimler için uygundur?
  - Kullanım alanları
  - Teklif için hangi bilgiler gerekir?
  - Yiğiter ile kapı paneli tedarik avantajı
  - İlgili ürünler

## Korunması Gerekenler

- Form submit akışı bozulmamalıdır.
- Web3Forms entegrasyonu bozulmamalıdır.
- KVKK checkbox korunmalıdır.
- Mevcut query prefill davranışı korunmalıdır.
- CSP, header, footer ve route altyapısına gereksiz dokunulmamalıdır.
- Canonical domain standardı `https://www.yigiter.com.tr` korunmalıdır.
- `astro.config.mjs` değiştirilmemelidir.

## Bekleyen Temizlik

- Header/Footer ve bazı eski internal linklerde trailing slash standardizasyonu ileride ayrı mini sprint olarak yapılabilir.

## Daha Sonra

- KVKK metni hukuki kontrol
- Ürün sayfaları için schema/structured data değerlendirmesi
- B2B teklif dönüşüm takibi ve CRM akışı değerlendirmesi
