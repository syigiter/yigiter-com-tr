import { track } from '@vercel/analytics';

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

type ConversionProperties = {
  page?: string;
  destination?: string;
  product?: string;
  catalog?: string;
  placement?: string;
  productGroup?: string;
};

function clarityEventName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

/**
 * Vercel keeps the hook upgrade-ready; Clarity is the active custom-event
 * destination while the Vercel team remains on the Hobby plan.
 */
export function trackConversion(name: string, properties: ConversionProperties = {}) {
  track(name, properties);

  const clarityName = clarityEventName(name);
  window.clarity?.('event', clarityName);
  window.clarity?.('set', 'conversion_event', clarityName);

  const clarityTags = {
    conversion_product: properties.product ?? properties.productGroup,
    conversion_catalog: properties.catalog,
    conversion_placement: properties.placement,
  };
  Object.entries(clarityTags).forEach(([key, value]) => {
    if (value) window.clarity?.('set', key, value.slice(0, 255));
  });
}
