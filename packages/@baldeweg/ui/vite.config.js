/* eslint-disable no-undef */
import { fileURLToPath, URL } from 'url'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    dedupe: [
      'vue',
      ViteWebfontDownload([
        'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
      ]),
    ],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/ui.js'),
      name: 'ui',
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  envPrefix: ['VITE_'],
})
