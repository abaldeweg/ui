import * as components from './components/index.ts'

export const createUi = () => {
  const install = (app) => {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }

  return { install }
}
