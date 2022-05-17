<script setup>
defineProps({
  modelValue: null,
  noStyling: Boolean,
  event: Boolean,
  focus: Boolean,
})
</script>

<template>
  <input
    :class="{ 'form-input': !noStyling }"
    :modelValue="modelValue"
    :autofocus="focus"
    @input="$emit('update:modelValue', event ? $event : $event.target.value)"
  />
</template>

<style scoped>
.form-input {
  border: 1px solid var(--color-neutral-04);
  background: var(--color-neutral-00);
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  margin: 0;
  font-size: 1em;
  color: var(--color-neutral-10);
}
.form-input:hover,
.form-input:focus {
  border: 1px solid var(--color-primary-10);
  outline: none;
}
</style>
