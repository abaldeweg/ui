<script setup>
defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['date', 'color', 'datetime-local', 'email', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week'].includes(value),
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  label: String,
  help: String,
  hideLabel: {
    type: Boolean,
    default: false,
  },
})

defineOptions({
  inheritAttrs: false,
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input_group">
    <div :class="['input_item', { visuallyHidden: hideLabel }]">
      <label :for=id>{{ label }}</label>
    </div>
    <div class="input_item">
      <input class="input_input" v-bind="$attrs" :type="type" :value="modelValue" :name="name" :id="id"
        @input="emit('update:modelValue', $event.target.value)" />
    </div>
    <p v-if="help" class="input_helpline">
      {{ help }}
    </p>
  </div>
</template>

<style>
.input_group {
  margin-bottom: 20px;
}

.input_group:last-child {
  margin-bottom: 0;
}

.input_item {
  padding: 5px 0;
}

.input_input {
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

.input_input:hover,
.input_input:focus {
  border: 1px solid var(--color-primary-10);
  outline: none;
}

input[type="color"].input_input {
  width: 90px;
  height: 40px;
}

input[type="range"].input_input {
  padding: 0;
}

.input_helpline {
  font-size: 0.8rem;
  color: var(--color-neutral-06);
}
</style>
