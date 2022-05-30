<script setup>
defineProps({
  noMargin: Boolean,
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

<style scoped>
.form {
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0;
}
.form.noMargin {
  margin: 0;
}
</style>
