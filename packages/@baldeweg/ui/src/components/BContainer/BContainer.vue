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
  <section
    class="container"
    :class="{
      container_l: this.size === 'l',
      container_m: this.size === 'm',
      container_s: this.size === 's',
      container_right: this.align === 'right',
      container_center: this.align === 'center',
      isHighlight: this.highlight,
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
.container_l {
  width: 100%;
}
.container_m {
  max-width: 1160px;
}
.container_s {
  max-width: 600px;
}
.container_right {
  text-align: right;
}
.container_center {
  text-align: center;
}
.isHighlight {
  background: var(--color-neutral-02);
}
</style>
