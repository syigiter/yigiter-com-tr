# Next Steps — Yiğiter Sitesi

## Sıradaki Sprint: Sprint 2.3F — MDFLAM SEO Ürün Detay Sayfası

## Amaç

Mevcut ürün detay SEO şablonunu kullanarak `/urunler/mdflam/` sayfasını oluşturmak veya mevcut sayfa varsa B2B SEO şablonuyla güncellemek.

## Önerilen Yapı

- H1: MDFLAM
- URL: `/urunler/mdflam/`
- CTA: `/teklif-al?urun=mdflam`
- Hedef kitle:
  - Mobilya üreticileri
  - Kapı üreticileri
  - Panel işleyen firmalar
  - Dekoratif yüzey kullanan üreticiler
  - Toptan levha alıcıları
  - Bayiler / toptancılar
- Bölümler:
  - MDFLAM nedir?
  - Kimler için uygundur?
  - Kullanım alanları
  - Teklif için hangi bilgiler gerekir?
  - Yiğiter ile MDFLAM tedarik avantajı (Kastamonu Entegre ana bayi vurgusu)
  - İlgili ürünler

## Sonraki Ürün SEO Sayfası

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
