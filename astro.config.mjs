// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yigiter.com.tr',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => ![
        'https://yigiter.com.tr/get-a-quote/',
        'https://yigiter.com.tr/quote/',
        'https://yigiter.com.tr/iletisim/teklif-al/',
        'https://yigiter.com.tr/product-catalog/',
        'https://yigiter.com.tr/products/',
      ].includes(page),
      i18n: {
        defaultLocale: 'tr',
        locales: { tr: 'tr-TR' },
      },
    }),
  ],
});
