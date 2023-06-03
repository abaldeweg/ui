<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useDraggable } from '@vueuse/core'
import { useLocale } from './composables/useLocale.js'

useLocale()

const el = ref(null)

const { style } = useDraggable(el, {
  initialValue: { x: 20, y: 500 },
})
</script>

<template>
  <BApp id="app">
    <RouterView />

    <div class="admin" ref="el" :style="style">
      <p>
        <RouterLink :to="{ name: 'index' }">Home</RouterLink>
      </p>
    </div>
  </BApp>
</template>

<style scoped>
.admin {
  position: fixed;
  width: 200px;
  border: 1px solid var(--color-neutral-04);
  border-radius: 10px;
  background: var(--color-neutral-00);
  padding: 20px;
  margin: 20px;
  box-sizing: border-box;
  z-index: 99999;
}
</style>
