import { createApp } from 'vue'
import App from './App'
import router from './router/index'
import './assets/styles/index.scss'

createApp(App).use(router).mount('#app')
