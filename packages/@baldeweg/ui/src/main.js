import { createApp } from 'vue'
import App from './App.vue'
import { createUi } from './ui.js'
import { createAdmin } from './admin.js'
import router from './router'
import { createHead } from '@unhead/vue'

const ui = createUi()
const admin = createAdmin()
const app = createApp(App)
const head = createHead()

app.use(ui)
app.use(admin)
app.use(router)
app.use(head)

app.mount('#app')
