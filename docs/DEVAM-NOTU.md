# Yiğiter Orman Ürünleri — Devam Notu

> **Son güncelleme:** 31 Mayıs 2026 (Cumartesi akşamı)  
> **Devam yeri:** Ofis bilgisayarı (yarın)  
> **Durum:** E-posta güncellemesi için hazır komut bekliyor

---

## 🎯 ÖNCE BUNU OKU

Bu dosya `docs/` klasörü altında. Yarın ofis bilgisayarında **Claude Code'u açtığında** ona şu komutu ver:

```
docs/DEVAM-NOTU.md dosyasını oku, sonra bana son durumu özetle ve sıradaki işe başlayalım.
```

Claude Code dosyayı okuyup tüm bağlamı alacak.

---

## 📍 KALDIĞIMIZ NOKTA

**Bu hafta sonu yapılan:**
- ✅ Yeni Mac'e tüm geliştirme ortamı kuruldu (Node 26, npm, Claude Code 2.1.158, repo klonu)
- ✅ Vercel ve GitHub erişimi çalışıyor
- ✅ 0541 717 7667 numara karmaşası çözüldü (Ümraniye'den Tosya'ya taşındı, push edildi)
- ✅ Genç Boya statüsü güncellendi (Avrupa Yakası Bayisi eklendi, commit 4a02e40, push edildi)
- ✅ Microsoft 365 Exchange'de yeni kurumsal e-postalar açıldı:
  - info@yigiter.com.tr
  - kapi@yigiter.com.tr
  - plaka@yigiter.com.tr (Zeynep'in MDF şubesi için, "plaka" = sektörün resmi terimi)
  - tosya@yigiter.com.tr
  - export@yigiter.com.tr (ihracat için yeni)

**Bekleyen iş (sıradaki ilk adım):**
- 🔴 **E-posta güncellemeleri siteye yansıtılacak** (komut hazır, aşağıda)
- 🔴 export@yigiter.com.tr yeni adres olarak uygun yerlere eklenecek

---

## 🚀 YARIN İLK İŞ — E-POSTA GÜNCELLEMESİ

Ofis bilgisayarında Claude Code'u proje klasöründe (`~/Desktop/yigiter-com-tr` veya nerede ise) aç. Aşağıdaki komutu **olduğu gibi** kopyala-yapıştır:

```
E-posta güncellemeleri yapacağız. Microsoft 365'te yeni kurumsal e-postalar açıldı, sitedeki eski kişi adlı e-postaları toplu olarak değiştireceğiz ve ihracat için yeni bir adres ekleyeceğiz.

═══════════════════════════════════════════════════
ADIM 1 — ÖN HAZIRLIK
═══════════════════════════════════════════════════

Önce git pull yap, GitHub'daki son hale eşitlen.
Sonra projeyi tara: e-posta adresleri hangi dosyalarda geçiyor bul. Olası yerler:
- src/components/Footer.astro
- src/pages/subeler.astro (veya şube veri dosyası src/data/subeler.* gibi)
- src/pages/iletisim.astro veya iletisim/index.astro
- src/pages/iletisim/teklif-al.astro
- src/pages/ihracat.astro
- src/pages/hakkimizda/ihracat.astro
- src/pages/urunler/kapi-komponentleri.astro veya alt sayfaları
- src/layouts/BaseLayout.astro (Schema.org markup)
- src/components/home/ContactCTA.astro (varsa)

Tara, sonra raporla: hangi dosyalarda hangi e-posta nerede geçiyor.

═══════════════════════════════════════════════════
ADIM 2 — DEĞİŞTİRİLECEK E-POSTALAR (Mevcut → Yeni)
═══════════════════════════════════════════════════

Aşağıdaki değişiklikleri yap. Hem mailto: linklerinde hem görünür metinde:

1. dilek@yigiter.com.tr → 
   - Footer'da kullanılan tüm yerlerde: info@yigiter.com.tr
   - "Kapı Ürünleri Bölümü" (Başakşehir İkitelli Blok 24) şubesinde: kapi@yigiter.com.tr
   (Aynı kişi adı iki farklı yerde kullanılıyor olabilir — Footer'da info@, şube kartında kapi@ olacak)

2. zeynep@yigiter.com.tr → plaka@yigiter.com.tr
   (MDF/Panel Satış Bölümü - Başakşehir Deparko)
   NOT: "plaka" sektörün resmi terimi (sunta/MDF/MDFLam levha karşılığı)

3. suzan@yigiter.com.tr → tosya@yigiter.com.tr
4. halitkibar@yigiter.com.tr → tosya@yigiter.com.tr
   (Tosya Merkez Satış Bölümü - iki kişi tek kurumsal adres oldu)

5. hilmi@yigiter.com.tr → tosya@yigiter.com.tr
   (Tosya Merkez Üretim Tesisi - Tosya ekibi yönetiyor, aynı adres)

═══════════════════════════════════════════════════
ADIM 3 — DOKUNULMAYACAK E-POSTALAR
═══════════════════════════════════════════════════

Bunlara KESİNLİKLE dokunma, doğru hallerinde:
- gencboya@yigiter.com.tr (Boya Avrupa Yakası - Başakşehir İkitelli Blok 18)
- gencsiparis@yigiter.com.tr (Boya Anadolu Yakası - Ümraniye)

═══════════════════════════════════════════════════
ADIM 4 — YENİ E-POSTA EKLEME: export@yigiter.com.tr
═══════════════════════════════════════════════════

İhracat için yeni e-posta export@yigiter.com.tr açıldı. Şu yerlere ekle:

A) src/pages/ihracat.astro veya src/pages/hakkimizda/ihracat.astro:
   - Sayfada görünür bir yere "İhracat İletişim" kutusu / bölümü ekle
   - export@yigiter.com.tr adresini mailto: link olarak koy
   - Eğer sayfada zaten CTA bölümü varsa, "İhracat Talebi" linkinin yanına "veya doğrudan: export@yigiter.com.tr" ekle

B) src/pages/iletisim.astro:
   - İhracat için ayrı bir bölüm/kart aç: "İhracat / Export"
   - Açıklama: "Yurt dışı sevkiyat talepleri için"
   - E-posta: export@yigiter.com.tr (mailto: link)

C) src/pages/urunler/kapi-komponentleri.astro:
   - "İhracat Talebi" CTA'sının yanına "export@yigiter.com.tr" yazısını ekle

D) src/layouts/BaseLayout.astro veya Schema.org markup nerede tanımlıysa:
   - Organization JSON-LD içindeki contactPoint dizisine yeni bir ekle:
   {
     "@type": "ContactPoint",
     "contactType": "Export",
     "email": "export@yigiter.com.tr",
     "areaServed": ["Europe", "Middle East", "Central Asia", "Africa"],
     "availableLanguage": ["Turkish", "English"]
   }

E) Footer (opsiyonel ama önerilen): Eğer footer'da yer varsa, kurumsal sütununa "İhracat: export@yigiter.com.tr" satırı ekle

═══════════════════════════════════════════════════
ADIM 5 — RAPOR VE ONAY
═══════════════════════════════════════════════════

Tüm değişiklikleri yaptıktan sonra şunları bana göster:
- Hangi dosyalarda hangi e-posta değişti (kısa liste)
- export@yigiter.com.tr'yi hangi yerlere ekledin
- git status çıktısı (hangi dosyalar değişmiş)

SONRA DURAKSA, git commit veya push yapma. Benden onay bekle.

═══════════════════════════════════════════════════
ÖNEMLİ KURALLAR
═══════════════════════════════════════════════════

- Sadece e-posta ile ilgili değişiklikler. Başka hiçbir şeye dokunma.
- gencboya@ ve gencsiparis@ adreslerine ASLA dokunma.
- Hem mailto: linklerini hem görünür metni güncelle.
- Tosya için 3 farklı kişi e-postasının (suzan, halitkibar, hilmi) hepsi tek tosya@ adresi ile değiştirilecek — varsa duplicate satırları temizle.
- Schema.org markup'ında var olan kişi e-postaları varsa onları da güncelle.
- Eğer şube bilgileri ayrı bir veri dosyasında (örn. src/data/subeler.json veya .ts) merkezi tutulduysa, ana değişikliği orada yap — tüm sayfalar oradan okuyorsa tek değişiklik yeterli olur.
```

---

## 📋 E-POSTA HARİTASI (Final)

| Yer | E-posta |
|-----|---------|
| **Footer** (her sayfa) | info@yigiter.com.tr |
| **Kapı Ürünleri** (Başakşehir Blok 24) | kapi@yigiter.com.tr |
| **Boya Avrupa Yakası** (Başakşehir Blok 18) | gencboya@yigiter.com.tr ✅ |
| **MDF/Panel Satış** (Başakşehir Deparko) | plaka@yigiter.com.tr |
| **Tosya Merkez Satış** (Harsat No: 5) | tosya@yigiter.com.tr |
| **Tosya Üretim Tesisi** (Kurtbeli OSB) | tosya@yigiter.com.tr |
| **Boya Anadolu Yakası** (Ümraniye) | gencsiparis@yigiter.com.tr ✅ |
| **İhracat** (yeni eklenecek) | export@yigiter.com.tr |

---

## 📅 SIRADAKİ İŞLER (E-posta'dan sonra)

### Bu Hafta
1. ✅ E-posta güncellemeleri (yukarıda komut hazır)
2. 🟡 "X fotoğrafı eklenecek" yazılarını güzelleştir/gizle
   - 4 yerde var: "Şirket fotoğrafı", "Üretim tesisi", "Üretim hattı", "Ürün fotoğrafı"

### Bu Ay
3. 🟡 Şube fotoğrafları (her şubenin dış cephe + iç)
4. 🟡 Üretim tesisi fotoğrafları (Tosya OSB)
5. 🟡 Şube kartlarına Google Maps embed
6. 🟡 WhatsApp mesajlarını şubelere özelleştir (her bölüm için farklı mesaj)
7. 🟡 İletişim sayfasına direkt form ekle
8. 🟡 Hizmet bölgesi sayfasını içerikle doldur

### Sonraki Faz
9. 🟢 Bayilik belgesi görselleri (Kastamonu Entegre, Genç Boya sertifikaları)
10. 🟢 İngilizce versiyon (ihracat müşterileri için kritik)
11. 🟢 Referans/müşteri listesi (izin alındıysa)
12. 🟢 Blog/haberler bölümü (SEO için)

---

## 🗺️ ŞİRKET BİLGİLERİ (Hatırlatma)

### Şirketin 4 Rolü
1. **ÜRETİCİ** — Kapı kasası ve pervaz, Tosya Kurtbeli OSB
2. **YETKİLİ BAYİ/DİSTRİBÜTÖR** — Kastamonu Entegre Ana Bayisi, Genç Boya Distribütör/Bayi
3. **İTHALATÇI** — Melamin kaplı kapı yüzeyi
4. **İHRACATÇI** — Avrupa, Orta Doğu, Türki Cumhuriyetler, Afrika

### 6 Şube
1. Kapı Ürünleri — Başakşehir İkitelli Blok 24 (0212 670 2025)
2. Boya Avrupa Yakası Bayi — Başakşehir İkitelli Blok 18 (0212 670 0038)
3. MDF/Panel — Başakşehir Deparko (0546 488 6737)
4. Tosya Merkez Satış (Bayi) — Harsat Mh. No: 5 (0366 313 7667 + 2 cep)
5. Tosya Üretim Tesisi — Karasapaca Kurtbeli OSB (0541 818 7667)
6. Boya Anadolu Yakası Distribütör — Ümraniye Keyap (0533 387 6756)

### Genç Boya Statüsü (Önemli)
- **Anadolu Yakası:** Distribütör
- **Avrupa Yakası:** Bayi (Anadolu Yakası distribütörlüğünün altında)
- **Tosya:** Bayi

### Çalışma Saatleri
- Pzt-Cum: 08:30-18:00
- Cmt: 08:30-15:00
- Pzr: Kapalı

---

## 🛠️ OFİS BİLGİSAYARINDA HAZIRLIK

Yarın ofis bilgisayarında:

```bash
# Proje klasörüne git
cd ~/Desktop/yigiter-com-tr  # veya nerede tutuyorsan oraya

# Son değişiklikleri çek (bu dosya dahil)
git pull origin main

# Sunucuyu başlat (opsiyonel - canlı önizleme için)
npm run dev

# Yeni bir terminal sekmesinde Claude Code aç
claude
```

Sonra Claude Code'a şunu yaz:
```
docs/DEVAM-NOTU.md dosyasını oku, sonra bana son durumu özetle ve sıradaki işe başlayalım.
```

---

## 🔗 İLGİLİ DOSYALAR

Proje klasöründe veya ofis bilgisayarında bulunabilecek referans dosyalar:
- `CLAUDE.md` — Proje anayasası
- `docs/sirket-tanimi.md` — 3 versiyon şirket tanımı
- `docs/urun-metinleri.md` — 6 ürün kategorisi metni
- `docs/subeler.md` — 6 şube detayı
- `docs/site-analiz-raporu.md` — Kapsamlı site analizi

---

**Notu hazırlayan:** Claude (Sonnet 4.6 / Opus 4.7)  
**Tarih:** 31 Mayıs 2026  
**Bu dosya GitHub'da:** docs/DEVAM-NOTU.md
