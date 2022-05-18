import App from './App.vue'
import { createUi } from '@baldeweg/ui'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import router from './router'
import '@baldeweg/ui/styles'

const ui = createUi()
const i18n = createI18n()
const app = createApp(App)

app.use(ui)
app.use(i18n)
app.use(router)

app.mount('#app')
