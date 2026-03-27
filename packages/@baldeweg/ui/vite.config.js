/* eslint-disable no-undef */
import { fileURLToPath, URL } from 'url'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    ...(command === 'serve'
      ? [
        ViteWebfontDownload([
          'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
          'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300&display=swap'
        ]),
      ]
      : []),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/ui.js'),
      name: 'ui',
      formats: ['es'],
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
    },
  },
  test: {
    environment: 'jsdom'
  },
}))
