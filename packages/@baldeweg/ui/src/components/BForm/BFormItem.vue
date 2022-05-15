<template>
  <div class="form-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-form-item',
}
</script>

<style scoped>
.form-item {
  clear: both;
  overflow: auto;
}
</style>
