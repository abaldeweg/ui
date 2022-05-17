<script setup>
defineProps({
  value: String,
  focus: Boolean,
})
</script>

<template>
  <textarea
    class="form-textarea"
    :value="value"
    :autofocus="focus"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)"
    @click="$emit('click', $event)"
    @contextmenu="$emit('contextmenu', $event)"
  />
</template>

<style scoped>
.form-textarea {
  border: 1px solid var(--color-neutral-04);
  background: var(--color-neutral-00);
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  margin: 0;
  font-size: 1em;
  color: var(--color-neutral-10);
}
.form-textarea:hover,
.form-textarea:focus {
  border: 1px solid var(--color-primary-10);
  outline: none;
}
</style>
