import { resolve } from 'path';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        otra: resolve('/otra.html'),
        main: resolve(__dirname, 'index.html'),

        // aboutjs: resolve(__dirname, 'about.js')
      },
    },
  },
});




