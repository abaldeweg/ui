<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 50 50"
    class="icon"
    :class="{ noHover: noHover }"
    :style="{
      fill: color ? color : undefined,
    }"
  >
    <path :d="path()" />
  </svg>
</template>

<script>
import { useIcon } from './../../composables/useIcon.js'

const { get, has } = useIcon()

export default {
  name: 'b-icon',
  props: {
    type: {
      type: String,
      validator(value) {
        return has(value)
      },
    },
    size: {
      type: Number,
      default: 25,
    },
    noHover: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
  },
  setup(props) {
    const path = () => {
      return get(props.type)
    }

    return { path }
  },
}
</script>

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
