<script setup>
import { computed } from 'vue'

const props = defineProps({
  content: [String, Number],
  hideEmpty: {
    type: Boolean,
    default: true,
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
    <slot />
    <div class="content" v-if="show">{{ content }}</div>
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
  color: var(--color-neutral-00)
}
</style>
