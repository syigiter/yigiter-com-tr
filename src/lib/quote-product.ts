export const QUOTE_PRODUCT_GROUPS = {
  kastamonuPanels: 'Kastamonu Entegre panel ürünleri',
  kastamonuDecorative: 'Kastamonu Entegre dekoratif panel',
  doorPanel: 'Kapı paneli',
  mdfLam: 'MDFLam',
  mdf: 'MDF',
  particleboard: 'Yonga levha',
} as const;

const decorativePanelTerms = [
  'dekoratif panel',
  'glossmax',
  'mattplus',
  'evogloss',
  'akrilik panel',
  'acrylic panel',
  'printpan',
  'compact panel',
  'compactlam',
];

export function mapQuoteProductGroup(product: string): string {
  const lower = product.toLocaleLowerCase('tr-TR');

  if (lower.includes('komponent') || lower === 'interior-door-components') return 'Kapı komponentleri';
  if (lower.includes('kasa')) return 'Kapı kasası';
  if (lower.includes('pervaz')) return 'Kapı pervazı';
  if (lower.includes('pvc')) return 'PVC film';
  if (
    lower.includes('doorpan') ||
    lower.includes('doorlam') ||
    ((lower.includes('kapı') || lower.includes('kapi')) && lower.includes('panel'))
  ) return QUOTE_PRODUCT_GROUPS.doorPanel;
  if (decorativePanelTerms.some((term) => lower.includes(term))) {
    return QUOTE_PRODUCT_GROUPS.kastamonuDecorative;
  }
  if (lower.includes('mdflam') || lower.includes('medelam')) return QUOTE_PRODUCT_GROUPS.mdfLam;
  if (
    lower.includes('yonga') ||
    lower.includes('sunta') ||
    lower.includes('teknolam') ||
    lower.includes('yongalam')
  ) return QUOTE_PRODUCT_GROUPS.particleboard;
  if (lower.includes('mdf')) return QUOTE_PRODUCT_GROUPS.mdf;
  if (
    lower.includes('kastamonu') &&
    (lower.includes('panel ürün') || lower.includes('güncel katalog'))
  ) return QUOTE_PRODUCT_GROUPS.kastamonuPanels;
  if (lower.includes('melamin') && (lower.includes('kapı') || lower.includes('yüzey'))) {
    return 'Melamin kapı yüzeyi';
  }
  if (lower.includes('boya') || lower.includes('yüzey')) return 'Boya ve yüzey çözümleri';
  return '';
}
