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
  highlight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section class="container" :class="{
    container_size_l: size === 'l',
    container_size_m: size === 'm',
    container_size_s: size === 's',
    container_align_right: align === 'right',
    container_align_center: align === 'center',
    container_hasHighlight: highlight,
  }">
    <slot />
  </section>
</template>

<style>
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

.container_size_l {
  width: 100%;
}

.container_size_m {
  max-width: 1160px;
}

.container_size_s {
  max-width: 600px;
}

.container_align_right {
  text-align: right;
}

.container_align_center {
  text-align: center;
}

.container_hasHighlight {
  background: var(--color-neutral-02);
}
</style>
