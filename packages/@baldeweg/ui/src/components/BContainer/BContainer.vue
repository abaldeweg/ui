<script setup>
defineProps({
  size: {
    type: String,
    default: 'l',
    validator(value) {
      return ['l', 'm', 's'].includes(value)
    },
  },
  align: {
    type: String,
    default: 'left',
    validator(value) {
      return ['left', 'right', 'center'].includes(value)
    },
  },
  highlight: Boolean,
})
</script>

<template>
  <section
    class="container"
    :class="{
      size_l: size === 'l',
      size_m: size === 'm',
      size_s: size === 's',
      align_right: align === 'right',
      align_center: align === 'center',
      hasHighlight: highlight,
    }"
  >
    <slot />
  </section>
</template>

<style scoped>
.container {
  clear: both;
  letter-spacing: 0.3px;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;
}
.container::after {
  content: '';
  display: table;
  clear: both;
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
.align_right {
  text-align: right;
}
.align_center {
  text-align: center;
}
.hasHighlight {
  background: var(--color-neutral-02);
}
</style>
