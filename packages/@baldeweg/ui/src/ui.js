import { defineAsyncComponent } from 'vue'
import components from './components.json'

export const createUi = () => {
  const install = (app) => {
    components.forEach(component => {
      app.component(
        "B" + component.name,
        defineAsyncComponent(() => import(`./components/B${component.directory}/B${component.name}.vue`))
      )
    })
  }

  return { install }
}

export * from './composables.js'
