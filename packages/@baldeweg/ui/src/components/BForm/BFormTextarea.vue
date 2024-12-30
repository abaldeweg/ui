<script setup>
defineProps({
  modelValue: String,
  focus: Boolean,
})
</script>

<template>
  <textarea
    class="textarea"
    :value="modelValue"
    :autofocus="focus"
    @input="$emit('update:modelValue', $event.target.value)"
    @click="$emit('click', $event)"
    @contextmenu="$emit('contextmenu', $event)"
  />
</template>

<style>
.textarea {
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
.textarea:hover,
.textarea:focus {
  border: 1px solid var(--color-primary-10);
  outline: none;
}
</style>
