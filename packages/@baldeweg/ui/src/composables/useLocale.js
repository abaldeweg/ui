import { ref, watchEffect } from 'vue'

export function useLocale() {
  const locale = ref(import.meta.env.VUE_APP_LOCALE ?? 'en-US')

  watchEffect(() => {
    document.documentElement.setAttribute('lang', locale.value)
  })

  return { locale }
}
