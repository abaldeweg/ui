<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    validator: (value) =>  ['neutral', 'error', 'warning', 'success', 'info'].includes(value),
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
    alert_type_error: props.type === 'error',
    alert_type_warning: props.type === 'warning',
    alert_type_success: props.type === 'success',
    alert_type_info: props.type === 'info',
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
  border-radius: 10px;
  border: 2px solid var(--color-neutral-08);
  background: var(--color-neutral-00);
  padding: 20px;
  margin: 20px 0;
}

.alert_type_error {
  border: 2px solid var(--color-accent-red-10);
}

.alert_type_warning {
  border: 2px solid var(--color-accent-yellow-10);
}

.alert_type_success {
  border: 2px solid var(--color-accent-green-10);
}

.alert_type_info {
  border: 2px solid var(--color-accent-blue-10);
}
</style>
