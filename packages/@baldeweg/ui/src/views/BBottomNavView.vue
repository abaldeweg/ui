<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BBottomNavItem' })

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
