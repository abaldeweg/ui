<template>
  <div class="flex_row"><slot /></div>
</template>

<style scoped>
.flex_row {
  display: flex;
  width: 100%;
  flex-direction: column;
}

@media all and (min-width: 600px) {
  .flex_row {
    flex-direction: row;
  }
}
</style>
