<template>
  <div class="horizontal-list">
    <slot />
  </div>
</template>

<style scoped>
.horizontal-list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 20px;
}
</style>
