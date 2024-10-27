import { ref, watchEffect } from 'vue'

const globalLocale = ref(navigator.language)

export function useLocale() {
  const locale = ref(globalLocale.value)

  watchEffect(() => {
    document.documentElement.setAttribute('lang', locale.value)
  })

  return { globalLocale, locale }
}
