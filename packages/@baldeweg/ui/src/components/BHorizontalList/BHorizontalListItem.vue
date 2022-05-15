<template>
  <div
    class="horizontal-list-item"
    :class="{
      'horizontal-list-item_xs': size === 'xs',
      'horizontal-list-item_s': size === 's',
      'horizontal-list-item_m': size === 'm',
      'horizontal-list-item_l': size === 'l',
      'horizontal-list-item_xl': size === 'xl',
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-horizontal-list-item',
  props: {
    size: {
      type: String,
      default: 'm',
      validator(value) {
        return ['xs', 's', 'm', 'l', 'xl'].indexOf(value) !== -1
      },
    },
  },
}
</script>

<style scoped>
.horizontal-list-item {
  display: block;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
.horizontal-list-item_xs {
  min-width: 160px;
  max-width: 160px;
}
.horizontal-list-item_s {
  min-width: 200px;
  max-width: 200px;
}
.horizontal-list-item_m {
  min-width: 300px;
  max-width: 300px;
}
.horizontal-list-item_l {
  min-width: 500px;
  max-width: 500px;
}
.horizontal-list-item_xl {
  min-width: 700px;
  max-width: 700px;
}
</style>
