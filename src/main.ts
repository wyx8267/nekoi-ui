import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router';
import Nekoi from './components/Nekoi.vue';
import Nekoi2 from './components/Nekoi2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Nekoi },
    { path: '/xxx', component: Nekoi2 }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
