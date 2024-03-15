import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

createApp(App).use(router).mount('#app');

// vue devtools 확장앱 설정
app.config.performance = true;

import 'bootstrap/dist/js/bootstrap.js';
