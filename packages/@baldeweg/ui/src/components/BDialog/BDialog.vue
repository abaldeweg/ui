<script setup>
import { defineEmits, defineProps } from 'vue'

const emit = defineEmits(['close'])

defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div v-if="visible" class="dialog">
    <div class="overlay" @click="emit('close')" />

    <div class="body">
      <div class="content">
        <slot />
      </div>
      <div class="footer">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
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

.body {
  position: relative;
  border: 1px solid var(--color-neutral-02);
  border-radius: 10px;
  background: var(--color-neutral-00);
  max-width: 600px;
  margin: 60px auto;
  box-sizing: border-box;
}

.content {
  padding: 20px;
}

.footer {
  padding: 20px;
  text-align: right;
}
</style>
