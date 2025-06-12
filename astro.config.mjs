// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

import playformCompress from '@playform/compress';

import compressor from 'astro-compressor';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  site: 'https://jstmemit.com',
  integrations: [react(), sitemap(), playformCompress(), compressor(), robotsTxt()],

  adapter: node({
    mode: 'standalone',
  }),
});