<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BBottomNavItem - @baldeweg/ui' })

const log = (msg) => {
  console.log(msg)
}
</script>

<template>
  <BBottomNav>
    <BBottomNavItem @click="log('profile')" title="Profile">
      <BIcon type="profile" :size="35" />
    </BBottomNavItem>
    <BBottomNavItem @click="log('profile')" title="Profile">
      <BIcon type="profile" :size="35" />
    </BBottomNavItem>
    <BBottomNavItem @click="log('profile')" title="Profile">
      <BIcon type="profile" :size="35" />
    </BBottomNavItem>
    <BBottomNavItem @click="log('profile')" title="Profile">
      <BIcon type="profile" :size="35" />
    </BBottomNavItem>
    <BBottomNavItem @click="log('profile')" title="Profile">
      <BIcon type="profile" :size="35" />
    </BBottomNavItem>
  </BBottomNav>
</template>
