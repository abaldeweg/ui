<script setup>
defineProps({
  type: {
    type: String,
    default: 'start',
    validator(value) {
      return ['start', 'center', 'end'].includes(value)
    },
  },
})
</script>

<template>
  <div
    class="item"
    :class="{
      position_start: type === 'start',
      position_center: type === 'center',
      position_end: type === 'end',
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.item:first-child {
  margin-left: 20px;
}
.item:last-child {
  margin-right: 20px;
}
.position_start {
  text-align: left;
  grid-column-start: 1;
}
.position_center {
  text-align: center;
  grid-column: 2 / span 2;
}
.position_end {
  text-align: right;
  grid-column-start: 4;
}
</style>
