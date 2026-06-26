# Next Steps — Yiğiter Sitesi

## Sıradaki Sprint: Sprint 2.2C — Teklif Formu B2B İyileştirmesi

## Amaç

Teklif formunu B2B müşteri talebini daha iyi toplayacak hale getirmek.

## Önerilen Alanlar

- Firma tipi
- Ürün grubu
- Tahmini adet/metraj
- Teslimat ili
- Kullanım amacı: üretim / bayi / proje / ihracat
- Aciliyet
- Açıklama alanı yönlendirici metni

## Korunması Gerekenler

- Form submit akışı bozulmamalıdır.
- Web3Forms entegrasyonu bozulmamalıdır.
- KVKK checkbox korunmalıdır.
- Mevcut query prefill davranışı korunmalıdır.
- CSP, header, footer ve route altyapısına gereksiz dokunulmamalıdır.

## Önce Yapılacak Küçük Kontrol

- PageSpeed ana sayfa ve `/urunler/` canlı ölçümü zaman zaman tekrar alınabilir.
- Son bilinen ölçüm: ana sayfa ve `/urunler/` Performance 100, Accessibility 95, Best Practices 100, SEO 100.

## Daha Sonra

- KVKK metni hukuki kontrol
- Web3Forms canlı mail testi
- Ürün sayfaları için schema/structured data değerlendirmesi
- B2B teklif formu gönderim sonrası takip/CRM akışı değerlendirmesi
