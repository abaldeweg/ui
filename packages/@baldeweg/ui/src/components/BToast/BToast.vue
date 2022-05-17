<script setup>
defineProps({
  type: {
    type: String,
    default: 'neutral',
    validator: (value) => {
      return ['neutral', 'error', 'warning', 'success'].includes(value)
    },
  },
  visible: Boolean,
})
</script>

<template>
  <div class="toast" v-if="visible">
    <div
      class="toast_inner"
      :class="{
        toast_error: type === 'error',
        toast_warning: type === 'warning',
        toast_success: type === 'success',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.toast {
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  z-index: 6;
}
.toast_inner {
  border-radius: 5px;
  background: var(--color-neutral-02);
  max-width: 400px;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;
}
.toast_error {
  border-left: 5px solid var(--color-accent-red-10);
}
.toast_warning {
  border-left: 5px solid var(--color-accent-yellow-10);
}
.toast_success {
  border-left: 5px solid var(--color-accent-green-10);
}
</style>
