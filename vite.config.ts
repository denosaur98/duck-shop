import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  root: './src',
  build: {
    outDir: '../output',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
  },
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  }
})