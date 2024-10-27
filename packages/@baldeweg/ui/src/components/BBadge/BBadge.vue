<script setup>
import { computed } from 'vue'

const props = defineProps({
  content: [String, Number],
  hideEmpty: {
    type: Boolean,
    default: true,
  },
  position: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value),
  },
})

const show = computed(() => {
  if (props.hideEmpty) {
    if (!props.content || [0, '0', ''].includes(props.content)) {
      return false
    }
  }

  return true
})
</script>

<template>
  <div class="badge">
    <div class="content" v-if="show && props.position === 'left'">{{ content }}</div>
    <slot />
    <div class="content" v-if="show && props.position === 'right'">{{ content }}</div>
  </div>
</template>

<style scoped>
.badge {
  display: inline-block;
  margin: 0 10px;
}

.content {
  position: relative;
  display: inline-block;
  background: var(--color-primary-10);
  border-radius: 10px;
  padding: 0 5px;
  top: -15px;
  font-size: 0.7rem;
  color: var(--color-neutral-00);
}
</style>
