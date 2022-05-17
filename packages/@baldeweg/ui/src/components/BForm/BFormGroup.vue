<script setup>
defineProps({
  buttons: Boolean,
})
</script>

<template>
  <div class="form-group" :class="{ hasButtons: buttons }">
    <slot />
  </div>
</template>

<style scoped>
.form-group {
  clear: both;
  margin-bottom: 20px;
  overflow: auto;
}
.form-group:last-child {
  margin-bottom: 0;
}
.form-group.hasButtons {
  text-align: right;
}
</style>
