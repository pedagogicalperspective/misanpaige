import { defineConfig } from 'vite';
export default defineConfig({
  base: '/misanpaige/',
  build: { outDir: 'dist', target: 'es2022' }
});
