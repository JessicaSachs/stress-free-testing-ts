import { createApp } from 'vue'
import { createRouter } from './router'
import App from './App.vue'

// Environment setup
import './main.scss'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

createApp(App).use(createRouter()).mount('#app')
