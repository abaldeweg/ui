<template>
  <div class="form-group" :class="{ hasButtons: buttons }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-form-group',
  props: {
    buttons: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.form-group {
  clear: both;
  margin-bottom: 20px;
  overflow: auto;
}
.form-group:last-child {
  margin-bottom: 0;
}
.form-group.hasButtons {
  text-align: right;
}
</style>
