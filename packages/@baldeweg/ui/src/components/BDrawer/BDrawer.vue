<script setup>
import { onMounted, toRefs, watch } from 'vue'

const props = defineProps({
  active: Boolean,
  collapsable: Boolean,
  inline: Boolean,
})

const emit = defineEmits(['open-menu', 'close-menu'])

const { active } = toRefs(props)

watch(
  () => active,
  () => {
    active.value ? emit('open-menu') : emit('close-menu')
  }
)

onMounted(() => {
  if (!props.collapsable) {
    if (window.screen.availWidth >= 768) {
      emit('open-menu')
    }
  }
})
</script>

<template>
  <div class="drawer">
    <div
      class="drawer_overlay"
      :class="{ isActive: active, isInline: inline }"
      @click="$emit('close-menu')"
      v-if="collapsable"
    />

    <div
      class="drawer_container"
      :class="{ isActive: active, isInline: inline }"
    >
      <div class="drawer_header">
        <span
          class="drawer_close"
          @click="$emit('close-menu')"
          v-if="collapsable"
        >
          <BIcon type="close" />
        </span>
      </div>

      <slot />
    </div>
  </div>
</template>

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
