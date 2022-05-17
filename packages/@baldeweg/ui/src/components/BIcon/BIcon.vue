<script setup>
import { useIcon } from './../../composables/useIcon.js'

const props = defineProps({
  type: {
    type: String,
    validator(value) {
      const { has } = useIcon()
      return has(value)
    },
  },
  size: {
    type: Number,
    default: 25,
  },
  noHover: Boolean,
  color: String,
})

const { get } = useIcon()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 50 50"
    class="icon"
    :class="{ noHover }"
    :style="{
      fill: color ? color : undefined,
    }"
  >
    <path :d="get(props.type)" />
  </svg>
</template>

<style scoped>
.icon {
  fill: var(--color-neutral-06);
  opacity: 1;
  transition: opacity 0.2s;
}
.icon:hover {
  opacity: 0.6;
}
.icon.noHover:hover {
  opacity: 1;
}
</style>
