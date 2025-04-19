<script setup>
defineProps({
  buttons: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="group" :class="{ hasButtons: buttons }">
    <slot />
  </div>
</template>

<style>
.group {
  clear: both;
  margin-bottom: 20px;
  overflow: auto;
}
.group:last-child {
  margin-bottom: 0;
}
.group.hasButtons {
  text-align: right;
}
</style>
