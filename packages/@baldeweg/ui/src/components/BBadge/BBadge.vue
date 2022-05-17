<script setup>
import { computed } from 'vue'

const props = defineProps({
  content: [Number, String],
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
    <div class="badge_content" v-if="show">{{ content }}</div>
  </div>
</template>

<style scoped>
.badge {
  display: inline-block;
}
.badge_content {
  position: relative;
  display: inline-block;
  background: var(--color-primary-10);
  border-radius: 10px;
  padding: 0 5px;
  top: -15px;
  font-size: 0.7rem;
}
</style>
