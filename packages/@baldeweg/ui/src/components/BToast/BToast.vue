<template>
  <div class="toast" v-if="state.isVisible || visible">
    <div
      class="toast_inner"
      :class="{
        toast_error: type === 'error',
        toast_warning: type === 'warning',
        toast_success: type === 'success',
      }"
    >
      <slot />

      <!-- <span class="toast_close" @click="close"><b-icon type="close" /></span> -->
    </div>
  </div>
</template>

<script>
import { reactive, watch } from 'vue'

export default {
  name: 'b-toast',
  props: {
    type: {
      type: String,
      validator: (value) => {
        return ['neutral', 'error', 'warning', 'success'].indexOf(value) !== -1
      },
      default: 'neutral',
    },
    visible: Boolean,
  },
  setup(props, { emit }) {
    const state = reactive({
      isVisible: false,
    })

    const show = () => {
      state.isVisible = true
      window.setTimeout(() => {
        state.isVisible = false
      }, 5000)
    }

    watch(
      () => props.visible,
      (val) => {
        if (!val) return
        window.setTimeout(() => {
          emit('hide')
        }, 3000)
      }
    )

    const close = () => {
      state.isVisible = false
      emit('hide')
    }

    return { state, show, close }
  },
}
</script>

<style scoped>
.toast {
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  z-index: 6;
}
.toast_inner {
  border-radius: 5px;
  background: var(--color-neutral-02);
  max-width: 400px;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;
}
.toast_error {
  border-left: 5px solid var(--color-accent-red-10);
}
.toast_warning {
  border-left: 5px solid var(--color-accent-yellow-10);
}
.toast_success {
  border-left: 5px solid var(--color-accent-green-10);
}
.toast_close {
  float: right;
}
</style>
