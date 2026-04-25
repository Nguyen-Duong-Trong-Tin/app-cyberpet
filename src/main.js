import { createApp } from 'vue';
import App from './App.vue';

import UserList from './pages/UserList.vue';
import PetList from './pages/PetList.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store';

const routes = [
  // { path: '/', redirect: '/users' },
  { path: '/users', component: UserList, alias: '/' },
  { path: '/pets', component: PetList }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
