import { createRouter, createWebHistory } from "vue-router";

import PetList from "./pages/PetList.vue";
import UserList from "./pages/UserList.vue";
import UserDetail from "./pages/UserDetail.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  // { path: '/', redirect: '/users' },
  { path: '/users', component: UserList, alias: '/' },
  { path: '/user-detail', component: UserDetail },
  { path: '/pets', component: PetList },
  { path: '/:pathMatch(.*)*', component: NotFound },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
