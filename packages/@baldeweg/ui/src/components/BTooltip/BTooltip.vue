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
    'position_top': props.position === 'top',
    'position_bottom': props.position === 'bottom',
    'position_left': props.position === 'left',
    'position_right': props.position === 'right',
  }
})
</script>

<template>
  <div class="tooltip">
    <slot /><span class="text" :class="positionClass">{{ text }}</span>
  </div>
</template>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  line-height: 0;
}

.text {
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

.position_top,
.position_bottom,
.position_left,
.position_right {
  position: absolute;
  z-index: 1;
}

.position_top,
.position_bottom {
  width: 250px;
  left: 50%;
  margin-left: -135px;
}

.position_top {
  bottom: 100%;
  margin-bottom: 10px;
}

.position_bottom {
  top: 100%;
  margin-top: 10px;
}

.position_left,
.position_right {
  height: 30px;
  min-width: 250px;
  bottom: 50%;
  margin-bottom: -25px;
}

.position_left {
  right: 100%;
  margin-right: 10px;
}

.position_right {
  left: 100%;
  margin-left: 10px;
}

.text.position_top::after,
.text.position_bottom::after,
.text.position_left::after,
.text.position_right::after {
  content: "";
  position: absolute;
  border-width: 10px;
  border-style: solid;
}

.text.position_top::after,
.text.position_bottom::after {
  left: 50%;
  margin-left: -10px;
}

.text.position_top::after {
  top: 100%;
  border-color: var(--color-neutral-02) transparent transparent transparent;
}

.text.position_bottom::after {
  bottom: 100%;
  border-color: transparent transparent var(--color-neutral-02) transparent;
}

.text.position_left::after,
.text.position_right::after {
  top: 50%;
  margin-top: -10px;
}

.text.position_left::after {
  left: 100%;
  border-color: transparent transparent transparent var(--color-neutral-02);
}

.text.position_right::after {
  right: 100%;
  border-color: transparent var(--color-neutral-02) transparent transparent;
}

.tooltip:hover .text {
  visibility: visible;
  opacity: 1;
}
</style>
