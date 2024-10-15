<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: Number,
    default: 24,
  },
  color: {
    type: String,
    default: 'inherit',
  },
  hover: {
    type: Boolean,
    default: false,
  },
})

const iconClasses = computed(() => [
  'icon',
  'material-symbols-outlined',
  { canHover: props.hover },
])

const iconStyle = computed(() => ({
  fontSize: `${props.size}px`,
  color: props.color,
}))
</script>

<template>
  <span :class="iconClasses" :style="iconStyle">
    <slot />
  </span>
</template>

<style scoped>
.icon {
  vertical-align: middle;
  opacity: 1;
  transition: opacity 0.2s;
  cursor: pointer;
}

.icon:hover.canHover {
  opacity: 0.6;
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' 0,
    'opsz' 35;
}
</style>
