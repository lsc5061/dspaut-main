// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.dspaut.com',
  srcDir: './Main_Source',
  publicDir: './Main_Images',
  output: 'static', // 🚨 안정성 개선 3번: 정적 빌드 강제 (Cloudflare 404 크래시 사전 차단)
  server: {
    port: 3000, // Explicitly set to 3000 to prevent port collision with the sub-website (port 4321)
  },
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ['**/*.glb', '**/*.gltf']
  },
  integrations: [sitemap(), react()],
});
