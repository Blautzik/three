import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        otra: resolve(__dirname, 'pages/otra.html'),
        otra2: resolve(__dirname, 'pages/otra2.html'),
      },
    },
  },
})