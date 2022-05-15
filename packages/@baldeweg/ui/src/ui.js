import { components } from './components/index.js'
import { init as theme } from './services/theme'
import { kebabCase } from 'lodash'

export const createUi = () => {
  const install = (app) => {
    theme()

    components.forEach((component) => {
      app.component(component.name, component.component)
      app.component(kebabCase(component.name), component.component)
    })
  }

  return { install }
}
