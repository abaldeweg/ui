<template>
  <div class="flex"><slot /></div>
</template>

<script>
export default {
  name: 'b-flex',
}
</script>

<style scoped>
.flex {
  overflow: auto;
  max-width: 1200px;
  margin: auto;
}
</style>
