// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://maticstric.github.io',
  base: '/nejc-petric-website',
  vite: {
    plugins: [tailwindcss()]
  }
});