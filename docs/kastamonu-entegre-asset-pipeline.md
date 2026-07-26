# Kastamonu Entegre Asset ve Veri Pipeline

Tarih: 2026-07-26

Sprint: `2.10B — Veri Modeli ve Asset Pipeline`

## Sonuç

Kastamonu Entegre içerik programının ortak veri ve dosya altyapısı kuruldu. Production sayfaları bu sprintte değiştirilmedi; `2.10C–2.10E` içinde yeni ve yenilenen sayfalar bu veri kaynağı ve bileşenlerle üretilecek.

İlk paket:

- 14 doğrulanmış ürün ailesi;
- 5 resmî ürün/uygulama görseli;
- 18 dekoratif panel yüzey örneği;
- 7 Doorpan yüzey ailesi;
- 3 yerel, sürümlü resmî katalog;
- 52 kayıtlı kaynağın hash ve boyut metadata'sı;
- ürün kartı, katalog indirme ve yüzey kartı bileşenleri içerir.

## Dosya Yapısı

```text
assets/kastamonu-entegre/original/
  {urun-ailesi}/{resmi-kaynak-dosyasi}
public/
  images/products/kastamonu-entegre/
    dekoratif-panel/
    kapi-paneli/
    mdf/
    yuzeyler/
  documents/kastamonu-entegre/
docs/
  kastamonu-entegre-asset-manifest.csv
  kastamonu-entegre-asset-pipeline.md
scripts/
  sync-kastamonu-assets.mjs
  validate-kastamonu-data.mjs
src/
  data/kastamonu-entegre.ts
  components/kastamonu-entegre/
    CatalogDownload.astro
    ProductFamilyCard.astro
    SurfaceSampleCard.astro
```

## Veri Modeli

`src/data/kastamonu-entegre.ts` aşağıdaki ayrımı zorunlu tutar:

- Üretici tarafından doğrulanan ürün bilgisi: `claimStatus: official_source`
- Yiğiter'e ait stok, ölçü ve termin bilgisi: `claimStatus: yigiter_confirmation_required`
- Yerel dosyası hazır katalog: `publicationStatus: local`
- Hash/metadata'sı hazır ancak henüz public'e alınmamış katalog: `publicationStatus: metadata_only`
- Ürün/sürüm kontrolü bekleyen doküman: `publicationStatus: candidate`

Ürün kartlarında kesin stok veya termin taahhüdü bulunmaz. Ortak ifade:

> Stok, ölçü ve termin için teklif alın

## Asset İşlem Kuralları

`scripts/sync-kastamonu-assets.mjs` yalnızca `www.kastamonuentegre.com` alan adından HTTPS kaynak kabul eder.

Manifestteki işlem türleri:

| `pipeline_action` | Davranış |
|---|---|
| `optimize-and-archive` | Resmî görseli kaynak arşivine alır, WebP üretir ve iki hash'i kaydeder. |
| `copy-original` | Resmî PDF'i değiştirmeden sürümlü public yoluna kopyalar. |
| `metadata-only` | Kaynağın SHA-256 ve boyutunu kaydeder; dosyayı public'e eklemez. |
| `skip` | Ürün/sürüm kontrolü bekleyen adayı indirme paketine almaz. |

Görsel bütçeleri:

- yüzey kartı: en fazla 512×512 px ve 80 KB;
- ürün/içerik görseli: en fazla 1600 px ve 200 KB;
- SVG kaynaklar webde doğrudan sunulmaz; büyük resmî SVG'ler WebP karta dönüştürülür;
- orijinal kaynak dosyası hash doğrulaması için `assets/.../original` altında korunur;
- resmî PDF değiştirilmez.

İlk paket sonucu:

| Grup | Dosya | Boyut |
|---|---:|---:|
| Optimize public görseller | 30 | yaklaşık 632 KB |
| Public kataloglar | 3 | yaklaşık 8,7 MB |
| Kaynak görsel arşivi | 30 | yaklaşık 14 MB |

## İlk Yerel Katalog Paketi

| Ürün | Yerel dosya |
|---|---|
| Compactlam Panel | `kastamonu-entegre-compactlam-panel-2026-v1.pdf` |
| Doorlam | `kastamonu-entegre-doorlam-2024-v1.pdf` |
| Doorpan | `kastamonu-entegre-doorpan-2024-v1.pdf` |

Diğer onaylı PDF'ler toplam paket büyüklüğünü tek PR'da gereksiz yere artırmamak için `metadata_only` bırakıldı. İlgili ürün sayfasının sprintinde, güncel sürüm kontrolünden sonra ürün ailesi bazında public'e alınacak. Bu karar programdaki “büyük asset paketini ürün ailesine göre böl” kuralını uygular.

## Komutlar

Kaynakları yeniden senkronize et:

```bash
npm run assets:kastamonu:sync
```

Yerel dosya, hash, boyut ve görsel bütçelerini doğrula:

```bash
npm run assets:kastamonu:verify
```

Ürün/katalog referansları ile engellenmiş iddiaları doğrula:

```bash
npm run data:kastamonu:verify
```

Veri dosyasını TypeScript strict modunda kontrol et:

```bash
npm run types:kastamonu:check
```

Siteyi doğrula:

```bash
npm run build
```

## Yeni Asset Ekleme Akışı

1. Kaydı `docs/kastamonu-entegre-asset-manifest.csv` dosyasına `aday` olarak ekle.
2. Resmî ürün/katalog sayfasıyla ürün ailesini ve sürümü doğrula.
3. Kullanım izni dayanağını kaydet ve durumu `onaylı` yap.
4. Pipeline'ın kopyalayacağı PDF ise `syncPdfIds` listesine ekle; görseller otomatik optimize edilir.
5. `assets:kastamonu:sync` ve iki doğrulama komutunu çalıştır.
6. Veri modeline yalnızca doğrulanmış ürün/katalog eşleşmesini ekle.
7. İlgili sayfada veri modelini ve ortak bileşenleri kullan.

## Bilinen Sınır

Eski production Kastamonu sayfaları hâlen kendi gövde metinlerini içeriyor. Bu sprint onların görünümünü ve içeriğini bilinçli olarak değiştirmedi. Tek kaynak modeline gerçek sayfa geçişi:

- `2.10C`: hub ve dekoratif panel;
- `2.10D`: MDF, MDFLam ve yongalevha;
- `2.10E`: Doorpan ve Doorlam

sprintlerinde tamamlanacak.
