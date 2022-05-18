<template>
  <fieldset class="fieldset">
    <slot />
  </fieldset>
</template>

<style scoped>
.fieldset {
  clear: both;
  border: 0 hidden;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  overflow: auto;
}
.fieldset:last-child {
  margin-bottom: 0;
}
</style>
