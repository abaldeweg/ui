<script setup>
defineProps({
  noMargin: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <form
    method="post"
    enctype="multipart/form-data"
    class="form"
    :class="{ noMargin }"
  >
    <slot />
  </form>
</template>

<style>
.form {
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0;
}
.form.noMargin {
  margin: 0;
}
</style>
