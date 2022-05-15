<template>
  <article>
    <span @click="showDropdown" v-if="$slots.selector" ref="selector">
      <slot name="selector" />
    </span>

    <div
      class="dropdown_overlay"
      :class="{
        isActive: state.show,
      }"
      @click="hideDropdown"
    />

    <ul
      class="dropdown"
      :class="{
        isActive: state.show,
      }"
      :style="{
        top: state.top,
        left: state.left,
      }"
      @click="!keepOpen ? hideDropdown() : null"
      ref="dropdown"
    >
      <slot />
    </ul>
  </article>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'b-dropdown',
  props: {
    position: {
      type: String,
      default: 'selector',
      validator(value) {
        return ['selector', 'mouse', 'bottom'].indexOf(value) !== -1
      },
    },
    keepOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const state = reactive({
      show: false,
      top: 0,
      left: 0,
    })

    const selector = ref(null)
    const dropdown = ref(null)

    const showDropdown = (event) => {
      state.show = true
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
        state.left = clickX + 'px'
        if (clickX + dimensionWidth > clientWidth) {
          state.left = clickX - dimensionWidth + 'px'
        }
        state.top = clickY + 'px'
        if (clickY + dimensionHeight > clientHeight) {
          state.top = clickY - dimensionHeight + 'px'
        }
        return
      }

      if ('bottom' === props.position) {
        state.left = selectorX + 'px'
        if (selectorX + dimensionWidth > clientWidth) {
          state.left = selectorX - dimensionWidth + selectorWidth + 'px'
        }
        state.top = selectorY + selectorHeight + 'px'
        if (selectorY + dimensionHeight > clientHeight) {
          state.top = selectorY - dimensionHeight + 'px'
        }
        return
      }

      state.left = selectorX + 'px'
      if (selectorX + dimensionWidth > clientWidth) {
        state.left = selectorX - dimensionWidth + selectorWidth + 'px'
      }
      state.top = selectorY + 'px'
      if (selectorY + dimensionHeight > clientHeight) {
        state.top = selectorY - dimensionHeight + selectorHeight + 'px'
      }
    }

    const hideDropdown = () => {
      state.show = false
    }

    return { state, selector, dropdown, showDropdown, hideDropdown }
  },
}
</script>

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
