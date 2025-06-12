// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

import playformCompress from '@playform/compress';

import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap(), playformCompress(), compressor()],

  adapter: node({
    mode: 'standalone',
  }),
});