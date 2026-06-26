# Next Steps — Yiğiter Sitesi

## Sıradaki Sprint: Sprint 2.3D — PVC Film SEO Ürün Detay Sayfası

## Amaç

Mevcut ürün detay SEO şablonunu kullanarak `/urunler/pvc-film/` sayfasını oluşturmak.

## Önerilen Yapı

- H1: PVC Film
- URL: `/urunler/pvc-film/`
- CTA: `/teklif-al?urun=pvc-film`
- Hedef kitle:
  - Kapı kanadı üreticileri
  - Kapı kaplama yapan firmalar
  - Toptan kapı malzemesi alıcıları
  - Bayiler
- Bölümler:
  - PVC film nedir?
  - Kimler için uygundur?
  - Kullanım alanları
  - Teklif için hangi bilgiler gerekir?
  - Yiğiter ile PVC film tedarik avantajı
  - İlgili ürünler

## Daha Sonraki Ürün SEO Sayfaları

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

- Header/Footer/diğer sayfalardaki trailing slash'siz `/urunler/melamin-kapi-yuzeyi` referansları — Vercel şu an yönetiyor, işlevsel sorun yok; ayrı temizlik sprintine bırakıldı.

## Daha Sonra

- KVKK metni hukuki kontrol
- Ürün sayfaları için schema/structured data değerlendirmesi
- B2B teklif dönüşüm takibi ve CRM akışı değerlendirmesi
