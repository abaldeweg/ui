<script setup>
import { ref } from 'vue'

defineProps({
  type: {
    type: String,
    validator: (value) => {
      return ['neutral', 'error', 'warning', 'success'].includes(value)
    },
    default: 'neutral',
  },
  canHide: Boolean,
})

const hide = ref(false)
</script>

<template>
  <div
    class="alert"
    :class="{
      alert_error: type === 'error',
      alert_warning: type === 'warning',
      alert_success: type === 'success',
    }"
    v-if="!hide"
  >
    <BIcon
      type="close"
      :size="20"
      @click="hide = true"
      :style="{ float: 'right' }"
      v-if="canHide"
    />
    <slot />
  </div>
</template>

<style scoped>
.alert {
  border-radius: 10px;
  border: 1px solid var(--color-neutral-08);
  background: var(--color-neutral-02);
  padding: 20px;
  margin: 20px 0;
}
.alert_error {
  border: 1px solid var(--color-accent-red-10);
}
.alert_warning {
  border: 1px solid var(--color-accent-yellow-10);
}
.alert_success {
  border: 1px solid var(--color-accent-green-10);
}
</style>
