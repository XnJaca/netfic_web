// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // Astro 5: páginas estáticas por default, solo el endpoint /api/contact
  // (con `export const prerender = false`) corre como server via Node adapter.
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['alpinejs']
    }
  }
});
