import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: '@baldeweg/web-demo',
        short_name: 'web-demo',
        description: 'This is a demo app.',
        theme_color: '#d7621d',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
    ]),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    dedupe: ['vue'],
  },
  envPrefix: ['VITE_', 'VUE_APP_'],
})
