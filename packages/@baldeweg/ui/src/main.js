import { createApp } from 'vue'
import App from './App.vue'
import { createUi } from './ui.js'
import router from './router'
import { createHead } from '@unhead/vue'

const ui = createUi()
const app = createApp(App)
const head = createHead()

app.use(ui)
app.use(router)
app.use(head)

app.mount('#app')
