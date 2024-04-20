<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useDraggable } from '@vueuse/core'
import { useLocale } from './composables/useLocale.js'

useLocale()

const el = ref(null)
const handle = ref(null)

const persistPosition = (pos) =>{
  localStorage.setItem('admin_position', JSON.stringify(pos))
}

const { style } = useDraggable(el, {
  initialValue: JSON.parse(localStorage.getItem('admin_position')),
  handle: handle,
  onEnd: persistPosition
})
</script>

<template>
  <BApp id="app">
    <RouterView />

    <div class="admin" ref="el" :style="style">
      <div class="admin_header" ref="handle">Admin</div>
      <div class="admin_body">
        <p>
          <RouterLink :to="{ name: 'index' }">Home</RouterLink>
        </p>
      </div>
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
  margin: 20px;
  box-sizing: border-box;
  z-index: 99999;
}
.admin_header {
  border-radius: 10px 10px 0 0;
  background: var(--color-neutral-02);
  padding: 5px 20px;
  cursor: move;
}
.admin_body {
  padding: 20px;
}
</style>
