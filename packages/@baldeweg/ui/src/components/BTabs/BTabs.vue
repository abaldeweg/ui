<script setup>
defineProps({
  justify: {
    type: String,
    default: 'flex-start',
    validator(value) {
      return [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ].includes(value)
    },
  },
})
</script>

<template>
  <div class="tabs" :style="{ justifyContent: justify }">
    <slot />
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  overflow-x: auto;
}
</style>
