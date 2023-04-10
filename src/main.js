import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

createApp(App).use(router).use(VueSplide).mount('#app')
