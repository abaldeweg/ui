<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 600,
  },
  closeButton: {
    type: Boolean,
    default: true
  },
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
  document.body.classList.remove('isModalOpen')
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && props.modelValue) {
    close()
  }
}

onMounted(() => {
  document.body.classList.add('isModalOpen')
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.body.classList.remove('isModalOpen')
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div v-if="modelValue" class="modal">
    <div class="overlay" @click="close" />

    <div class="inner" :style="{ maxWidth: width + 'px' }">
      <div class="header">
        <h2 class="title" v-if="$slots.title">
          <slot name="title" />
        </h2>
        <span class="close" @click="close" v-if="closeButton">
          <BMaterialIcon :size="26" hover>close</BMaterialIcon>
        </span>
      </div>

      <div class="body">
        <slot />
      </div>

      <div class="footer" v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: var(--color-neutral-00);
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.inner {
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid var(--color-neutral-02);
  border-radius: 10px;
  background: var(--color-neutral-00);
  height: calc(100vh - 120px);
  margin: 60px auto;
  box-sizing: border-box;
}

.header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-neutral-02);
  padding: 5px 20px;
}

.title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: normal;
  flex-grow: 1;
  margin: 0;
}

.close {
  float: right;
}

.body {
  flex-grow: 1;
  height: calc(100vh - 90px);
  overflow-y: auto;
}

.footer {
  border-top: 1px solid var(--color-neutral-02);
  padding: 20px;
}
</style>

<style>
body.isModalOpen {
  overflow: hidden;
}
</style>
