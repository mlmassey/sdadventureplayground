// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL / BASE_PATH are injected by the GitHub Pages workflow (actions/configure-pages),
// so the build is correct both on https://<user>.github.io/<repo>/ and on the custom domain.
// Locally they default to the production domain served from the root.
const site = process.env.SITE_URL || 'https://sdadventureplayground.org';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
