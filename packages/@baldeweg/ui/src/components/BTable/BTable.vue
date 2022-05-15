<template>
  <div class="table" :class="{ canHover: hover }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-table',
  props: {
    hover: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.table {
  overflow: auto;
}
.canHover tbody tr:hover {
  background: var(--color-neutral-02);
}
</style>
