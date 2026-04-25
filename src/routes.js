import { createRouter, createWebHistory } from "vue-router";

import PetList from "./pages/PetList.vue";
import UserList from "./pages/UserList.vue";
import UserDetail from "./pages/UserDetail.vue";

const routes = [
  // { path: '/', redirect: '/users' },
  { path: '/users', component: UserList, alias: '/' },
  { path: '/user-detail', component: UserDetail },
  { path: '/pets', component: PetList },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
