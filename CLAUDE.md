# Yiğiter Orman Ürünleri — Kurumsal Web Sitesi

## Proje Özeti

Yiğiter Orman Ürünleri için B2B odaklı kurumsal tanıtım ve katalog web sitesi geliştiriyoruz. Site, kurumsal müşterilere (mobilyacılar, kapı imalatçıları, bölgesel bayi ve depolar, ihracat partnerleri) yönelik tasarlanmıştır. Online satış yapılmayacak; amaç tanıtım, ürün kataloğu sunumu, ihracat görünürlüğü ve teklif/iletişim toplamaktır.

**Domain:** yigiter.com.tr  
**Hedef kitle (yurt içi):** B2B mobilya imalatçıları, kapı üreticileri, bölgesel bayi ve depo işletmeleri (Türkiye geneli)  
**Hedef kitle (yurt dışı):** Avrupa, Orta Doğu, Türki Cumhuriyetler, Afrika pazarlarındaki kapı komponenti alıcıları  
**Dil:** Türkçe (birincil), İngilizce (ikinci faz — ihracat sayfaları için kritik)

## Şirketin Kimliği

Yiğiter Orman Ürünleri, 20+ yıllık bir aile şirketidir ve **dört farklı rolü** aynı anda üstlenir. Site tasarımında bu dört rolün hepsi açıkça görünmelidir:

1. **ÜRETİCİ** — Kapı kasası ve pervaz kendi tesiste üretilir
2. **YETKİLİ BAYİ/DİSTRİBÜTÖR** — Kastamonu Entegre Ana Bayisi, Genç Boya Distribütörü
3. **İTHALATÇI** — Melamin kaplı kapı yüzeyi ithalatı
4. **İHRACATÇI** — Avrupa, Orta Doğu, Türki Cumhuriyetler ve Afrika'ya düzenli ihracat

## İş Kolları (Detaylı)

### Bayilik ve Distribütörlük

- **Kastamonu Entegre Ana Bayisi** — Yongalevha (sunta), MDF, MDFLam ve diğer paneller. Türkiye genelinde sevkiyat.
- **Genç Boya Distribütörü** — İstanbul Anadolu Yakası
- **Genç Boya Bayisi** — Tosya
- **Genç Boya Avrupa Yakası Deposu** — Bölgesel hızlı tedarik için
- **Melamin Kaplı Kapı Yüzeyi İthalatçısı** — Yurt dışından ithalat

### Üretim (Kendi Tesisinde)

- **Kapı kasası** — Standart ölçü seri üretim + müşteriye özel ölçü/proje bazlı üretim
- **Kapı pervazı** — Standart ölçü seri üretim + müşteriye özel ölçü/proje bazlı üretim

### Kapı İmalatı Tedarik Çözümleri (Bayi/Tedarikçi)

- Kağıt dolgu malzemesi (honeycomb / petek dolgu)
- PVC film
- Kapı imalatında kullanılan diğer yardımcı malzemeler

### İhracat

- Pazarlar: **Avrupa, Orta Doğu (Irak, Suriye, Körfez vb.), Türki Cumhuriyetler/Orta Asya, Afrika**
- Karakter: **Düzenli ve sürekli** sevkiyat
- Ürün: Ağırlıklı olarak kendi ürettiğimiz kapı komponentleri (kasa, pervaz)

## Teknik Yaklaşım

### Tercih Edilen Teknolojiler

- **Framework:** Astro (statik site, hızlı, SEO dostu, çok dilli destek mükemmel)
- **Stil:** Tailwind CSS
- **İçerik yönetimi:** Markdown/MDX dosyaları (`src/content/` altında)
- **Form yönetimi:** Netlify Forms, Formspree veya benzeri
- **Hosting:** Netlify, Vercel veya Cloudflare Pages
- **Görseller:** WebP formatı, lazy loading, responsive
- **Çoklu dil (i18n):** Astro'nun yerleşik i18n yapısı (TR birincil, EN ikinci faz)

### Kaçınılması Gerekenler

- Karmaşık backend (gerekmiyor)
- Veritabanı (markdown yeterli)
- Online ödeme/sepet sistemi (B2B, sadece teklif)
- Gereksiz JavaScript bağımlılıkları

## Site Mimarisi

### Ana Sayfalar ve URL Yapısı

```
/                                    Anasayfa
/hakkimizda                          Hakkımızda (genel)
/hakkimizda/sirketimiz               Şirket hikayesi
/hakkimizda/bayilik-belgeleri        Yetki ve bayilik sertifikaları
/hakkimizda/ihracat                  İhracat sayfası

/urunler                             Tüm ürünler özet sayfası
/urunler/kastamonu-entegre           Kastamonu Entegre ana sayfası
/urunler/kastamonu-entegre/yongalevha
/urunler/kastamonu-entegre/mdf
/urunler/kastamonu-entegre/mdflam
/urunler/genc-boya                   Genç Boya ürünleri
/urunler/melamin-kapi-yuzeyi         Melamin kaplı kapı yüzeyleri (ithalat)
/urunler/kapi-komponentleri          Kapı kasası ve pervaz (kendi üretim)
/urunler/kapi-komponentleri/kasa
/urunler/kapi-komponentleri/pervaz
/urunler/kapi-imalat-malzemeleri     Kağıt dolgu, PVC film, diğer
/urunler/kapi-imalat-malzemeleri/kagit-dolgu
/urunler/kapi-imalat-malzemeleri/pvc-film

/hizmet-bolgesi                      Türkiye haritası, depo lokasyonları
/ihracat                             İhracat (yurt dışı müşteri için ana giriş)
/iletisim                            İletişim bilgileri, harita
/iletisim/teklif-al                  Teklif formu

/en/...                              İngilizce sayfalar (ikinci faz)
```

### Her Ürün Sayfasında

- Yüksek çözünürlüklü görseller (galeri, lightbox)
- Ürün özellikleri (ölçüler, varyantlar, renkler, desenler)
- Marka/üretici/menşe bilgisi
- "Fiyat Teklifi Al" butonu (formu ürün adıyla pre-fill eder)
- WhatsApp butonu
- Bayilik/yetki rozeti
- İlgili diğer ürünler

### Anasayfa Bölümleri (Sırasıyla)

1. **Hero:** Büyük görsel + güçlü başlık + 2 CTA
2. **Kimlik rozetleri:** Kastamonu Entegre / Genç Boya / Melamin İthalatçı / 4 Kıtaya İhracat
3. **Şirket tanıtımı:** Orta versiyon metni
4. **Ürün kategorileri:** 6 büyük kart
5. **Üretim Tesisimiz:** Fotoğraflar + kısa metin
6. **İhracat:** Dünya haritası + 4 bölge vurgusu
7. **Neden Yiğiter?:** 6-8 maddelik avantaj listesi
8. **Hizmet bölgesi:** Türkiye haritası, depo işaretleri
9. **İletişim CTA:** Büyük "Teklif Al" / WhatsApp / Telefon

## Tasarım Prensipleri

### Genel Yaklaşım

- **Profesyonel ve güven veren:** Sertifika, referans, somut bilgi
- **Sade ve hızlı:** İçerik odaklı, az animasyon
- **Mobil önce:** Şantiye/atölye/depo telefonla erişim
- **Üretici görüntüsü:** Sanayi kimliği taşıyan ciddi ama modern
- **Türkçe karakter desteği:** ş, ğ, ü, ö, ç, ı

### Renk Paleti (Önerilen)

- **Birincil:** Koyu lacivert veya kahverengi-bordo (güven, ahşap çağrışımı)
- **İkincil:** Doğal ahşap/krem tonu
- **Vurgu:** Sıcak turuncu veya altın sarısı (CTA butonları için)
- **Nötr:** Beyaz, açık gri

### Tipografi (Önerilen)

- **Başlık ve gövde:** Manrope, Inter veya Plus Jakarta Sans (modern, Türkçe destekli)

### CTA Standartları

Her sayfada şu üç eylemden biri:
- **"Teklif Al"** (birincil)
- **"WhatsApp ile İletişim"** (ikincil)
- **"Bizi Arayın"** (telefon)

## SEO Stratejisi

### Kritik Anahtar Kelimeler (Yurt İçi)

- "Kastamonu Entegre bayi", "Kastamonu Entegre Anadolu Yakası"
- "Sunta MDF toptan", "MDFLam fiyat"
- "Melamin kaplı kapı yüzeyi", "Kapı yüzeyi ithalatçı"
- "Kapı kasası üretici", "Kapı kasası pervaz toptan"
- "Genç Boya distribütör", "Genç Boya Anadolu Yakası", "Genç Boya Tosya"
- "Kağıt dolgu honeycomb", "Kapı PVC film"
- "Orman ürünleri toptan İstanbul"

### İhracat İçin (İngilizce, İkinci Faz)

- "Door frame manufacturer Turkey"
- "Door architrave supplier Turkey"
- "MDF panel supplier Turkey"
- "Melamine door skin Turkey"

### Teknik SEO

- Her sayfa için unique title ve meta description
- Açık URL yapısı
- Schema.org: LocalBusiness, Product, Organization, Manufacturer
- sitemap.xml, robots.txt
- Open Graph
- hreflang (TR ↔ EN, ikinci faz)
- Google Search Console + Google Business Profile

## İçerik Yönergeleri

### Yazım Tarzı

- Profesyonel ama samimi
- Net ve kısa cümleler
- Aksiyon odaklı
- Türkçe karakter doğru
- Marka isimleri: "Kastamonu Entegre", "Genç Boya" resmi yazımı korunmalı
- Somut bilgilerle desteklenmiş: "20 yıl", "4 kıta", "Türkiye geneli"

### Hazır Metinler

`sirket-tanimi.md` dosyasında üç versiyon var:
- **Kısa:** Meta açıklama, footer, sosyal medya
- **Orta:** Anasayfa "Biz Kimiz" bölümü
- **Uzun:** Hakkımızda sayfası ana metni

### Eksik İçerik

Uydurma. `TODO:` ile geç:

```html
<!-- TODO: Üretim tesisi fotoğrafı eklenecek -->
<img src="/images/placeholder.jpg" alt="Yiğiter üretim tesisi" />
```

## Klasör Yapısı

```
yigiter-com-tr/
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── hakkimizda/
│   │   ├── urunler/
│   │   ├── ihracat.astro
│   │   ├── hizmet-bolgesi.astro
│   │   └── iletisim/
│   ├── components/
│   ├── layouts/
│   ├── content/
│   │   ├── urunler/
│   │   └── kurumsal/
│   └── styles/
├── public/
│   ├── images/
│   │   ├── urunler/
│   │   ├── belgeler/
│   │   ├── kurumsal/
│   │   └── placeholder/
│   ├── favicon.svg
│   └── robots.txt
├── CLAUDE.md
├── sirket-tanimi.md
├── package.json
└── README.md
```

## Çalışma Kuralları (Claude için)

1. **Türkçe öncelikli** — Görünür metin Türkçe, kod İngilizce
2. **Adım adım** — Tek seferde her şey yapma
3. **Önce sor, sonra yaz** — İçerik yoksa uydurma
4. **Placeholder kullan** — Görseller hazır olana kadar
5. **Mobil önce** — Önce mobilde çalışsın
6. **Performans** — Lighthouse 90+
7. **Sade kod** — Astro'nun düz HTML+component yaklaşımı
8. **Versiyon kontrolü** — Anlamlı her değişiklik sonrası git commit
9. **Marka isimleri** — Resmi yazımlar değiştirilemez
10. **Rolleri vurgula** — "Satıyoruz" değil "yetkili bayi olarak sunuyoruz", "kendi üretimimiz" gibi rolü belirten ifadeler

## İletişim Bilgileri (Eksik)

```
TODO: Doldur
- Telefon (sabit):
- Telefon (cep / WhatsApp):
- E-posta (genel):
- E-posta (ihracat):
- Adres (üretim tesisi):
- Adres (Anadolu Yakası deposu):
- Adres (Avrupa Yakası deposu):
- Adres (Tosya bayisi):
- Çalışma saatleri:
- Sosyal medya:
```

## Yol Haritası

### Faz 1: Temel Kurulum
- [ ] Astro projesini başlat
- [ ] Tailwind CSS kur
- [ ] Temel layout (header, footer)
- [ ] Renk paleti, tipografi
- [ ] Placeholder görseller
- [ ] Domain'i hosting'e bağla

### Faz 2: Anasayfa
- [ ] Hero
- [ ] Kimlik rozetleri
- [ ] Şirket tanıtım
- [ ] Ürün kategorileri
- [ ] Üretim tesisi bölümü
- [ ] İhracat bölümü
- [ ] Neden biz?
- [ ] Hizmet bölgesi
- [ ] İletişim CTA

### Faz 3: Hakkımızda
- [ ] Şirket hikayesi
- [ ] Bayilik & belgeler
- [ ] İhracat sayfası

### Faz 4: Ürün Sayfaları
- [ ] Ürünler ana
- [ ] Kastamonu Entegre alt sayfaları
- [ ] Genç Boya
- [ ] Melamin kapı yüzeyi
- [ ] Kapı komponentleri (üretim vurgusu)
- [ ] Kapı imalat malzemeleri

### Faz 5: Diğer Sayfalar
- [ ] Hizmet bölgesi
- [ ] İletişim + form
- [ ] Teklif al

### Faz 6: İçerik ve Görseller
- [ ] Logo
- [ ] Ürün fotoğrafları
- [ ] Üretim tesisi fotoğrafları
- [ ] Bayilik belgeleri görselleri
- [ ] Depo fotoğrafları

### Faz 7: SEO ve Optimizasyon
- [ ] Meta etiketler
- [ ] Sitemap, robots
- [ ] Schema.org
- [ ] Open Graph
- [ ] Lighthouse
- [ ] Search Console
- [ ] Google Business Profile

### Faz 8: Lansman
- [ ] Form testleri
- [ ] Link testleri
- [ ] Mobil testleri
- [ ] Tarayıcı testleri
- [ ] SSL
- [ ] Yayına alma

### Faz 9: İkinci Aşama
- [ ] İngilizce versiyon
- [ ] Blog/haberler
- [ ] Detaylı referans sayfası
- [ ] Sertifika sayfası

## İlgili Dosyalar

- `sirket-tanimi.md` — Üç versiyonlu şirket tanımı metinleri
