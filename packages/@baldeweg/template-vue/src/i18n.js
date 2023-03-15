import { createI18n } from 'vue-i18n'

const modules = import.meta.glob('./../locales/*.json')

const getName = (data) => {
  return data.replace(/..\/locales\/(.*).json/, '$1')
}

const messages = {}
for (const path in modules) {
  modules[path]().then((mod) => {
    messages[getName(path)] = mod
  })
}

export default createI18n({
  legacy: false,
  locale: navigator.language,
  fallbackLocale: 'en',
  allowComposition: true,
  messages,
})
