import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'isActive',
  linkExactActiveClass: 'isActiveExact',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/IndexView.vue'),
    },
    {
      path: '/global',
      name: 'global',
      component: () => import('../views/BGlobalView.vue'),
    },
    {
      path: '/masthead',
      name: 'masthead',
      component: () => import('../views/BMastheadView.vue'),
    },
    {
      path: '/material-icon',
      name: 'material-icon',
      component: () => import('../views/BMaterialIconView.vue'),
    },
    {
      path: '/bottom-nav',
      name: 'bottom-nav',
      component: () => import('../views/BBottomNavView.vue'),
    },
    {
      path: '/divider',
      name: 'divider',
      component: () => import('../views/BDividerView.vue'),
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('../views/BCodeView.vue'),
    },
    {
      path: '/container',
      name: 'container',
      component: () => import('../views/BContainerView.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/BSearchView.vue'),
    },
    {
      path: '/spinner',
      name: 'spinner',
      component: () => import('../views/BSpinnerView.vue'),
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('../views/BIconView.vue'),
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../views/BTableView.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/BFormView.vue'),
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('../views/BButtonView.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/BCardView.vue'),
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('../views/BCommentView.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/BListView.vue'),
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('../views/BDropdownView.vue'),
    },
    {
      path: '/switch',
      name: 'switch',
      component: () => import('../views/BSwitchView.vue'),
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('../views/BModalView.vue'),
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('../views/BTooltipView.vue'),
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: () => import('../views/BTabsView.vue'),
    },
    {
      path: '/slider',
      name: 'slider',
      component: () => import('../views/BSliderView.vue'),
    },
    {
      path: '/toast',
      name: 'toast',
      component: () => import('../views/BToastView.vue'),
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('../views/BAlertView.vue'),
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('../views/BDialogView.vue'),
    },
    {
      path: '/chip',
      name: 'chip',
      component: () => import('../views/BChipView.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/BUploadView.vue'),
    },
    {
      path: '/badge',
      name: 'badge',
      component: () => import('../views/BBadgeView.vue'),
    },
    {
      path: '/subheader',
      name: 'subheader',
      component: () => import('../views/BSubheaderView.vue'),
    },
    {
      path: '/flex',
      name: 'flex',
      component: () => import('../views/BFlexView.vue'),
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import('../views/BPanelView.vue'),
    },
    {
      path: '/nav',
      name: 'nav',
      component: () => import('../views/BNavView.vue'),
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
