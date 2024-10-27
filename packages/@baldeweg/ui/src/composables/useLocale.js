import { ref, watchEffect } from 'vue'

const globalLocale = ref(navigator.language)

/**
 * Provides a reactive locale and updates the document language accordingly.
 *
 * @returns {object} An object containing the globalLocale and locale refs.
 *
 * @example
 * import { useLocale } from '@baldeweg/ui';
 *
 * const { globalLocale, locale } = useLocale();
 *
 * locale.value = 'de-DE';
 */
export function useLocale() {
  const locale = ref(globalLocale.value)

  watchEffect(() => {
    document.documentElement.setAttribute('lang', locale.value)
  })

  return { globalLocale, locale }
}
