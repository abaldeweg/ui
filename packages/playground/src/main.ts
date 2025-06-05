import { createUi } from '@baldeweg/ui'
import '@baldeweg/ui/styles'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const ui = createUi()
const app = createApp(App)

app.use(ui)
app.use(router)

app.mount('#app')
