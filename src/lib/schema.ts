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
  'dekoratif-panel': 'Dekoratif Panel',
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
  /** true when Yiğiter is the B2B seller; price remains quote-based */
  soldByYigiter?: boolean;
}

function absoluteUrl(path: string) {
  return path.startsWith('http') ? path : `${SITE}${path}`;
}

function productEntity(p: ProductInput) {
  const schema: Record<string, unknown> = {
    '@type': 'Product',
    name: p.name,
    description: p.description,
    url: absoluteUrl(p.url),
  };
  if (p.category) schema.category = p.category;
  if (p.image) schema.image = absoluteUrl(p.image);
  if (p.brandName) schema.brand = { '@type': 'Brand', name: p.brandName };
  if (p.manufacturedByYigiter) schema.manufacturer = { '@id': ORG_ID };
  if (p.soldByYigiter) {
    schema.offers = {
      '@type': 'Offer',
      url: absoluteUrl(p.url),
      seller: { '@id': ORG_ID },
    };
  }
  return schema;
}

export function buildProduct(p: ProductInput) {
  return {
    '@context': 'https://schema.org',
    ...productEntity(p),
  };
}

export interface ProductGroupInput extends Omit<ProductInput, 'manufacturedByYigiter'> {
  productGroupID: string;
  variants: ProductInput[];
}

export function buildProductGroup(group: ProductGroupInput) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ProductGroup',
    name: group.name,
    description: group.description,
    url: absoluteUrl(group.url),
    productGroupID: group.productGroupID,
    hasVariant: group.variants.map((variant) =>
      productEntity({
        ...variant,
        brandName: variant.brandName ?? group.brandName,
        soldByYigiter: variant.soldByYigiter ?? group.soldByYigiter,
      }),
    ),
  };
  if (group.category) schema.category = group.category;
  if (group.image) schema.image = absoluteUrl(group.image);
  if (group.brandName) schema.brand = { '@type': 'Brand', name: group.brandName };
  if (group.soldByYigiter) {
    schema.offers = {
      '@type': 'Offer',
      url: absoluteUrl(group.url),
      seller: { '@id': ORG_ID },
    };
  }
  return schema;
}

export interface CollectionItemInput {
  name: string;
  description: string;
  url: string;
  image?: string;
  type?: 'Product' | 'ProductGroup';
}

export interface CollectionPageInput {
  name: string;
  description: string;
  url: string;
  items: CollectionItemInput[];
}

/** Build linked CollectionPage + ItemList nodes for a product-family landing page. */
export function buildCollectionPage(input: CollectionPageInput) {
  const pageUrl = absoluteUrl(input.url);
  const listId = `${pageUrl}#item-list`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: input.name,
      description: input.description,
      publisher: { '@id': ORG_ID },
      mainEntity: { '@id': listId },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': listId,
      name: `${input.name} ürün listesi`,
      numberOfItems: input.items.length,
      itemListElement: input.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': item.type ?? 'ProductGroup',
          name: item.name,
          description: item.description,
          url: absoluteUrl(item.url),
          ...(item.image ? { image: absoluteUrl(item.image) } : {}),
          brand: { '@type': 'Brand', name: 'Kastamonu Entegre' },
        },
      })),
    },
  ];
}

export interface LocalBusinessInput {
  /** unique fragment for @id, e.g. "genc-boya-anadolu" */
  idFragment: string;
  name: string;
  telephone: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  /** page path the node lives on, e.g. "/urunler/genc-boya/" */
  url: string;
}

export function buildLocalBusiness(b: LocalBusinessInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE}${b.url}#${b.idFragment}`,
    name: b.name,
    telephone: b.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.streetAddress,
      addressLocality: b.addressLocality,
      addressRegion: b.addressRegion ?? 'İstanbul',
      addressCountry: 'TR',
    },
    parentOrganization: { '@id': ORG_ID },
  };
}
