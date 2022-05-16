import { components } from './components/index.js'

export const createUi = () => {
  const install = (app) => {
    components.forEach((component) => {
      app.component(component.name, component.component)
    })
  }

  return { install }
}
