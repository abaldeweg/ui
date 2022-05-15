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
import icon from '../../services/icons'

const icons = [
  'apps',
  'bin',
  'star',
  'close',
  'check',
  'download',
  'filter',
  'hamburger',
  'minus',
  'pause',
  'pencil',
  'play',
  'plus',
  'profile',
  'kebab',
  'meatballs',
  'moon',
  'dollar',
  'search',
  'euro',
  'cart',
  'directory',
  'file',
  'clipboard',
]

export default {
  name: 'b-icon',
  props: {
    type: {
      type: String,
      validator(value) {
        return icons.indexOf(value) !== -1
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
      return icon(props.type)
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
