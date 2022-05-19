import { createI18n } from 'vue-i18n'
import en_US from './../locales/en-US.json'
import de_DE from './../locales/de-DE.json'

export default createI18n({
  locale: import.meta.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en-US',
  messages: {
    'en-US': en_US,
    'de-DE': de_DE,
  },
})
