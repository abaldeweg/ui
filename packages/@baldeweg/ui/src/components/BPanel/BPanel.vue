<script setup>
import { useSlots } from 'vue'

defineProps({
  visible: Boolean,
  position: {
    type: String,
    default: 'left',
    validator(value) {
      return ['left', 'right'].includes(value)
    },
  },
  width: {
    type: String,
    default: '300px'
  }
})

defineEmits(['close'])

const slots = useSlots()
</script>

<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div class="overlay" @click="$emit('close')" v-if="visible" />
    </Transition>

    <Transition name="container">
      <div
        class="container"
        :class="{
          position_left: position === 'left',
          position_right: position === 'right',
        }"
        v-if="visible"
        :style="{ maxWidth: width }"
      >
        <div class="header" v-if="slots.header"><slot name="header" /></div>
        <div class="content"><slot /></div>
        <div class="footer" v-if="slots.footer"><slot name="footer" /></div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-neutral-00);
  opacity: 0.7;
  z-index: 3;
}
.container {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  background: var(--color-neutral-00);
  width: calc(100% - 20px);
  z-index: 3;
}
.container.position_left {
  left: 0;
  border-right: 1px solid var(--color-neutral-02);
}
.container.position_right {
  right: 0;
  border-left: 1px solid var(--color-neutral-02);
}
.header {
  border-bottom: 1px solid var(--color-neutral-02);
}
.content {
  flex-grow: 1;
  max-height: calc(100vh);
  overflow-y: auto;
}
.footer {
  border-top: 1px solid var(--color-neutral-02);
}

/* transition overlay */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.5s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* transition container */
.container-enter-active {
  transition: all 0.5s ease-out;
}
.container-leave-active {
  transition: all 0.5s ease-in;
}
.container-enter-from,
.container-leave-to {
  opacity: 0;
}
.container-enter-from.position_left,
.container-leave-to.position_left {
  transform: translateX(-300px);
}
.container-enter-from.position_right,
.container-leave-to.position_right {
  transform: translateX(300px);
}

@media print {
  .overlay,
  .container {
    display: none;
  }
}
</style>
