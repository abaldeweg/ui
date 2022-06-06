<script setup>
defineProps({
  size: {
    type: String,
    default: 'm',
    validator(value) {
      return ['xs', 's', 'm', 'l', 'xl'].includes(value)
    },
  },
})
</script>

<template>
  <div
    class="item"
    :class="{
      size_xs: size === 'xs',
      size_s: size === 's',
      size_m: size === 'm',
      size_l: size === 'l',
      size_xl: size === 'xl',
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.item {
  display: block;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
.size_xs {
  min-width: 160px;
  max-width: 160px;
}
.size_s {
  min-width: 200px;
  max-width: 200px;
}
.size_m {
  min-width: 300px;
  max-width: 300px;
}
.size_l {
  min-width: 500px;
  max-width: 500px;
}
.size_xl {
  min-width: 700px;
  max-width: 700px;
}
</style>
