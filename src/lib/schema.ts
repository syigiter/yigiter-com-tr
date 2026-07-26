// SEO structured-data helpers (JSON-LD).
// Product + BreadcrumbList builders for the Yiğiter product catalog.
// B2B quote-based catalog: Product offers/price intentionally omitted
// (no listed price => not rich-result eligible by design, still aids
// entity understanding for Search + AI/LLM retrieval).

const SITE = 'https://www.yigiter.com.tr';
const ORG_ID = `${SITE}/#organization`;

// URL slug -> human breadcrumb label (Turkish, matches page H1s / brand casing)
const SLUG_LABELS: Record<string, string> = {
  urunler: 'Ürünler',
  'kastamonu-entegre': 'Kastamonu Entegre',
  'kapi-komponentleri': 'Kapı Komponentleri',
  'kapi-imalat-malzemeleri': 'Kapı İmalat Malzemeleri',
  'kapi-pervazi': 'Kapı Pervazı',
  'kapi-kasasi': 'Kapı Kasası',
  'kapi-paneli': 'Kapı Paneli',
  mdf: 'MDF',
  mdflam: 'MDFLam',
  yongalevha: 'Yonga Levha',
  'melamin-kapi-yuzeyi': 'Melamin Kapı Yüzeyi',
  'genc-boya': 'Genç Boya',
  'pvc-film': 'PVC Film',
  'kagit-dolgu': 'Kağıt Dolgu',
};

export function labelForSlug(slug: string): string {
  return SLUG_LABELS[slug] ?? slug;
}

/** Build a BreadcrumbList from a pathname like /urunler/kastamonu-entegre/mdf/ */
export function breadcrumbFromPath(pathname: string) {
  const segments = pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  const items = [{ name: 'Ana Sayfa', url: `${SITE}/` }];
  let acc = '';
  for (const seg of segments) {
    acc += `/${seg}`;
    items.push({ name: labelForSlug(seg), url: `${SITE}${acc}/` });
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export interface ProductInput {
  /** Short product name, e.g. "Kapı Pervazı" */
  name: string;
  description: string;
  /** Site-relative path with trailing slash, e.g. "/urunler/kapi-pervazi/" */
  url: string;
  category?: string;
  /** Site-relative image path, e.g. "/images/products/pervaz/..." */
  image?: string;
  /** Third-party brand (Kastamonu Entegre, Genç Boya) for dealer/distributed products */
  brandName?: string;
  /** true for products Yiğiter manufactures in-house (kasa, pervaz) */
  manufacturedByYigiter?: boolean;
}

export function buildProduct(p: ProductInput) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    url: `${SITE}${p.url}`,
  };
  if (p.category) schema.category = p.category;
  if (p.image) schema.image = `${SITE}${p.image}`;
  if (p.brandName) schema.brand = { '@type': 'Brand', name: p.brandName };
  if (p.manufacturedByYigiter) schema.manufacturer = { '@id': ORG_ID };
  return schema;
}
