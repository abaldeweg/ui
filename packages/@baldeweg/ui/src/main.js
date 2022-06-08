import { createApp } from 'vue'
import App from './App.vue'
import { createUi } from './ui.js'
import router from './router'

const ui = createUi()
const app = createApp(App)

app.use(ui)
app.use(router)

app.mount('#app')
