import AppComponent from '@/components/AppComponent.vue'

export const createAdmin = () => {
  const install = (app) => {
    app.component("AppComponent", AppComponent)
  }

  return { install }
}
