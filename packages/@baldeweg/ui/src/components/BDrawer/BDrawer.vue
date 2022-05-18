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
      class="overlay"
      :class="{ isActive: active, isInline: inline }"
      @click="$emit('close-menu')"
      v-if="collapsable"
    />

    <div class="container" :class="{ isActive: active, isInline: inline }">
      <div class="header">
        <span class="close" @click="$emit('close-menu')" v-if="collapsable">
          <BIcon type="close" />
        </span>
      </div>

      <slot />
    </div>
  </div>
</template>

<style scoped>
.overlay {
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
.overlay.isActive {
  visibility: visible;
  opacity: 0.7;
}
.overlay.isInline {
  visibility: hidden;
  opacity: 0;
}
.container {
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
.container.isActive {
  visibility: visible;
  left: 0;
}
.container.isInline {
  left: 0;
  width: 100%;
  height: 100vh;
  position: relative;
}
.header {
  border-bottom: 1px solid var(--color-neutral-02);
  height: var(--masthead-height);
  box-sizing: border-box;
}
.close {
  display: inline-block;
  border: 0;
  background: transparent;
  margin: 10px 0 0 20px;
  cursor: pointer;
}

@media print {
  .overlay,
  .container {
    display: none;
  }
}
</style>
