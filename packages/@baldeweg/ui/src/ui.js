import { components } from './components/index.js'
import { useTheme } from './composables/useTheme.js'
import { useTitle } from './composables/useTitle.js'
import { useToast } from './composables/useToast.js'
import { useLocale } from './composables/useLocale.js'

export const createUi = () => {
  const install = (app) => {
    components.forEach((component) => {
      app.component(component.name, component.component)
    })
  }

  return { install }
}

export { useTheme, useTitle, useToast, useLocale }
