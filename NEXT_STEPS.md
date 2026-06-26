# Next Steps — Yiğiter Sitesi

## Sıradaki Sprint: Ürün SEO Serisi Son Kontrol ve İç Link Temizliği

## Amaç

Yayına alınan ürün SEO sayfalarının genel iç link, sitemap, canonical, route ve teklif prefill tutarlılığını toplu kontrol etmek.

## Kontrol Edilecek Ürün SEO Sayfaları

- `/urunler/kapi-pervazi/`
- `/urunler/kapi-kasasi/`
- `/urunler/melamin-kapi-yuzeyi/`
- `/urunler/pvc-film/`
- `/urunler/mdf/`
- `/urunler/mdflam/`
- `/urunler/kapi-paneli/`

## Kontrol Başlıkları

- Her sayfa 200 dönüyor mu?
- Canonical `https://www.yigiter.com.tr/...` standardında mı?
- Sitemap'te var mı?
- noindex yok mu?
- H1 count 1 mi?
- Title/meta description doğru mu?
- `/urunler` kart detay linkleri doğru mu?
- Teklif CTA query parametreleri doğru mu?
- Query prefill doğru ürün grubunu seçiyor mu?
- Eski/legacy duplicate URL riski var mı?
- Header/Footer trailing slash standardizasyonu ayrı mini sprint gerektiriyor mu?

## Ayrı Not

- `/urunler/kastamonu-entegre/kapi-paneli/` mevcut sitemap'te görülüyor; yeni `/urunler/kapi-paneli/` ile duplicate/legacy ilişkisi ileride değerlendirilebilir.

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
