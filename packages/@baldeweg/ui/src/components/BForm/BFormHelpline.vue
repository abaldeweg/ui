<template>
  <p class="form_helpline">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'b-form-helpline',
}
</script>

<style scoped>
.form_helpline {
  font-size: 0.8rem;
  color: var(--color-neutral-08);
}
</style>
