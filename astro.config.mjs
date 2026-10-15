// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://netficsolutions.com',
  // Astro 5: páginas estáticas por default, solo el endpoint /api/contact
  // (con `export const prerender = false`) corre como serverless function en Vercel.
  output: 'static',
  adapter: vercel(),
  // Muchas herramientas buscan /sitemap.xml; la integración genera sitemap-index.xml.
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/api/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['alpinejs']
    }
  }
});
