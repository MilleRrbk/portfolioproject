import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the Vue Router instance

createApp(App)
  .use(router) // Use the Vue Router instance
  .mount('#app')
