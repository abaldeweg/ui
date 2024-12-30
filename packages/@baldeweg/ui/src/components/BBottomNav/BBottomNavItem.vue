<script setup>
defineProps({
  title: String,
})
</script>

<template>
  <div class="bottomNav_item">
    <div class="icon">
      <slot />
    </div>
    <p class="bottomNav_title">{{ title }}</p>
  </div>
</template>

<style>
.bottomNav_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 35px;
  cursor: pointer;
}
.bottomNav_title {
  font-size: 11px;
  letter-spacing: 1px;
}
</style>
