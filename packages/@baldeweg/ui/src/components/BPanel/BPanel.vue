<script setup>
import { useSlots } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
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

const emit = defineEmits(['update:modelValue'])

const slots = useSlots()

const close = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <Transition name="panel_overlay">
    <div class="panel_overlay" @click="close" v-if="modelValue" />
  </Transition>

  <Transition name="panel_container">
    <div class="panel_container" :class="{
      panel_position_left: position === 'left',
      panel_position_right: position === 'right',
    }" v-if="modelValue" :style="{ maxWidth: width }">
      <div class="panel_header" v-if="slots.header">
        <slot name="header" />
      </div>
      <div class="panel_content">
        <slot />
      </div>
      <div class="panel_footer" v-if="slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </Transition>
</template>

<style>
.panel_overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-neutral-00);
  opacity: 0.7;
  z-index: 3;
}

.panel_container {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  background: var(--color-neutral-00);
  width: calc(100% - 20px);
  z-index: 3;
}

.panel_container.panel_position_left {
  left: 0;
  border-right: 1px solid var(--color-neutral-02);
}

.panel_container.panel_position_right {
  right: 0;
  border-left: 1px solid var(--color-neutral-02);
}

.panel_header {
  border-bottom: 1px solid var(--color-neutral-02);
}

.panel_content {
  flex-grow: 1;
  max-height: calc(100vh);
  overflow-y: auto;
}

.panel_footer {
  border-top: 1px solid var(--color-neutral-02);
}

/* transition overlay */
.panel_overlay-enter-active,
.panel_overlay-leave-active {
  transition: opacity 0.5s ease;
}

.panel_overlay-enter-from,
.panel_overlay-leave-to {
  opacity: 0;
}

/* transition container */
.panel_container-enter-active {
  transition: all 0.5s ease-out;
}

.panel_container-leave-active {
  transition: all 0.5s ease-in;
}

.panel_container-enter-from,
.panel_container-leave-to {
  opacity: 0;
}

.panel_container-enter-from.panel_position_left,
.panel_container-leave-to.panel_position_left {
  transform: translateX(-300px);
}

.panel_container-enter-from.panel_position_right,
.panel_container-leave-to.panel_position_right {
  transform: translateX(300px);
}

@media print {
  .panel_overlay,
  .panel_container {
    display: none;
  }
}
</style>
