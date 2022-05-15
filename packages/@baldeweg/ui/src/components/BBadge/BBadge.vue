<template>
  <div class="badge">
    <slot />
    <div class="badge_content" v-if="show">{{ content }}</div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'b-badge',
  props: {
    content: [Number, String],
    hideEmpty: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const show = computed(() => {
      if (props.hideEmpty) {
        if (!props.content || [0, '0', ''].indexOf(props.content) !== -1) {
          return false
        }
      }

      return true
    })

    return { show }
  },
}
</script>

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
