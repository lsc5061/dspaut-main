// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000, // Explicitly set to 3000 to prevent port collision with the sub-website (port 4321)
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
