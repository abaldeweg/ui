<script setup>
defineProps({
  position: {
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
    class="masthead_item"
    :class="{
      masthead_position_start: position === 'start',
      masthead_position_center: position === 'center',
      masthead_position_end: position === 'end',
    }"
  >
    <slot />
  </div>
</template>

<style>
.masthead_item:first-child {
  margin-left: 20px;
}
.masthead_item:last-child {
  margin-right: 20px;
}
.masthead_position_start {
  text-align: left;
  grid-column-start: 1;
}
.masthead_position_center {
  text-align: center;
  grid-column: 2 / span 2;
}
.masthead_position_end {
  text-align: right;
  grid-column-start: 4;
}
</style>
