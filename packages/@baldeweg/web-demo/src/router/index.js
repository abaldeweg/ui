import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: '',
  linkExactActiveClass: '',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      redirect: { name: 'index' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
