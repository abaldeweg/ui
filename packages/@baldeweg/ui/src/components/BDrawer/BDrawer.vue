<template>
  <div class="drawer">
    <div
      class="drawer_overlay"
      :class="{ isActive: active, isInline: inline }"
      @click="closeMenu"
      v-if="collapsable"
    />

    <div
      class="drawer_container"
      :class="{ isActive: active, isInline: inline }"
    >
      <div class="drawer_header">
        <span class="drawer_close" @click="closeMenu" v-if="collapsable">
          <b-icon type="close" />
        </span>
      </div>

      <slot />
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from 'vue'
import BIcon from '../BIcon/BIcon.vue'

export default {
  name: 'b-drawer',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    collapsable: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BIcon,
  },
  setup(props, { emit }) {
    const state = reactive({
      x: null,
      y: null,
    })

    const { active } = toRefs(props)

    const openMenu = () => {
      emit('open-menu')
    }

    const closeMenu = () => {
      emit('close-menu')
    }

    watch(
      () => active,
      () => {
        active.value ? openMenu() : closeMenu()
      }
    )

    onMounted(() => {
      if (!props.collapsable) {
        if (window.screen.availWidth >= 768) {
          openMenu()
        }
      }
    })

    return { state, openMenu, closeMenu }
  },
}
</script>

<style scoped>
.drawer_overlay {
  visibility: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-neutral-00);
  opacity: 0;
  transition: visibility 0.2s, opacity 0.2s;
  z-index: 3;
}
.drawer_overlay.isActive {
  visibility: visible;
  opacity: 0.7;
}
.drawer_overlay.isInline {
  visibility: hidden;
  opacity: 0;
}
.drawer_container {
  display: block;
  visibility: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: -300px;
  border-right: 1px solid var(--color-neutral-02);
  background: var(--color-neutral-00);
  width: 300px;
  transition: visibility 0.2s, left 0.2s;
  z-index: 3;
}
.drawer_container.isActive {
  visibility: visible;
  left: 0;
}
.drawer_container.isInline {
  left: 0;
  width: 100%;
  height: 100vh;
  position: relative;
}
.drawer_header {
  border-bottom: 1px solid var(--color-neutral-02);
  height: var(--masthead-height);
  box-sizing: border-box;
}
.drawer_close {
  display: inline-block;
  border: 0;
  background: transparent;
  margin: 10px 0 0 20px;
  cursor: pointer;
}

@media print {
  .drawer_overlay,
  .drawer_container {
    display: none;
  }
}
</style>
