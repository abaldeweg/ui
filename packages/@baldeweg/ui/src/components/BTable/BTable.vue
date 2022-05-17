<script setup>
defineProps({
  hover: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="table" :class="{ canHover: hover }">
    <slot />
  </div>
</template>

<style scoped>
.table {
  overflow: auto;
}
.canHover tbody tr:hover {
  background: var(--color-neutral-02);
}
</style>
