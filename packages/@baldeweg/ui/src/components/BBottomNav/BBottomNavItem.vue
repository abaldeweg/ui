<script setup>
defineProps({
  title: String,
})
</script>

<template>
  <div class="bottom-nav-item" @click="$emit('click', $event)">
    <div class="bottom-nav-item_icon">
      <slot />
    </div>
    <p class="bottom-nav-item_title">{{ title }}</p>
  </div>
</template>

<style scoped>
.bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 35px;
  cursor: pointer;
}
.bottom-nav-item_title {
  font-size: 10px;
  letter-spacing: 1px;
}
</style>
