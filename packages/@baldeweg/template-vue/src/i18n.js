import { createI18n } from 'vue-i18n'
import en from '@/../locales/en.json'
import de from '@/../locales/de.json'

export default createI18n({
  legacy: false,
  locale: navigator.language,
  fallbackLocale: 'en',
  allowComposition: true,
  messages: {
    en,
    de,
  },
})
