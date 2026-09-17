import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        theme1: resolve(__dirname, 'theme-1/index.html'),
        theme2: resolve(__dirname, 'theme-2/index.html'),
        theme3: resolve(__dirname, 'theme-3/index.html'),
      },
    },
  },
});
