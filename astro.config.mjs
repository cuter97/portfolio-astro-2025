// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  integrations: [react(), icon(), mdx(), sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        es: 'es-ES',
        en: 'en-US'
      }
    }
  })],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  site: 'http://localhost:4321',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});