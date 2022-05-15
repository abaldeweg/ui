import App from './App.vue'
import { createUi } from 'ui'
import { createApp } from 'vue'
import router from './router'
import './../node_modules/ui/dist/style.css'

const app = createApp(App)
const ui = createUi()

app.use(ui)
app.use(router)

app.mount('#app')
