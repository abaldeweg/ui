<template>
  <fieldset class="form-fieldset">
    <slot />
  </fieldset>
</template>

<script>
export default {
  name: 'b-form-fieldset',
}
</script>

<style scoped>
.form-fieldset {
  clear: both;
  border: 0 hidden;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  overflow: auto;
}
.form-fieldset:last-child {
  margin-bottom: 0;
}
</style>
