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
      divider_size_l: size === 'l',
      divider_size_m: size === 'm',
      divider_size_s: size === 's',
      divider_size_xs: size === 'xs',
    }"
  />
</template>

<style>
.divider {
  border: 0 hidden;
  border-top: 1px solid var(--color-neutral-02);
}
.divider_size_l {
  width: 100%;
}
.divider_size_m {
  max-width: 1160px;
}
.divider_size_s {
  max-width: 600px;
}
.divider_size_xs {
  max-width: 100px;
}
</style>
