<script setup>
import { ref } from 'vue'

const props = defineProps({
  position: {
    type: String,
    default: 'selector',
    validator(value) {
      return ['selector', 'mouse', 'bottom'].includes(value)
    },
  },
  keepOpen: Boolean,
})

const show = ref(false)
const top = ref(0)
const left = ref(0)

const selector = ref(null)
const dropdown = ref(null)

const showDropdown = (event) => {
  show.value = true
  dropdown.value.style.display = 'block'

  const position = selector.value.getBoundingClientRect()
  const selectorY = position.y
  const selectorX = position.x
  const selectorWidth = selector.value.offsetWidth
  const selectorHeight = selector.value.offsetHeight
  const clickY = event.clientY
  const clickX = event.clientX
  const clientWidth = window.innerWidth
  const clientHeight = window.innerHeight
  const dimensionWidth = dropdown.value.offsetWidth
  const dimensionHeight = dropdown.value.offsetHeight

  dropdown.value.style.display = null

  if ('mouse' === props.position) {
    left.value = clickX + 'px'
    if (clickX + dimensionWidth > clientWidth) {
      left.value = clickX - dimensionWidth + 'px'
    }
    top.value = clickY + 'px'
    if (clickY + dimensionHeight > clientHeight) {
      top.value = clickY - dimensionHeight + 'px'
    }
    return
  }

  if ('bottom' === props.position) {
    left.value = selectorX + 'px'
    if (selectorX + dimensionWidth > clientWidth) {
      left.value = selectorX - dimensionWidth + selectorWidth + 'px'
    }
    top.value = selectorY + selectorHeight + 'px'
    if (selectorY + dimensionHeight > clientHeight) {
      top.value = selectorY - dimensionHeight + 'px'
    }
    return
  }

  left.value = selectorX + 'px'
  if (selectorX + dimensionWidth > clientWidth) {
    left.value = selectorX - dimensionWidth + selectorWidth + 'px'
  }
  top.value = selectorY + 'px'
  if (selectorY + dimensionHeight > clientHeight) {
    top.value = selectorY - dimensionHeight + selectorHeight + 'px'
  }
}
</script>

<template>
  <article>
    <span @click="showDropdown" v-if="$slots.selector" ref="selector">
      <slot name="selector" />
    </span>

    <div
      class="dropdown_overlay"
      :class="{
        isActive: show,
      }"
      @click="show = false"
    />

    <ul
      class="dropdown"
      :class="{
        isActive: show,
      }"
      :style="{
        top: top,
        left: left,
      }"
      @click="!keepOpen ? (show = false) : null"
      ref="dropdown"
    >
      <slot />
    </ul>
  </article>
</template>

<style scoped>
.dropdown {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 200px;
  max-width: 90%;
  border-radius: 5px;
  border: 1px solid var(--color-neutral-02);
  background: var(--color-neutral-00);
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
  max-height: 300px;
  overflow: auto;
}
.dropdown_overlay {
  display: none;
}
.dropdown_overlay.isActive {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}
.dropdown.isActive {
  display: block;
}

@media all and (min-width: 400px) {
  .dropdown {
    max-width: 350px;
  }
}
</style>
