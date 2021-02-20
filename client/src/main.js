import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js";
createApp(App).use(router).use(store).mount('#app')