<script setup>
defineProps({
  modelValue: [String, Number],
  noStyling: Boolean,
  event: Boolean,
  focus: Boolean,
})
</script>

<template>
  <input
    :class="{ input: !noStyling }"
    :value="modelValue"
    :autofocus="focus"
    @input="$emit('update:modelValue', event ? $event : $event.target.value)"
  />
</template>

<style>
.input {
  border: 1px solid var(--color-neutral-04);
  background: var(--color-neutral-00);
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  padding: 5px 10px;
  margin: 0;
  font-size: 1rem;
  color: var(--color-neutral-10);
}
.input:hover,
.input:focus {
  border: 1px solid var(--color-primary-10);
  outline: none;
}
</style>
