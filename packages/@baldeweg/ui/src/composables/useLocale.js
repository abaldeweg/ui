import { ref, watchEffect } from 'vue'

export function useLocale() {
  const locale = ref(navigator.language)

  watchEffect(() => {
    document.documentElement.setAttribute('lang', locale.value)
  })

  return { locale }
}
