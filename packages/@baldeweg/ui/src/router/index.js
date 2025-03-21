import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'isActive',
  linkExactActiveClass: 'isActiveExact',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'component', params: { component: 'Alert' } }

    },
    {
      path: '/:component?',
      name: 'component',
      component: () => import('../views/ComponentView.vue'),
      props: (route) => ({ component: route.params.component || 'Alert' }),
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
