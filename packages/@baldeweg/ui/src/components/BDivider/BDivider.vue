<script setup>
defineProps({
  size: {
    type: String,
    default: 'l',
    validator(value) {
      return ['l', 'm', 's', 'xs'].includes(value)
    },
  },
})
</script>

<template>
  <hr
    class="divider"
    :class="{
      size_l: size === 'l',
      size_m: size === 'm',
      size_s: size === 's',
      size_xs: size === 'xs',
    }"
  />
</template>

<style scoped>
.divider {
  border: 0 hidden;
  border-top: 1px solid var(--color-neutral-02);
}
.size_l {
  width: 100%;
}
.size_m {
  max-width: 1160px;
}
.size_s {
  max-width: 600px;
}
.size_xs {
  max-width: 100px;
}
</style>
