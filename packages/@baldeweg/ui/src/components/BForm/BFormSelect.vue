<template>
  <select
    class="form-select"
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

<script>
export default {
  name: 'b-form-select',
  props: {
    items: {
      type: Array,
    },
    itemKey: {
      type: String,
      default: 'key',
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    modelValue: [Number, String],
    focus: {
      type: Boolean,
      default: false,
    },
    allowEmpty: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.form-select {
  border: 1px solid var(--color-neutral-04);
  background: var(--color-neutral-00);
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  margin: 0;
  font-size: 1em;
  color: var(--color-neutral-10);
}
.form-select:hover,
.form-select:focus {
  border: 1px solid var(--color-primary-10);
  outline: none;
}
</style>
