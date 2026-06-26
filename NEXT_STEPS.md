# Next Steps — Yiğiter Sitesi

## Sıradaki Sprint: SEO Cleanup — Eski PVC Film Sayfası Duplicate Temizliği

## Amaç

Yeni standart PVC Film sayfası `/urunler/pvc-film/` yayına alındığı için eski `/urunler/kapi-imalat-malzemeleri/pvc-film/` sayfasının SEO durumunu temizlemek.

## Değerlendirilecek Seçenekler

- Eski URL'den yeni URL'ye 301 redirect (SEO açısından en temiz yaklaşım)
- Eski sayfada canonical'ı `/urunler/pvc-film/` sayfasına çevirmek
- Eski sayfaya noindex eklemek
- Eski sayfayı tamamen kaldırmak

## Tercih Edilecek Yaklaşım

SEO açısından en temiz yaklaşım muhtemelen eski URL'den yeni URL'ye 301 redirect olacaktır; ancak uygulamadan önce mevcut routing ve Vercel/Astro yapısına göre kontrol edilmeli.

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
- Canonical domain `https://yigiter.com.tr` standardı korunmalıdır.

## Bekleyen Temizlik

- Eski `/urunler/kapi-imalat-malzemeleri/pvc-film/` sayfası — 200 dönüyor, canonical kendisine bakıyor, noindex yok; yeni SEO sayfasıyla duplicate risk oluşturabilir.
- Header/Footer/diğer sayfalardaki trailing slash'siz `/urunler/melamin-kapi-yuzeyi` referansları — Vercel şu an yönetiyor, işlevsel sorun yok; ayrı temizlik sprintine bırakıldı.

## Daha Sonra

- KVKK metni hukuki kontrol
- Ürün sayfaları için schema/structured data değerlendirmesi
- B2B teklif dönüşüm takibi ve CRM akışı değerlendirmesi
