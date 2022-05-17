<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  position: {
    type: String,
    validator(value) {
      return ['top', 'bottom', 'left', 'right'].includes(value)
    },
  },
  text: String,
})

const spacing = ref(10)
const tooltip = ref(null)
const container = ref(null)

const calcTop = () => {
  let top = container.value.getBoundingClientRect().y
  const position = props.position

  tooltip.value.style.display = 'block'
  const tooltipHeight = tooltip.value.offsetHeight
  tooltip.value.style.display = null

  if ('top' === position) {
    return top - spacing.value - tooltipHeight
  }
  if ('bottom' === position) {
    return top + spacing.value + container.value.offsetHeight
  }
  if ('left' === position || 'right' === position) {
    return top + container.value.offsetHeight / 2 - tooltipHeight / 2
  }

  return top
}

const calcLeft = () => {
  let left = container.value.getBoundingClientRect().x
  const position = props.position

  tooltip.value.style.display = 'block'
  const tooltipWidth = tooltip.value.offsetWidth
  tooltip.value.style.display = null

  if ('top' === position || 'bottom' === position) {
    return left + container.value.offsetWidth / 2 - tooltipWidth / 2
  }
  if ('left' === position) {
    return left - spacing.value - tooltipWidth
  }
  if ('right' === position) {
    return left + spacing.value + container.value.offsetWidth
  }

  return left
}

onMounted(() => {
  tooltip.value.style.top = calcTop() + 'px'
  tooltip.value.style.left = calcLeft() + 'px'
})
</script>

<template>
  <span class="tooltip" ref="container">
    <div class="tooltip_item" ref="tooltip">
      {{ text }}
    </div>
    <slot />
  </span>
</template>

<style scoped>
.tooltip_item {
  display: none;
  position: fixed;
  border: 1px solid var(--color-neutral-02);
  border-radius: 5px;
  background: var(--color-neutral-00);
  color: var(--color-neutral-10);
  padding: 5px 10px;
}
.tooltip:hover .tooltip_item {
  display: block;
}
</style>
