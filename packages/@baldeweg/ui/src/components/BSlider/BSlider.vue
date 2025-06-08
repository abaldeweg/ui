<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BMaterialIcon from '../BMaterialIcon/BMaterialIcon.vue'

const slider = ref(null)

// Updates the visibility of the slider arrows based on the scroll position
const updateSliderEdges = () => {
  if (!slider.value || !slider.value.querySelector('.slider_body')) return
  const body = slider.value.querySelector('.slider_body')
  const isStart = body.scrollLeft === 0
  const isEnd = body.scrollLeft + body.clientWidth >= body.scrollWidth - 1
  slider.value.querySelector('.slider_arrow_left').classList.toggle('isVisible', !isStart)
  slider.value.querySelector('.slider_arrow_right').classList.toggle('isVisible', !isEnd)
}

// Scrolls the slider by a specified number of pixels
const scroll = (pixels) => {
  if (!slider.value || !slider.value.querySelector('.slider_body')) return
  slider.value.querySelector('.slider_body').scrollBy({ left: pixels, behavior: 'smooth' })
}

onMounted(() => {
  if (!slider.value || !slider.value.querySelector('.slider_body')) return
  slider.value.querySelector('.slider_body').addEventListener('scroll', updateSliderEdges)
  updateSliderEdges()
})

onUnmounted(() => {
  if (!slider.value || !slider.value.querySelector('.slider_body')) return
  slider.value.querySelector('.slider_body').removeEventListener('scroll', updateSliderEdges)
})
</script>

<template>
  <div class="slider" ref="slider">
    <BMaterialIcon class="slider_arrow_left" color="var(--color-neutral-00)" :size="40" hover @click="scroll(-200)"
      aria-hidden="true">chevron_left
    </BMaterialIcon>
    <div class="slider_body" tabindex="0">
      <slot />
    </div>
    <BMaterialIcon class="slider_arrow_right" color="var(--color-neutral-00)" :size="40" hover @click="scroll(200)"
      aria-hidden="true">chevron_right
    </BMaterialIcon>
  </div>
</template>

<style>
.slider {
  position: relative;
  width: 100%;
}

.slider_body {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.slider_arrow_left,
.slider_arrow_right {
  position: absolute;
  top: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-neutral-08);
  z-index: 1;
  user-select: none;
  transform: translateY(-50%);
}

.slider:hover .slider_arrow_left.isVisible,
.slider:hover .slider_arrow_right.isVisible {
  display: flex;
}

.slider:hover .slider_arrow_left.isVisible {
  left: 0;
}

.slider:hover .slider_arrow_right.isVisible {
  right: 0;
}

.slider_arrow_left:focus,
.slider_arrow_right:focus {
  outline: 2px solid var(--color-accent-blue-10);
}
</style>
