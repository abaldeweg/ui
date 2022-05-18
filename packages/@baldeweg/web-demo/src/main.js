import App from './App.vue'
import { createUi } from '@baldeweg/ui'
import { createApp } from 'vue'
import router from './router'
import i18n from './i18n.js'
import '@baldeweg/ui/styles'

const ui = createUi()
const app = createApp(App)

app.use(ui)
app.use(i18n)
app.use(router)

app.mount('#app')
