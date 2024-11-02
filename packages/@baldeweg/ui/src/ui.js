import { defineAsyncComponent } from 'vue'
import components from './components/components.json'

export const createUi = () => {
  const install = (app, options) => {
    components.forEach(component => {
      app.component(
        "B" + component.name,
        defineAsyncComponent(() => import(`./components/B${component.directory}/B${component.name}.vue`))
      )

      app.provide("ui", options)
    })
  }

  return { install }
}
