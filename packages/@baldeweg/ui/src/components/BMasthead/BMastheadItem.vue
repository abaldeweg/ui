<template>
  <div
    class="masthead-item"
    :class="{
      'masthead-item_start': 'start' === type,
      'masthead-item_center': 'center' === type,
      'masthead-item_end': 'end' === type,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-masthead-item',
  props: {
    type: {
      type: String,
      default: 'start',
      validator(value) {
        return ['start', 'center', 'end'].indexOf(value) !== -1
      },
    },
  },
}
</script>

<style scoped>
.masthead-item:first-child {
  margin-left: 20px;
}
.masthead-item:last-child {
  margin-right: 20px;
}
.masthead-item_start {
  text-align: left;
  grid-column-start: 1;
}
.masthead-item_center {
  text-align: center;
  grid-column: 2 / span 2;
}
.masthead-item_end {
  text-align: right;
  grid-column-start: 4;
}
</style>
