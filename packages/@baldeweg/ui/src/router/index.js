import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index.vue'),
    },
    {
      path: '/global',
      name: 'global',
      component: () => import('../views/BGlobal.vue'),
    },
    {
      path: '/masthead',
      name: 'masthead',
      component: () => import('../views/BMasthead.vue'),
    },
    {
      path: '/bottom-nav',
      name: 'bottom-nav',
      component: () => import('../views/BBottomNav.vue'),
    },
    {
      path: '/divider',
      name: 'divider',
      component: () => import('../views/BDivider.vue'),
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('../views/BCode.vue'),
    },
    {
      path: '/container',
      name: 'container',
      component: () => import('../views/BContainer.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/BSearch.vue'),
    },
    {
      path: '/spinner',
      name: 'spinner',
      component: () => import('../views/BSpinner.vue'),
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('../views/BIcon.vue'),
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../views/BTable.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/BForm.vue'),
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('../views/BButton.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/BCard.vue'),
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('../views/BComment.vue'),
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: () => import('../views/BDrawer.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/BList.vue'),
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('../views/BDropdown.vue'),
    },
    {
      path: '/switch',
      name: 'switch',
      component: () => import('../views/BSwitch.vue'),
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('../views/BModal.vue'),
    },
    {
      path: '/scroll-to-bottom',
      name: 'scrollToBottom',
      component: () => import('../views/BScrollToBottom.vue'),
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('../views/BTooltip.vue'),
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: () => import('../views/BTabs.vue'),
    },
    {
      path: '/horizontal-list',
      name: 'horizontalList',
      component: () => import('../views/BHorizontalList.vue'),
    },
    {
      path: '/toast',
      name: 'toast',
      component: () => import('../views/BToast.vue'),
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('../views/BAlert.vue'),
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('../views/BDialog.vue'),
    },
    {
      path: '/chip',
      name: 'chip',
      component: () => import('../views/BChip.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/BUpload.vue'),
    },
    {
      path: '/badge',
      name: 'badge',
      component: () => import('../views/BBadge.vue'),
    },
    {
      path: '/subheader',
      name: 'subheader',
      component: () => import('../views/BSubheader.vue'),
    },
    {
      path: '/flex',
      name: 'flex',
      component: () => import('../views/BFlex.vue'),
    },
  ],
})

export default router
