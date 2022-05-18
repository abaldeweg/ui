<template>
  <div class="row">
    <slot />
  </div>
</template>

<style scoped>
.row {
  display: flex;
  width: 100%;
  flex-direction: column;
}

@media all and (min-width: 600px) {
  .row {
    flex-direction: row;
  }
}
</style>
