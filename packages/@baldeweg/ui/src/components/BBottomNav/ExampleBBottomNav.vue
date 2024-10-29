<script setup>
const log = (msg) => {
  console.log(msg)
}
</script>

<template>
  <AppComponent component="BBottomNav">
    <BBottomNavItem @click="log('profile')" title="Profile">
      <BMaterialIcon :size="35" hover>person</BMaterialIcon>
    </BBottomNavItem>
    <BBottomNavItem @click="log('profile')" title="Profile">
      <BMaterialIcon :size="35" hover>person</BMaterialIcon>
    </BBottomNavItem>
    <BBottomNavItem @click="log('profile')" title="Profile">
      <BMaterialIcon :size="35" hover>person</BMaterialIcon>
    </BBottomNavItem>
    <BBottomNavItem @click="log('profile')" title="Profile">
      <BMaterialIcon :size="35" hover>person</BMaterialIcon>
    </BBottomNavItem>
    <BBottomNavItem @click="log('profile')" title="Profile">
      <BMaterialIcon :size="35" hover>person</BMaterialIcon>
    </BBottomNavItem>
  </AppComponent>
</template>
