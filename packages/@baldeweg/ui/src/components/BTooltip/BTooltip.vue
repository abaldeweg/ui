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
const item = ref(null)
const tooltip = ref(null)

const calcTop = () => {
  let top = tooltip.value.getBoundingClientRect().y
  const position = props.position

  item.value.style.display = 'block'
  const itemHeight = item.value.offsetHeight
  item.value.style.display = null

  if ('top' === position) {
    return top - spacing.value - itemHeight
  }
  if ('bottom' === position) {
    return top + spacing.value + tooltip.value.offsetHeight
  }
  if ('left' === position || 'right' === position) {
    return top + tooltip.value.offsetHeight / 2 - itemHeight / 2
  }

  return top
}

const calcLeft = () => {
  let left = tooltip.value.getBoundingClientRect().x
  const position = props.position

  item.value.style.display = 'block'
  const itemWidth = item.value.offsetWidth
  item.value.style.display = null

  if ('top' === position || 'bottom' === position) {
    return left + tooltip.value.offsetWidth / 2 - itemWidth / 2
  }
  if ('left' === position) {
    return left - spacing.value - itemWidth
  }
  if ('right' === position) {
    return left + spacing.value + tooltip.value.offsetWidth
  }

  return left
}

onMounted(() => {
  item.value.style.top = calcTop() + 'px'
  item.value.style.left = calcLeft() + 'px'
})
</script>

<template>
  <span class="tooltip" ref="tooltip">
    <div class="item" ref="item">
      {{ text }}
    </div>
    <slot />
  </span>
</template>

<style scoped>
.tooltip:hover .item {
  display: block;
}
.item {
  display: none;
  position: fixed;
  border: 1px solid var(--color-neutral-02);
  border-radius: 10px;
  background: var(--color-neutral-00);
  color: var(--color-neutral-10);
  padding: 5px 10px;
}
</style>
