<template>
  <div class="tabs-link">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-tabs-link',
}
</script>

<style scoped>
.tabs-link {
  border-radius: 3px;
  text-align: center;
  padding: 10px;
  color: var(--color-neutral-10);
}
.tabs-link a,
.tabs-link a:hover {
  color: var(--color-neutral-10);
}
.tabs-link:hover {
  background: var(--color-neutral-02);
}
</style>
