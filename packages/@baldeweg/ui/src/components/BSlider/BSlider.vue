<template>
  <div class="slider">
    <slot />
  </div>
</template>

<style>
.slider {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 20px;
}
</style>
