<script setup>
defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['date', 'color', 'datetime-local', 'email', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week', 'file'].includes(value),
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
  <div class="input_group u:mb-xl">
    <div :class="['u:py-m input_item', { 'u:sr-only': hideLabel }]">
      <label :for=id>{{ label }}</label>
    </div>
    <div class="u:py-m">
      <input class="u:border u:border-neutral-04 u:bg-neutral-00 u:box-border u:rounded-xl u:w-full u:px-m u:py-m u:m-0 u:text-m u:text-neutral-10 input_input" v-bind="$attrs" :type="type" :value="modelValue" :name="name" :id="id"
        @input="emit('update:modelValue', $event.target.value)" />
    </div>
    <p v-if="help" class="input_helpline">
      {{ help }}
    </p>
  </div>
</template>

<style>
.input_group:last-child {
  margin-bottom: 0;
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
  color: var(--color-neutral-08);
}
</style>
