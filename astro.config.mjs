// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.yigiter.com.tr',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => ![
        'https://www.yigiter.com.tr/get-a-quote/',
        'https://www.yigiter.com.tr/quote/',
        'https://www.yigiter.com.tr/iletisim/teklif-al/',
        'https://www.yigiter.com.tr/product-catalog/',
        'https://www.yigiter.com.tr/products/',
      ].includes(page),
      i18n: {
        defaultLocale: 'tr',
        locales: { tr: 'tr-TR' },
      },
    }),
  ],
});
