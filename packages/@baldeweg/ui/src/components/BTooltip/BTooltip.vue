<script setup>
import { computed } from 'vue'

const props = defineProps({
  position: {
    type: String,
    validator(value) {
      return ['top', 'bottom', 'left', 'right'].includes(value)
    },
    default: 'top'
  },
  text: String,
})

const positionClass = computed(() => {
  return {
    'tooltip_position_top': props.position === 'top',
    'tooltip_position_bottom': props.position === 'bottom',
    'tooltip_position_left': props.position === 'left',
    'tooltip_position_right': props.position === 'right',
  }
})
</script>

<template>
  <div class="tooltip">
    <slot /><span class="tooltip_text" :class="positionClass">{{ text }}</span>
  </div>
</template>

<style>
.tooltip {
  position: relative;
  display: inline-block;
  line-height: 0;
}

.tooltip_text {
  border-radius: 10px;
  background: var(--color-neutral-02);
  padding: 10px;
  color: var(--color-neutral-10);
  text-align: center;
  line-height: initial;
  opacity: 0;
  transition: opacity .3s;
  visibility: hidden;
}

.tooltip_position_top,
.tooltip_position_bottom,
.tooltip_position_left,
.tooltip_position_right {
  position: absolute;
  z-index: 1;
}

.tooltip_position_top,
.tooltip_position_bottom {
  min-width: 120px;
  max-width: 320px;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip_position_top {
  bottom: 100%;
  margin-bottom: 10px;
}

.tooltip_position_bottom {
  top: 100%;
  margin-top: 10px;
}

.tooltip_position_left,
.tooltip_position_right {
  height: auto;
  min-width: 120px;
  max-width: 320px;
  bottom: 50%;
  transform: translateY(50%);
}

.tooltip_position_left {
  right: 100%;
  margin-right: 10px;
}

.tooltip_position_right {
  left: 100%;
  margin-left: 10px;
}

.tooltip_text.tooltip_position_top::after,
.tooltip_text.tooltip_position_bottom::after,
.tooltip_text.tooltip_position_left::after,
.tooltip_text.tooltip_position_right::after {
  content: "";
  position: absolute;
  border-width: 10px;
  border-style: solid;
}

.tooltip_text.tooltip_position_top::after,
.tooltip_text.tooltip_position_bottom::after {
  left: 50%;
  margin-left: -10px;
}

.tooltip_text.tooltip_position_top::after {
  top: 100%;
  border-color: var(--color-neutral-02) transparent transparent transparent;
}

.tooltip_text.tooltip_position_bottom::after {
  bottom: 100%;
  border-color: transparent transparent var(--color-neutral-02) transparent;
}

.tooltip_text.tooltip_position_left::after,
.tooltip_text.tooltip_position_right::after {
  top: 50%;
  margin-top: -10px;
}

.tooltip_text.tooltip_position_left::after {
  left: 100%;
  border-color: transparent transparent transparent var(--color-neutral-02);
}

.tooltip_text.tooltip_position_right::after {
  right: 100%;
  border-color: transparent var(--color-neutral-02) transparent transparent;
}

.tooltip:hover .tooltip_text {
  visibility: visible;
  opacity: 1;
}
</style>
