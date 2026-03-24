<script setup>
defineProps({
  hover: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="table u:overflow-auto" :class="{ canHover: hover }">
    <slot />
  </div>
</template>

<style>
.table.canHover tbody tr:hover {
  background: var(--color-neutral-02);
}
</style>
