<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    validator: (value) => ['info', 'danger', 'warning', 'success'].includes(value),
    default: 'info',
  },
  closable: {
    type: Boolean,
    default: false
  },
})

const showAlert = ref(false)
const alertClass = computed(() => {
  return {
    alert_info: props.type === 'info',
    alert_danger: props.type === 'danger',
    alert_warning: props.type === 'warning',
    alert_success: props.type === 'success',
  }
})
</script>

<template>
  <div class="alert" :class="alertClass" v-if="!showAlert">
    <BMaterialIcon :size="20" class="alert_icon">info</BMaterialIcon>
    <div class="alert-content">
      <slot />
    </div>
    <BMaterialIcon :size="20" @click="showAlert = true" hover class="alert_close" v-if="closable">close</BMaterialIcon>
  </div>
</template>

<style>
.alert {
  display: flex;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid var(--color-neutral-08);
  background: var(--color-neutral-00);
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
}

.alert_icon {
  user-select: none;
}

.alert-content {
  flex: 1;
}

/* Type */
.alert_info {
  border-color: var(--color-accent-blue-10);
  color: var(--color-accent-blue-10)
}

.alert_info a,
.alert_info a:hover {
  color: var(--color-accent-blue-10);
  text-decoration-color: var(--color-accent-blue-10);
}

.alert_danger {
  border-color: var(--color-accent-red-10);
  color: var(--color-accent-red-10);
}

.alert_danger a,
.alert_danger a:hover {
  color: var(--color-accent-red-10);
  text-decoration-color: var(--color-accent-red-10);
}

.alert_warning {
  border-color: var(--color-accent-yellow-10);
  color: var(--color-accent-yellow-10)
}

.alert_warning a,
.alert_warning a:hover {
  color: var(--color-accent-yellow-10);
  text-decoration-color: var(--color-accent-yellow-10);
}

.alert_success {
  border-color: var(--color-accent-green-10);
  color: var(--color-accent-green-10)
}

.alert_success a,
.alert_success a:hover {
  color: var(--color-accent-green-10);
  text-decoration-color: var(--color-accent-green-10);
}
</style>
