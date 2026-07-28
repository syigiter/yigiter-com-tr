# GSC "Ürün snippet'leri" Uyarısı — Kabul Edilmiş By-Design

Tarih: 2026-07-28
Karar: **Kabul edildi (by-design). Kovalanmayacak, düzeltilmeyecek.**

## Uyarı nedir?

Google Search Console → **Geliştirmeler → Ürün snippet'leri** raporu, ürün sayfalarında şu "kritik" uyarıyı gösterir:

> `"offers", "review" veya "aggregateRating" belirtilmelidir`

Örnek: `https://www.yigiter.com.tr/urunler/kastamonu-entegre/mdf/` — `@type: Product`, ama `offers`/`review`/`aggregateRating` yok.

## Neden bu uyarı çıkıyor ve neden kapatmıyoruz?

- Site **B2B, teklif bazlı**. Online satış yok, **kamuya açık fiyat listesi yok**, toplanan müşteri yorumu yok.
- Google'ın Product **zengin sonucu** (arama sonucunda fiyat/yıldız kartı) için `offers.price` **ya da** gerçek `review`/`aggregateRating` şarttır.
- Fiyatımız/yorumumuz olmadığı için bu üçünden hiçbirini **dürüstçe** ekleyemeyiz. Sahte fiyat/rating eklemek Google politikasına aykırıdır (manuel ceza riski) ve yasaktır.
- Dolayısıyla bu sayfalar **tasarım gereği** Product zengin sonucuna uygun değildir. Uyarı bunun raporlanmış halidir.

## Önemli: sıralamaya/indexlemeye ETKİSİ YOK

- "Kritik" etiketi yalnızca **Ürün snippet'leri özelliği** kapsamındaki şiddeti anlatır — site sağlığı veya index cezası değil.
- Sayfa normal şekilde taranır, indexlenir ve mavi-link olarak sıralanır. (GSC URL İnceleme'de "başarıyla tarandı" ile teyitli.)

## Neden Product markup'ı KALDIRMIYORUZ (A yerine B)

`Product`'ı silip raporu tamamen temizlemek mümkündü (A seçeneği), ama tutmayı (B) seçtik çünkü:

1. **Doğru `@type`:** üretici/distribütör kataloğu için Product semantik olarak doğru tiptir.
2. **Zengin sonuç dışı SEO değeri:** entity netliği ve knowledge-graph disambiguation (Google + AI arama motorlarının ürünü doğru anlaması).
3. **Geleceğe hazır:** fiyat bir gün yayınlanırsa Merchant Center / Product zengin sonucu bir adım uzakta.

## Ne YAPMAYACAĞIZ

- ❌ `offers.price`, `review` veya `aggregateRating` **uydurmak** (politika ihlali).
- ❌ Bu uyarıyı GSC'de tekrar tekrar "düzeltmeye" çalışmak.
- ❌ Bu uyarı yüzünden Product markup'ını kaldırmak.

## Geçmiş

- Asıl kaynak bir **tip hatasıydı**: `ProductGroup` yanlış kullanımı + fiyatsız bozuk `Offer`. Bunlar [PR #80](https://github.com/syigiter/yigiter-com-tr/pull/80) ile düzeltildi (`src/lib/schema.ts`).
- Düzeltme sonrası markup **geçerli** (temiz `Product`, ProductGroup/hasVariant hatası yok). Kalan tek uyarı bu belgede anlatılan **kökten/by-design** olandır.
- İlgili kod notu: `src/lib/schema.ts` içindeki `productEntity` yorumu.

## Fiyat ileride yayınlanırsa

Sadece o zaman: gerçek fiyatla `offers` (price + priceCurrency + availability) eklenir → uyarı doğal olarak kapanır ve sayfalar Product zengin sonucuna uygun hale gelir.
