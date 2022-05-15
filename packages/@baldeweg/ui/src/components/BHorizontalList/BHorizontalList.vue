<template>
  <div class="horizontal-list">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-horizontal-list',
}
</script>

<style scoped>
.horizontal-list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 20px;
}
</style>
