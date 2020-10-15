import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router";

const AppRoutes = createApp(App)

AppRoutes.use(router)
AppRoutes.mount('#app')
