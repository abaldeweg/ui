<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    validator: (value) =>  ['neutral', 'info', 'danger', 'warning', 'success'].includes(value),
    default: 'neutral',
  },
  closable: {
    type: Boolean,
    default: false
  },
})

const showAlert = ref(false)
const alertClass = computed(() => {
  return {
    alert_neutral: props.type === 'neutral',
    alert_info: props.type === 'info',
    alert_danger: props.type === 'danger',
    alert_warning: props.type === 'warning',
    alert_success: props.type === 'success',
  }
})
</script>

<template>
  <div class="alert" :class="alertClass" v-if="!showAlert">
    <BMaterialIcon :size="28" @click="showAlert = true" hover :style="{ float: 'right' }" v-if="closable">close
    </BMaterialIcon>
    <slot />
  </div>
</template>

<style>
.alert {
  border-radius: 20px;
  border: 2px solid var(--color-neutral-08);
  background: var(--color-neutral-00);
  padding: 20px;
  margin: 20px 0;
}
.alert_neutral {
  border: 2px solid var(--color-neutral-08);
}
.alert_info {
  border: 2px solid var(--color-accent-blue-10);
}
.alert_danger {
  border: 2px solid var(--color-accent-red-10);
}
.alert_warning {
  border: 2px solid var(--color-accent-yellow-10);
}
.alert_success {
  border: 2px solid var(--color-accent-green-10);
}
</style>
