<template>
  <div class="subheader"><slot /></div>
</template>

<script>
export default {
  name: 'b-subheader',
}
</script>

<style scoped>
.subheader {
  color: var(--color-neutral-06);
  text-transform: uppercase;
  font-size: 0.8rem;
}
</style>
