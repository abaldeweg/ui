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

<style>
.table {
  overflow: auto;
}

.table.canHover tbody tr:hover {
  background: var(--color-neutral-02);
}
</style>
