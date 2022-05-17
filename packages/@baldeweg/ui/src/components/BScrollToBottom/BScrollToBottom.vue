<script setup>
import { computed, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'

const props = defineProps({
  width: Number,
  height: Number,
})

const el = ref(null)
const isScrolledToBottom = ref(true)

const width = computed(() => {
  return props.width !== 0 ? props.width + 'px' : null
})

const height = computed(() => {
  return props.height !== 0
    ? props.height + 'px'
    : 'calc(100vh - var(--masthead-height))'
})

const scrollToBottom = () => {
  if (!isScrolledToBottom.value) return

  el.value.scrollTop = el.value.scrollHeight
}

onMounted(scrollToBottom)

onBeforeUpdate(() => {
  isScrolledToBottom.value =
    el.value.scrollHeight - el.value.clientHeight <= el.value.scrollTop
})

onUpdated(scrollToBottom)
</script>

<template>
  <div class="scroll-to-bottom" :style="{ width, height }" ref="el">
    <slot />
  </div>
</template>

<style scoped>
.scroll-to-bottom {
  overflow-y: scroll;
}
</style>
