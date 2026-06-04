// @ts-check
import os from 'node:os';
import path from 'node:path';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// This project lives inside a Dropbox folder. On Windows, Dropbox (and Defender)
// lock Vite's rapidly-renamed dependency cache, causing EBUSY during builds.
// Keep that cache outside the synced tree on Windows. CI (Linux) uses the
// default — it builds from a clean, un-synced checkout.
const cacheDir =
  process.env.VITE_CACHE_DIR ||
  (process.platform === 'win32'
    ? path.join(os.tmpdir(), 'vite-ristlin')
    : undefined);

// https://astro.build/config
export default defineConfig({
  site: 'https://yuselajiminmuhip.com',

  vite: {
    plugins: [tailwindcss()],
    cacheDir,
  },

  integrations: [mdx(), sitemap()],
});
