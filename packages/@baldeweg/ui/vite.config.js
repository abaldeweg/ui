/* eslint-disable no-undef */
import { fileURLToPath, URL } from 'url'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
    ]),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    dedupe: ['vue'],
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
