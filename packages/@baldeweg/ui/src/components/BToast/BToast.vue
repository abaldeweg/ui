<script setup>
defineProps({
  type: {
    type: String,
    default: 'neutral',
    validator: (value) => ['neutral', 'error', 'warning', 'success'].includes(value),
  },
  visible: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="toast" v-if="visible">
    <div class="toast_inner" :class="{
      toast_type_error: type === 'error',
      toast_type_warning: type === 'warning',
      toast_type_success: type === 'success',
    }">
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
  border-radius: 10px;
  background: var(--color-neutral-02);
  max-width: 400px;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;
}

.toast_type_error {
  border-left: 10px solid var(--color-accent-red-10);
}

.toast_type_warning {
  border-left: 10px solid var(--color-accent-yellow-10);
}

.toast_type_success {
  border-left: 10px solid var(--color-accent-green-10);
}
</style>
