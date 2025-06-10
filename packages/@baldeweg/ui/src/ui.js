import * as components from './components/index.ts'

export const createUi = (options = {}) => {
  const install = (app) => {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
    app.provide('b-options', options)
  }

  return { install }
}
