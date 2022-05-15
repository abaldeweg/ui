<template>
  <header class="masthead">
    <slot />
  </header>
</template>

<script>
export default {
  name: 'b-masthead',
}
</script>

<style scoped>
.masthead {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid var(--color-neutral-02);
  height: var(--masthead-top-height);
  background: var(--color-neutral-00);
  box-sizing: border-box;
  width: 100%;
  z-index: 2;
}

@media print {
  .masthead {
    display: none;
  }
}
</style>

<style>
main {
  margin-top: var(--masthead-top-height);
}
</style>
