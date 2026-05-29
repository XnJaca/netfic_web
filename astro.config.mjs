// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Astro 5: páginas estáticas por default, solo el endpoint /api/contact
  // (con `export const prerender = false`) corre como serverless function en Vercel.
  output: 'static',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['alpinejs']
    }
  }
});
