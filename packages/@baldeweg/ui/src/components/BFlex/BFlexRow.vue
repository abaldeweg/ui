<template>
  <div class="flex_row"><slot /></div>
</template>

<script>
export default {
  name: 'b-flex-row',
}
</script>

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
