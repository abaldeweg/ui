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
  <div class="textarea_group">
    <div :class="['textarea_item', { visuallyHidden: hideLabel }]">
      <label :for=id>{{ label }}</label>
    </div>
    <div class="textarea_item">
      <textarea class="textarea_input" v-bind="$attrs" :value="modelValue" :name="name" :id="id"
        @input="emit('update:modelValue', $event.target.value)"></textarea>
    </div>
    <p v-if="help" class="textarea_helpline">
      {{ help }}
    </p>
  </div>
</template>

<style>
.textarea_group {
  margin-bottom: 20px;
}

.textarea_group:last-child {
  margin-bottom: 0;
}

.textarea_item {
  padding: 5px 0;
}

.textarea_input {
  border: 1px solid var(--color-neutral-04);
  background: var(--color-neutral-00);
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  padding: 5px 10px;
  margin: 0;
  font-size: 1rem;
  color: var(--color-neutral-10);
  min-height: 100px;
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
