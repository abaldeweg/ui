<script setup>
defineProps({
  modelValue: String,
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  label: String,
  hideLabel: {
    type: Boolean,
    default: false,
  },
  help: String,
})

defineOptions({
  inheritAttrs: false,
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="textarea_group u:mb-xl">
    <div :class="['u:py-m textarea_item', { 'u:sr-only': hideLabel }]">
      <label :for=id>{{ label }}</label>
    </div>
    <div class="u:py-m">
      <textarea class="u:border u:border-neutral-04 u:bg-neutral-00 u:box-border u:rounded-xl u:w-full u:px-m u:py-m u:m-0 u:text-m u:text-neutral-10 textarea_input" v-bind="$attrs" :value="modelValue" :name="name" :id="id"
        @input="emit('update:modelValue', $event.target.value)"></textarea>
    </div>
    <p v-if="help" class="textarea_helpline">
      {{ help }}
    </p>
  </div>
</template>

<style>
.textarea_group:last-child {
  margin-bottom: 0;
}

.textarea_input {
  resize: vertical;
}

.textarea_input:hover,
.textarea_input:focus {
  border: 1px solid var(--color-primary-10);
  outline: none;
}

.textarea_helpline {
  font-size: 0.8rem;
  color: var(--color-neutral-06);
}
</style>
