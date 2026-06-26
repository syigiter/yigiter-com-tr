# Next Steps — Yiğiter Sitesi

## Sıradaki Sprint: Canonical Domain Alignment — www / no-www Standardı

## Amaç

Production domain davranışı ile canonical URL üretimini aynı standarda getirmek.

## Mevcut Gözlem

- `yigiter.com.tr` production'da önce `www.yigiter.com.tr` adresine yönleniyor (Vercel domain yönlendirmesi).
- Astro canonical üretimi `https://yigiter.com.tr` (no-www) üzerinden yapılıyor (`astro.config.mjs` → `site: 'https://yigiter.com.tr'`).
- Bu durum fonksiyonel sorun yaratmıyor ama SEO açısından canonical domain standardı netleştirilmeli.

## Değerlendirilecek Seçenekler

1. Production primary domain no-www olacaksa Vercel domain ayarı buna göre düzeltilmeli.
2. Production primary domain www kalacaksa `astro.config.mjs` içindeki `site` değeri `https://www.yigiter.com.tr` olarak güncellenmeli.

## Tercih

Production şu anda www üzerinde çalıştığı için pratik çözüm muhtemelen canonical'ları `https://www.yigiter.com.tr` standardına taşımaktır. Ancak uygulanmadan önce tüm canonical/head/OG/sitemap etkileri kontrol edilmeli.

## Sonraki Ürün SEO Sayfaları

- `/urunler/mdf/`
- `/urunler/mdflam/`
- `/urunler/kapi-paneli/`

## Korunması Gerekenler

- Form submit akışı bozulmamalıdır.
- Web3Forms entegrasyonu bozulmamalıdır.
- KVKK checkbox korunmalıdır.
- Mevcut query prefill davranışı korunmalıdır.
- CSP, header, footer ve route altyapısına gereksiz dokunulmamalıdır.

## Bekleyen Temizlik

- Header/Footer ve bazı eski internal linklerde trailing slash standardizasyonu ileride ayrı mini sprint olarak yapılabilir.

## Daha Sonra

- KVKK metni hukuki kontrol
- Ürün sayfaları için schema/structured data değerlendirmesi
- B2B teklif dönüşüm takibi ve CRM akışı değerlendirmesi
