import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      ViteWebfontDownload([
        'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
      ]),
    ],
    base: env.VITE_BASE_URL,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      dedupe: ['vue'],
    },
  }
})
