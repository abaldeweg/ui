import App from './App.vue'
import { createUi } from '@baldeweg/ui'
import { createApp } from 'vue'
import router from './router'
import '@baldeweg/ui/styles'

const app = createApp(App)
const ui = createUi()

app.use(ui)
app.use(router)

app.mount('#app')
