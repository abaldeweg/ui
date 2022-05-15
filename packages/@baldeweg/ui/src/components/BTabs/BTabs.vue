<template>
  <div class="tabs">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-tabs',
}
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: space-between;
}
</style>
