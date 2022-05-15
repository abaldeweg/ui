import App from './App.vue'
import { createUi } from './ui.js'
import { createApp } from 'vue'
import router from './router'

const app = createApp(App)
const ui = createUi()

app.use(ui)
app.use(router)

app.mount('#app')
