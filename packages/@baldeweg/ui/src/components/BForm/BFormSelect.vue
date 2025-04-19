<script setup>
defineProps({
  items: Array,
  itemKey: {
    type: String,
    default: 'key',
  },
  itemValue: {
    type: String,
    default: 'value',
  },
  modelValue: [Number, String],
  focus: Boolean,
  allowEmpty: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <select
    class="select"
    :value="modelValue"
    :autofocus="focus"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option value="" v-if="allowEmpty"></option>
    <option :value="item[itemKey]" v-for="item in items" :key="item[itemKey]">
      {{ item[itemValue] }}
    </option>
  </select>
</template>

<style>
.select {
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
.select:hover,
.select:focus {
  border: 1px solid var(--color-primary-10);
  outline: none;
}
</style>
