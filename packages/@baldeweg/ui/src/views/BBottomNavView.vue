<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BBottomNavItem - @baldeweg/ui' })

const log = (msg) => {
  console.log(msg)
}
</script>

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
