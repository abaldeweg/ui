<script setup>
import { ref } from 'vue'

const props = defineProps({
  design: {
    type: String,
    default: 'primary',
  },
  ripple: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

const el = ref(null)
const el2 = ref(null)
const isRippleActive = ref(false)

const click = (event) => {
  emit('click', event)
  startRipple()
}

const startRipple = () => {
  if (!props.ripple) return

  isRippleActive.value = true

  const width = el.value.offsetWidth
  const height = el.value.offsetHeight
  const top = height / 2 - width / 2

  el2.value.style.top = top + 'px'
  el2.value.style.left = '0'
  el2.value.style.width = width + 'px'
  el2.value.style.height = width + 'px'

  setTimeout(() => {
    isRippleActive.value = false
  }, 500)
}
</script>

<template>
  <button
    class="btn"
    :class="{
      btn_primary:
        design === 'primary' ||
        design === 'primary_danger' ||
        design === 'primary_wide',
      btn_primary_danger: design === 'primary_danger',
      btn_primary_wide: design === 'primary_wide',
      btn_outline:
        design === 'outline' ||
        design === 'outline_danger' ||
        design === 'outline_wide',
      btn_outline_danger: design === 'outline_danger',
      btn_outline_wide: design === 'outline_wide',
      btn_text: design === 'text' || design === 'text_danger',
      btn_text_danger: design === 'text_danger',
    }"
    @click="click($event)"
    ref="el"
  >
    <span class="ripple" v-show="isRippleActive" ref="el2" v-if="ripple" />
    <slot />
  </button>
</template>

<style>
.btn {
  display: inline-block;
  position: relative;
  border-radius: 10px;
  font-family: var(--font-sans);
  font-size: 1rem;
  margin: 0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
}
.ripple {
  position: absolute;
  border-radius: 100%;
  animation: ripple 0.5s;
  opacity: 0;
}
/* Primary */
.btn_primary {
  outline: 0;
  border: 0;
  background: var(--color-primary-10);
  padding: 6px 11px;
  color: var(--color-neutral-00);
  opacity: 1;
  transition: background 0.3s;
}
.btn_primary .ripple {
  background-color: var(--color-primary-10);
}
.btn_primary:hover,
.btn_primary:focus {
  color: var(--color-neutral-00);
  background: var(--color-primary-05);
}
.btn_primary_danger {
  background: var(--color-accent-red-10);
}
.btn_primary_danger .ripple {
  background-color: var(--color-accent-red-10);
}
.btn_primary_danger:hover,
.btn_primary_danger:focus {
  background: var(--color-accent-red-05);
}
.btn_primary[disabled],
.btn_primary[disabled]:hover {
  background: var(--color-neutral-06);
  cursor: default;
}
.btn_primary_wide {
  width: 100%;
}
/* Outline */
.btn_outline {
  outline: 0;
  border: 1px solid var(--color-primary-10);
  background: var(--color-neutral-00);
  padding: 5px 10px;
  color: var(--color-primary-10);
  transition: background 0.2s;
}
.btn_outline .ripple {
  background-color: var(--color-primary-10);
}
.btn_outline:hover,
.btn_outline:focus {
  background: var(--color-primary-00);
  color: var(--color-primary-10);
}
.btn_outline_danger {
  border-color: var(--color-accent-red-10);
  color: var(--color-accent-red-10);
}
.btn_outline_danger .ripple {
  background-color: var(--color-accent-red-10);
}
.btn_outline_danger:hover,
.btn_outline_danger:focus {
  color: var(--color-accent-red-10);
  background: var(--color-accent-red-00);
}
.btn_outline[disabled],
.btn_outline[disabled]:hover {
  background: transparent;
  border: 1px solid var(--color-neutral-06);
  color: var(--color-neutral-06);
  cursor: default;
}
.btn_outline_wide {
  width: 100%;
}
/* Text */
.btn_text {
  border: 0;
  background: transparent;
  color: var(--color-primary-10);
  padding: 5px 10px;
}
.btn_text .ripple {
  background-color: var(--color-primary-05);
}
.btn_text_danger,
.btn_text_danger:hover {
  color: var(--color-accent-red-10);
}
.btn_text_danger .ripple {
  background-color: var(--color-accent-red-05);
}
.btn_text[disabled],
.btn_text[disabled]:hover {
  color: var(--color-neutral-06);
  cursor: default;
}

@keyframes ripple {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
