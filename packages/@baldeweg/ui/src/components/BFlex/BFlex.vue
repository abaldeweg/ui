<script setup>
defineProps({
  direction: {
    type: String,
    validator(value) {
      return ['row', 'column', 'row-reverse', 'column-reverse'].includes(value)
    },
    default: 'row',
  },
  justify: {
    type: String,
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
    default: 'flex-start',
  },
  align: {
    type: String,
    validator(value) {
      return [
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
      ].includes(value)
    },
    default: 'stretch',
  },
  gap: {
    type: String,
    default: undefined,
  },
})
</script>

<template>
  <div
    class="flex"
    :style="{
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align,
      gap: gap ? gap : undefined,
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  max-width: 1200px;
  margin: auto;
  overflow: auto;
}
</style>
