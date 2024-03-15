import { createApp } from 'vue'
import App from './App.vue'
import './scss/_main.scss'
import router from './router'
import 'bootstrap' // ←

createApp(App).use(router).mount('#app')
