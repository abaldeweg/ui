<template>
  <b-bottom-nav>
    <b-bottom-nav-item @click="log('profile')" title="Profile">
      <b-icon type="profile" :size="35" />
    </b-bottom-nav-item>
    <b-bottom-nav-item @click="log('profile')" title="Profile">
      <b-icon type="profile" :size="35" />
    </b-bottom-nav-item>
    <b-bottom-nav-item @click="log('profile')" title="Profile">
      <b-icon type="profile" :size="35" />
    </b-bottom-nav-item>
    <b-bottom-nav-item @click="log('profile')" title="Profile">
      <b-icon type="profile" :size="35" />
    </b-bottom-nav-item>
    <b-bottom-nav-item @click="log('profile')" title="Profile">
      <b-icon type="profile" :size="35" />
    </b-bottom-nav-item>
  </b-bottom-nav>
</template>

<script>
import BBottomNav from '../components/BBottomNav/BBottomNav.vue'
import BBottomNavItem from '../components/BBottomNav/BBottomNavItem.vue'
import BIcon from '../components/BIcon/BIcon.vue'
import { useTitle } from './../composables/useTitle.js'

export default {
  name: 'b-bottom-nav-view',
  components: {
    BBottomNav,
    BBottomNavItem,
    BIcon,
  },
  setup() {
    useTitle({ title: 'BBottomNavItem - @baldeweg/ui' })
    const log = (msg) => {
      console.log(msg)
    }

    return { log }
  },
}
</script>
