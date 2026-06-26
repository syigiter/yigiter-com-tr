# Next Steps — Yiğiter Sitesi

## Sıradaki Sprint: Sprint 2.3E — MDF SEO Ürün Detay Sayfası

## Amaç

Mevcut ürün detay SEO şablonunu kullanarak `/urunler/mdf/` sayfasını oluşturmak veya mevcut sayfa varsa B2B SEO şablonuyla güncellemek.

## Önerilen Yapı

- H1: MDF
- URL: `/urunler/mdf/`
- CTA: `/teklif-al?urun=mdf`
- Hedef kitle:
  - Kapı üreticileri
  - Mobilya üreticileri
  - Panel işleyen firmalar
  - Toptan levha alıcıları
  - Bayiler / toptancılar
- Bölümler:
  - MDF nedir?
  - Kimler için uygundur?
  - Kullanım alanları
  - Teklif için hangi bilgiler gerekir?
  - Yiğiter ile MDF tedarik avantajı (Kastamonu Entegre ana bayi vurgusu)
  - İlgili ürünler

## Daha Sonraki Ürün SEO Sayfaları

- `/urunler/mdflam/`
- `/urunler/kapi-paneli/`

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
