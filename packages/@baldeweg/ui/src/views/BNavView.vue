<template>
  <BNav
    :nav="[
      {
        route: { name: 'index', params: { list: 'inbox' } },
        title: 'Home',
      },
      {
        route: { name: 'index', params: { list: 'inbox' } },
        title: 'Home',
        badge: '5',
        icon: {
          type: 'icon',
          value: 'hamburger',
        },
      },
      {
        route: 'http://shop.localhost',
        title: 'Shop',
        badge: '1',
        icon: {
          type: 'dot',
          value: '#ff0000',
        },
      },
    ]"
  />
</template>
