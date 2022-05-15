<template>
  <div
    class="scroll-to-bottom"
    :style="{ width: state.width, height: state.height }"
    ref="el"
  >
    <slot />
  </div>
</template>

<script>
import {
  computed,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  reactive,
  ref,
} from 'vue'

export default {
  name: 'scroll-to-bottom',
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const state = reactive({
      isScrolledToBottom: true,
      width: computed(() => {
        return props.width !== 0 ? props.width + 'px' : null
      }),
      height: computed(() => {
        return props.height !== 0
          ? props.height + 'px'
          : 'calc(100vh - var(--masthead-height))'
      }),
    })

    const el = ref(null)

    const scrollToBottom = () => {
      if (!state.isScrolledToBottom) return

      let container = el.value
      container.scrollTop = container.scrollHeight
    }

    onMounted(scrollToBottom)

    onBeforeUpdate(() => {
      let container = el.value
      state.isScrolledToBottom =
        container.scrollHeight - container.clientHeight <= container.scrollTop
    })

    onUpdated(scrollToBottom)

    return { state, el }
  },
}
</script>

<style scoped>
.scroll-to-bottom {
  overflow-y: scroll;
}
</style>
