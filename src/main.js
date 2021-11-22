import { createApp } from 'vue'
import { createRouter } from './router'
import { createPinia } from './store'
import App from './App.vue'

// Environment setup
import './main.scss'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

createApp(App).use(createPinia()).use(createRouter()).mount('#app')
