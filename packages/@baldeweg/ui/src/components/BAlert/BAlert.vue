<script setup>
import { ref } from 'vue'

defineProps({
  type: {
    type: String,
    validator: (value) => {
      return ['neutral', 'error', 'warning', 'success', 'info'].includes(value)
    },
    default: 'neutral',
  },
  hidable: Boolean,
})

const hide = ref(false)
</script>

<template>
  <div class="alert" :class="{
    type_error: type === 'error',
    type_warning: type === 'warning',
    type_success: type === 'success',
    type_info: type === 'info'
  }" v-if="!hide">
    <BIcon type="close" :size="20" @click="hide = true" :style="{ float: 'right' }" v-if="hidable" />
    <slot />
  </div>
</template>

<style scoped>
.alert {
  border-radius: 10px;
  border: 2px solid var(--color-neutral-08);
  background: var(--color-neutral-00);
  padding: 20px;
  margin: 20px 0;
  box-shadow: 3px 3px 3px var(--color-neutral-02), -3px -3px 3px var(--color-neutral-02);
}

.type_error {
  border: 2px solid var(--color-accent-red-10);
}

.type_warning {
  border: 2px solid var(--color-accent-yellow-10);
}

.type_success {
  border: 2px solid var(--color-accent-green-10);
}

.type_info {
  border: 2px solid var(--color-accent-blue-10);
}
</style>
