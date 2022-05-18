<script setup>
defineProps({
  title: String,
})
</script>

<template>
  <div class="item">
    <div class="icon">
      <slot />
    </div>
    <p class="title">{{ title }}</p>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 35px;
  cursor: pointer;
}
.title {
  font-size: 10px;
  letter-spacing: 1px;
}
</style>
