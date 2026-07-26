export type ClaimStatus =
  | 'official_source'
  | 'yigiter_confirmation_required'
  | 'remove_or_rewrite';

export type PublicationStatus = 'local' | 'metadata_only' | 'candidate';

export type ProductCategory =
  | 'raw-panel'
  | 'melamine-panel'
  | 'gloss-panel'
  | 'mat-panel'
  | 'acrylic-panel'
  | 'printed-panel'
  | 'compact-panel'
  | 'door-panel';

export interface SourceReference {
  label: string;
  url: string;
  capturedAt: string;
}

export interface ProductImage {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  sourceUrl: string;
}

export interface SurfaceSample extends ProductImage {
  code?: string;
  name: string;
  synchronized?: boolean;
  group: 'decorative-panel' | 'doorpan';
  disclaimer: string;
}

export interface CatalogDocument {
  id: string;
  title: string;
  productFamilyIds: string[];
  documentType: 'catalog' | 'guide' | 'presentation' | 'brochure';
  sourceUrl: string;
  sourcePage: string;
  year?: number;
  version: string;
  publicationStatus: PublicationStatus;
  localPath?: string;
  fileName?: string;
  fileBytes?: number;
}

export interface ProductAvailability {
  mode: 'quote_required';
  label: string;
  claimStatus: 'yigiter_confirmation_required';
}

export interface KastamonuProductFamily {
  id: string;
  officialName: string;
  displayName: string;
  category: ProductCategory;
  summary: string;
  highlights: string[];
  useCases: string[];
  source: SourceReference;
  claimStatus: 'official_source';
  availability: ProductAvailability;
  route: string;
  heroImageId?: string;
  catalogIds: string[];
}

const capturedAt = '2026-07-26';

export const officialSources = {
  decorativePanel: {
    label: 'Kastamonu Entegre — Dekoratif Panel',
    url: 'https://www.kastamonuentegre.com/tr_tr/urunler/dekoratif-panel',
    capturedAt,
  },
  rawPanel: {
    label: 'Kastamonu Entegre — MDF / Yonga Levha / Compact Panel',
    url: 'https://www.kastamonuentegre.com/tr_tr/urunler/mdf-yonga-levha',
    capturedAt,
  },
  doorPanel: {
    label: 'Kastamonu Entegre — Kapı Paneli',
    url: 'https://www.kastamonuentegre.com/tr_tr/urunler/kapi-paneli',
    capturedAt,
  },
  catalogs: {
    label: 'Kastamonu Entegre — Kataloglar',
    url: 'https://www.kastamonuentegre.com/tr_tr/kataloglar',
    capturedAt,
  },
} satisfies Record<string, SourceReference>;

export const defaultAvailability: ProductAvailability = {
  mode: 'quote_required',
  label: 'Stok, ölçü ve termin için teklif alın',
  claimStatus: 'yigiter_confirmation_required',
};

export const productImages: ProductImage[] = [
  {
    id: 'ke-img-001',
    src: '/images/products/kastamonu-entegre/dekoratif-panel/dekoratif-panel-uygulama-01.webp',
    width: 1500,
    height: 800,
    alt: 'Kastamonu Entegre dekoratif panel uygulama örneği',
    sourceUrl:
      'https://www.kastamonuentegre.com/assets/img/galeri/A609-1-1-3.jpg',
  },
  {
    id: 'ke-img-002',
    src: '/images/products/kastamonu-entegre/yongalevha/ham-yonga-levha.webp',
    width: 1000,
    height: 1000,
    alt: 'Kastamonu Entegre ham yonga levha panelleri',
    sourceUrl:
      'https://www.kastamonuentegre.com/uploads/2022/12/teknopan-yongapan-ekopan-extrapan.jpg',
  },
  {
    id: 'ke-img-003',
    src: '/images/products/kastamonu-entegre/mdf/ham-mdf-levha.webp',
    width: 1000,
    height: 1000,
    alt: 'Kastamonu Entegre ham MDF panelleri',
    sourceUrl:
      'https://www.kastamonuentegre.com/uploads/2022/12/medepan-maxipan-neopan.jpg',
  },
  {
    id: 'ke-img-004',
    src: '/images/products/kastamonu-entegre/dekoratif-panel/compact-panel-detay.webp',
    width: 1000,
    height: 1000,
    alt: 'Compact Panel levha kesit detayı',
    sourceUrl: 'https://www.kastamonuentegre.com/uploads/2023/09/cdf-detay.jpg',
  },
  {
    id: 'ke-img-005',
    src: '/images/products/kastamonu-entegre/kapi-paneli/kapi-paneli-uygulama.webp',
    width: 282,
    height: 163,
    alt: 'Kastamonu Entegre kapı paneli uygulaması',
    sourceUrl: 'https://www.kastamonuentegre.com/uploads/2023/03/kapipanel-min.jpg',
  },
  {
    id: 'ke-img-008',
    src: '/images/products/kastamonu-entegre/mdflam/medelam-carmen-uygulama.webp',
    width: 1500,
    height: 800,
    alt: 'Kastamonu Entegre Medelam dekoratif panel uygulaması',
    sourceUrl: 'https://www.kastamonuentegre.com/assets/img/galeri/A396-1-1-3.jpg',
  },
];

const surfaceDisclaimer =
  'Bu görsel bir yüzey/doku örneğidir; ekran rengi fiziksel numuneden farklı görünebilir.';

export const decorativeSurfaceSamples: SurfaceSample[] = [
  ['PS10', 'Düz', 'ps10-duz', 'duz-1.svg'],
  ['PS11', 'Natural', 'ps11-natural', 'natural-1.svg'],
  ['PS12', 'Parlak', 'ps12-parlak', 'parlak-1.svg'],
  ['PS14', 'Bute', 'ps14-bute', 'bute-1.svg'],
  ['PS16', 'Kumaş', 'ps16-kumas', 'ps16-kumasg.svg'],
  ['PS19', 'Freze', 'ps19-freze', 'ps19-freze.svg'],
  ['PS22', 'Wood', 'ps22-wood', 'wood-1.svg'],
  ['PS27', 'Charm', 'ps27-charm', 'register-1.svg', true],
  ['PS28', 'Grove', 'ps28-grove', 'emboss-1.svg', true],
  ['PS30', 'Paint', 'ps30-paint', 'paint-yuzey-svg.svg'],
  ['PS33', 'Stone', 'ps33-stone', 'stone.svg'],
  ['PS37', 'Veneer', 'ps37-veneer', 'veneer.svg'],
  ['PS60', 'Magma', 'ps60-magma', 'ps60-magma.svg'],
  ['PS72', 'Leather', 'ps72-leather', 'ps72-leather.svg'],
  ['PS73', 'Sıva', 'ps73-siva', 'ps73-siva.svg'],
  ['PS74', 'Soft Mat', 'ps74-soft-mat', 'ps74-soft-mat.svg'],
  ['PS76', 'Art', 'ps76-art', 'ps76-art.svg', true],
  ['PS77', 'Flow', 'ps77-flow', 'ps77-flow.svg'],
].map(([code, name, slug, sourceFile, synchronized]) => ({
  id: `ke-surface-${String(code).toLowerCase()}`,
  code: String(code),
  name: String(name),
  src: `/images/products/kastamonu-entegre/yuzeyler/${slug}.webp`,
  width: 512,
  height: 512,
  alt: `${code} ${name}${synchronized ? ' senkronize' : ''} yüzey örneği`,
  sourceUrl: `https://www.kastamonuentegre.com/uploads/${
    ['PS10', 'PS11', 'PS12', 'PS14', 'PS22', 'PS27', 'PS28', 'PS33', 'PS37'].includes(String(code))
      ? '2022/12'
      : code === 'PS30'
        ? '2024/11'
        : '2024/09'
  }/${sourceFile}`,
  synchronized: Boolean(synchronized),
  group: 'decorative-panel',
  disclaimer: surfaceDisclaimer,
}));

export const doorpanSurfaceSamples: SurfaceSample[] = [
  ['Maun', 'doorpan-maun', 'maun.svg'],
  ['Fantezi', 'doorpan-fantezi', 'fantezi.svg'],
  ['Modern', 'doorpan-modern', 'modern.svg'],
  ['Freze', 'doorpan-freze', 'freze.svg'],
  ['Çam', 'doorpan-cam', 'cam.svg'],
  ['Meşe', 'doorpan-mese', 'mese.svg'],
  ['Düz', 'doorpan-duz', 'duz.svg'],
].map(([name, slug, sourceFile], index) => ({
  id: `ke-door-surface-${String(index + 1).padStart(2, '0')}`,
  name,
  src: `/images/products/kastamonu-entegre/kapi-paneli/${slug}.webp`,
  width: 512,
  height: 512,
  alt: `Doorpan ${name} yüzey örneği`,
  sourceUrl: `https://www.kastamonuentegre.com/uploads/2024/12/${sourceFile}`,
  group: 'doorpan',
  disclaimer:
    'Doorpan paneller beyaz astarlıdır; örnek renklendirme yalnızca yüzey biçimini göstermek içindir.',
}));

export const catalogs: CatalogDocument[] = [
  {
    id: 'ke-pdf-001',
    title: 'Akrilik Panel Sunumu',
    productFamilyIds: ['acrylic-panel'],
    documentType: 'presentation',
    sourceUrl: 'https://www.kastamonuentegre.com/uploads/2022/12/acrylic-panel-sunum.pdf',
    sourcePage: officialSources.decorativePanel.url,
    version: 'v1',
    publicationStatus: 'metadata_only',
  },
  {
    id: 'ke-pdf-002',
    title: 'Compactlam Panel 2026 Kataloğu',
    productFamilyIds: ['compact-panel-lam'],
    documentType: 'catalog',
    sourceUrl:
      'https://www.kastamonuentegre.com/uploads/2026/02/compactlam-panel-katalog-tr-en-2026.pdf',
    sourcePage: officialSources.decorativePanel.url,
    year: 2026,
    version: 'v1',
    publicationStatus: 'local',
    localPath: '/documents/kastamonu-entegre/kastamonu-entegre-compactlam-panel-2026-v1.pdf',
    fileName: 'kastamonu-entegre-compactlam-panel-2026-v1.pdf',
    fileBytes: 1_260_102,
  },
  {
    id: 'ke-pdf-003',
    title: 'Evogloss Reflections',
    productFamilyIds: ['evogloss'],
    documentType: 'catalog',
    sourceUrl: 'https://www.kastamonuentegre.com/uploads/2025/01/evogloss-reflections-1.pdf',
    sourcePage: officialSources.decorativePanel.url,
    year: 2025,
    version: 'v1',
    publicationStatus: 'metadata_only',
  },
  {
    id: 'ke-pdf-005',
    title: 'Evogloss 2020 Kataloğu',
    productFamilyIds: ['evogloss'],
    documentType: 'catalog',
    sourceUrl: 'https://www.kastamonuentegre.com/uploads/2022/12/evogloss-2020-katalog.pdf',
    sourcePage: officialSources.decorativePanel.url,
    year: 2020,
    version: 'v1',
    publicationStatus: 'metadata_only',
  },
  {
    id: 'ke-pdf-006',
    title: 'Glossmax Pro Kataloğu',
    productFamilyIds: ['glossmax-pro'],
    documentType: 'catalog',
    sourceUrl: 'https://www.kastamonuentegre.com/uploads/2022/12/glossmax-pro-katalog.pdf',
    sourcePage: officialSources.decorativePanel.url,
    version: 'v1',
    publicationStatus: 'metadata_only',
  },
  {
    id: 'ke-pdf-007',
    title: 'Glossmax Pro Kullanım Kılavuzu',
    productFamilyIds: ['glossmax-pro'],
    documentType: 'guide',
    sourceUrl:
      'https://www.kastamonuentegre.com/uploads/2022/12/glossmax-pro-kullanim-kilavuzu-2023.pdf',
    sourcePage: officialSources.decorativePanel.url,
    year: 2023,
    version: 'v1',
    publicationStatus: 'metadata_only',
  },
  {
    id: 'ke-pdf-008',
    title: 'Glossmax Kullanım Kılavuzu',
    productFamilyIds: ['glossmax'],
    documentType: 'guide',
    sourceUrl:
      'https://www.kastamonuentegre.com/uploads/2022/12/glossmax-kullanim-kilavuzu-2023.pdf',
    sourcePage: officialSources.decorativePanel.url,
    year: 2023,
    version: 'v1',
    publicationStatus: 'metadata_only',
  },
  {
    id: 'ke-pdf-010',
    title: 'Glossmax Sunumu',
    productFamilyIds: ['glossmax'],
    documentType: 'presentation',
    sourceUrl: 'https://www.kastamonuentegre.com/uploads/2022/12/glossmax-sunum.pdf',
    sourcePage: officialSources.decorativePanel.url,
    version: 'v1',
    publicationStatus: 'metadata_only',
  },
  {
    id: 'ke-pdf-011',
    title: 'Mattplus Kataloğu',
    productFamilyIds: ['mattplus'],
    documentType: 'catalog',
    sourceUrl: 'https://www.kastamonuentegre.com/uploads/2022/12/mattplus-katalog.pdf',
    sourcePage: officialSources.decorativePanel.url,
    version: 'v1',
    publicationStatus: 'metadata_only',
  },
  {
    id: 'ke-pdf-012',
    title: 'Mattplus Kullanım Kılavuzu',
    productFamilyIds: ['mattplus'],
    documentType: 'guide',
    sourceUrl:
      'https://www.kastamonuentegre.com/uploads/2022/12/mattplus-kullanim-kilavuzu-2022.pdf',
    sourcePage: officialSources.decorativePanel.url,
    year: 2022,
    version: 'v1',
    publicationStatus: 'metadata_only',
  },
  {
    id: 'ke-pdf-014',
    title: 'Doorlam 2024 Kataloğu',
    productFamilyIds: ['doorlam'],
    documentType: 'catalog',
    sourceUrl:
      'https://www.kastamonuentegre.com/uploads/2024/12/doorlam-katalog-tr-en-2024.pdf',
    sourcePage: officialSources.doorPanel.url,
    year: 2024,
    version: 'v1',
    publicationStatus: 'local',
    localPath: '/documents/kastamonu-entegre/kastamonu-entegre-doorlam-2024-v1.pdf',
    fileName: 'kastamonu-entegre-doorlam-2024-v1.pdf',
    fileBytes: 2_956_526,
  },
  {
    id: 'ke-pdf-015',
    title: 'Doorpan Kataloğu',
    productFamilyIds: ['doorpan'],
    documentType: 'catalog',
    sourceUrl:
      'https://www.kastamonuentegre.com/uploads/2024/12/dorpan-2234-katalog-tr-en.pdf',
    sourcePage: officialSources.doorPanel.url,
    year: 2024,
    version: 'v1',
    publicationStatus: 'local',
    localPath: '/documents/kastamonu-entegre/kastamonu-entegre-doorpan-2024-v1.pdf',
    fileName: 'kastamonu-entegre-doorpan-2024-v1.pdf',
    fileBytes: 4_925_509,
  },
];

export const productFamilies: KastamonuProductFamily[] = [
  {
    id: 'raw-mdf',
    officialName: 'MDF',
    displayName: 'Ham MDF',
    category: 'raw-panel',
    summary:
      'Mobilya ve iç mekân uygulamalarında işlenebilir bir zemin sunan orta yoğunluklu lif levha.',
    highlights: ['Pürüzsüz yüzey', 'Freze ve CNC uygulamalarına uygun yapı', 'Boyama ve kaplama zemini'],
    useCases: ['Mobilya üretimi', 'Membran ve akrilik kapaklar', 'İç mekân uygulamaları'],
    source: officialSources.rawPanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/mdf/',
    heroImageId: 'ke-img-003',
    catalogIds: [],
  },
  {
    id: 'raw-particleboard',
    officialName: 'Yonga Levha',
    displayName: 'Ham Yonga Levha',
    category: 'raw-panel',
    summary:
      'Odun yongalarının reçineyle sıcaklık ve basınç altında preslenmesiyle üretilen temel panel.',
    highlights: ['Pürüzsüz yüzey', 'Kaplama uygulamalarına uygun yapı', 'Mobilya üretiminde yaygın kullanım'],
    useCases: ['Mobilya üretimi', 'İç dekorasyon', 'Kaplama uygulamaları'],
    source: officialSources.rawPanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/yongalevha/',
    heroImageId: 'ke-img-002',
    catalogIds: [],
  },
  {
    id: 'medelam',
    officialName: 'Medelam',
    displayName: 'Medelam — Melamin Kaplı MDF',
    category: 'melamine-panel',
    summary:
      'MDF levha üzerine melamin uygulanarak elde edilen, mobilya ve iç dekorasyona yönelik dekoratif panel.',
    highlights: ['Melamin kaplı MDF', 'Dekoratif hazır yüzey', 'Farklı yüzey/doku seçenekleri'],
    useCases: ['Mobilya üretimi', 'İç dekorasyon', 'Dekoratif panel uygulamaları'],
    source: officialSources.decorativePanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/mdflam/',
    heroImageId: 'ke-img-008',
    catalogIds: [],
  },
  {
    id: 'teknolam-yongalam',
    officialName: 'Teknolam / Yongalam',
    displayName: 'Teknolam / Yongalam',
    category: 'melamine-panel',
    summary:
      'Yonga levha üzerine melamin uygulanarak üretilen, mobilya ve iç dekorasyon amaçlı dekoratif panel.',
    highlights: ['Melamin kaplı yonga levha', 'Dekoratif hazır yüzey', 'Yüzey/doku seçenekleri'],
    useCases: ['Mobilya üretimi', 'İç dekorasyon', 'Dekoratif panel uygulamaları'],
    source: officialSources.decorativePanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/yongalevha/',
    heroImageId: 'ke-img-008',
    catalogIds: [],
  },
  {
    id: 'glossmax',
    officialName: 'Glossmax',
    displayName: 'Glossmax',
    category: 'gloss-panel',
    summary:
      'Melamin kaplı MDF veya yonga levha yüzeyine UV akrilik lak uygulanarak elde edilen parlak dekoratif panel.',
    highlights: ['Yüksek parlaklık', 'UV akrilik laklı yüzey', 'Kesim ve işleme odaklı yüzey yapısı'],
    useCases: ['Mobilya yüzeyleri', 'Mutfak ve banyo mobilyaları', 'İç mekân tasarımları'],
    source: officialSources.decorativePanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/dekoratif-panel/',
    heroImageId: 'ke-img-001',
    catalogIds: ['ke-pdf-008', 'ke-pdf-010'],
  },
  {
    id: 'glossmax-pro',
    officialName: 'Glossmax Pro',
    displayName: 'Glossmax Pro',
    category: 'gloss-panel',
    summary:
      'Calender Coating Inert teknolojisiyle yüzey efektleri azaltılmış, yüksek parlaklıklı dekoratif panel.',
    highlights: ['Yüksek parlaklık', 'UV akrilik laklı yüzey', 'Geliştirilmiş yüzey kalitesi'],
    useCases: ['Mobilya yüzeyleri', 'Mutfak ve banyo mobilyaları', 'İç mekân tasarımları'],
    source: officialSources.decorativePanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/dekoratif-panel/',
    heroImageId: 'ke-img-001',
    catalogIds: ['ke-pdf-006', 'ke-pdf-007'],
  },
  {
    id: 'mattplus',
    officialName: 'Mattplus',
    displayName: 'Mattplus',
    category: 'mat-panel',
    summary:
      'Melamin kaplı panel yüzeyine UV akrilik lak uygulanarak üretilen ekstra mat dekoratif panel.',
    highlights: ['Ekstra mat görünüm', 'Soft-touch hissi', 'Parmak izine karşı yüksek dayanım'],
    useCases: ['Mobilya yüzeyleri', 'Mutfak ve banyo mobilyaları', 'İç mekân tasarımları'],
    source: officialSources.decorativePanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/dekoratif-panel/',
    heroImageId: 'ke-img-001',
    catalogIds: ['ke-pdf-011', 'ke-pdf-012'],
  },
  {
    id: 'evogloss',
    officialName: 'Evogloss',
    displayName: 'Evogloss',
    category: 'gloss-panel',
    summary:
      'Parlak ve mat desenleri bir araya getiren, mikro çizilme ve solmaya karşı dayanım odaklı dekoratif yüzey.',
    highlights: ['Parlak ve mat desenler', 'Ayna etkili seçenekler', 'Kolay temizlenebilir yüzey'],
    useCases: ['Mutfak dolapları', 'Banyo dolapları', 'Dekoratif mobilya yüzeyleri'],
    source: officialSources.decorativePanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/dekoratif-panel/',
    heroImageId: 'ke-img-001',
    catalogIds: ['ke-pdf-003', 'ke-pdf-005'],
  },
  {
    id: 'acrylic-panel',
    officialName: 'Çizilmez Akrilik Panel',
    displayName: 'Çizilmeye Dayanıklı Akrilik Panel',
    category: 'acrylic-panel',
    summary:
      'MDF levhanın ön yüzüne çizilmeye karşı dayanıklı akrilik, arka yüzüne aynı renkte astar uygulanan panel.',
    highlights: ['Akrilik ön yüzey', 'Aynı renk astarlı arka yüzey', 'Parlak dekoratif görünüm'],
    useCases: ['Mobilya kapakları', 'Mutfak ve banyo mobilyaları', 'Dekoratif iç mekân yüzeyleri'],
    source: officialSources.decorativePanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/dekoratif-panel/',
    heroImageId: 'ke-img-001',
    catalogIds: ['ke-pdf-001'],
  },
  {
    id: 'industrial-acrylic-panel',
    officialName: 'Endüstriyel Akrilik Panel',
    displayName: 'Endüstriyel Akrilik Panel',
    category: 'acrylic-panel',
    summary:
      'MDF levhanın ön yüzüne akrilik, arka yüzüne ön yüzle aynı renkte dayanıklı astar uygulanarak üretilen panel.',
    highlights: ['Akrilik ön yüzey', 'Aynı renk astarlı arka yüzey', 'Dekoratif hazır panel'],
    useCases: ['Mobilya kapakları', 'Mutfak ve banyo mobilyaları', 'Dekoratif iç mekân yüzeyleri'],
    source: officialSources.decorativePanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/dekoratif-panel/',
    heroImageId: 'ke-img-001',
    catalogIds: [],
  },
  {
    id: 'printpan',
    officialName: 'Printpan',
    displayName: 'Printpan',
    category: 'printed-panel',
    summary:
      'Panel yüzeylerinin su bazlı boyayla düz veya ahşap dekorlarda boyanmasıyla elde edilen ürün ailesi.',
    highlights: ['Su bazlı boya sistemi', 'Tek veya çift yüz uygulaması', 'Dekor uyumluluğu'],
    useCases: ['Mobilya arka panelleri', 'Çekmece zeminleri', 'Kapı paneli ve baza içleri'],
    source: officialSources.decorativePanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/dekoratif-panel/',
    heroImageId: 'ke-img-001',
    catalogIds: [],
  },
  {
    id: 'compact-panel-lam',
    officialName: 'Compact Panel Lam',
    displayName: 'Compact Panel Lam',
    category: 'compact-panel',
    summary:
      'Yoğun ortak kullanım alanlarında dekoratif uygulamalara yönelik melamin kaplı compact panel.',
    highlights: ['Homojen siyah lif yapısı', 'CNC ve freze uygulamalarına uygunluk', 'Dekoratif melamin yüzey'],
    useCases: ['Okullar', 'Hastaneler', 'Kabina/kubikal uygulamaları', 'Alışveriş merkezleri'],
    source: officialSources.decorativePanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/dekoratif-panel/',
    heroImageId: 'ke-img-004',
    catalogIds: ['ke-pdf-002'],
  },
  {
    id: 'doorpan',
    officialName: 'Doorpan Door Panel',
    displayName: 'Doorpan',
    category: 'door-panel',
    summary:
      'Ev ve ofis iç kapıları için beyaz astarlı, şekilli ve düz yüzey aileleri sunan kapı paneli.',
    highlights: ['16 şekilli ve 3 düz yüzey', '7 yüzey ailesi', 'Beyaz astarlı panel'],
    useCases: ['Ev iç kapıları', 'Ofis iç kapıları'],
    source: officialSources.doorPanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/kapi-paneli/',
    heroImageId: 'ke-img-005',
    catalogIds: ['ke-pdf-015'],
  },
  {
    id: 'doorlam',
    officialName: 'Doorlam Door Panel',
    displayName: 'Doorlam',
    category: 'door-panel',
    summary:
      '4 mm MDF üzerine dekoratif kâğıt kaplanan, ek boya veya cila işlemi gerektirmeyen hazır kapı paneli.',
    highlights: ['4 mm MDF taşıyıcı', '7 dekor', 'Kullanıma hazır dekoratif yüzey'],
    useCases: ['Ev iç kapıları', 'Ofis iç kapıları'],
    source: officialSources.doorPanel,
    claimStatus: 'official_source',
    availability: defaultAvailability,
    route: '/urunler/kastamonu-entegre/kapi-paneli/',
    heroImageId: 'ke-img-005',
    catalogIds: ['ke-pdf-014'],
  },
];

export const productImagesById = new Map(productImages.map((image) => [image.id, image]));
export const catalogsById = new Map(catalogs.map((catalog) => [catalog.id, catalog]));
export const productFamiliesById = new Map(productFamilies.map((product) => [product.id, product]));

export const localCatalogs = catalogs.filter(
  (catalog): catalog is CatalogDocument & { localPath: string } =>
    catalog.publicationStatus === 'local' && Boolean(catalog.localPath),
);

export function getProductCatalogs(product: KastamonuProductFamily) {
  return product.catalogIds
    .map((catalogId) => catalogsById.get(catalogId))
    .filter((catalog): catalog is CatalogDocument => Boolean(catalog));
}
