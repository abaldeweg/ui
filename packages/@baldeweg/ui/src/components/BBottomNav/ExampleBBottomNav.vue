<script setup>
const log = (msg) => {
  console.log(msg)
}
</script>

<template>
  <AppComponent component="BBottomNav">
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
  </AppComponent>
</template>
