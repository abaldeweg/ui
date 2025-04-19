<script setup>
import 'monaco-editor/esm/vs/language/json/monaco.contribution'
import 'monaco-editor/esm/vs/language/css/monaco.contribution'
import 'monaco-editor/esm/vs/language/html/monaco.contribution'
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution'
import 'monaco-editor/esm/vs/basic-languages/monaco.contribution'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { ref, onMounted } from 'vue'

const props = defineProps({
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
  language: {
    type: String,
    default: 'json',
  },
})

defineOptions({
  inheritAttrs: false,
})

const emit = defineEmits(['update:modelValue'])

const editor = ref()

onMounted(() => {
  monaco.editor.create(editor.value, {
    value: props.modelValue,
    language: props.language,
    theme: 'vs-dark',
    automaticLayout: true,
  })
})
</script>

<template>
  <div class="editor_group">
    <div :class="['editor_item', { visuallyHidden: hideLabel }]">
      <label :for=id>{{ label }}</label>
    </div>
    <div class="editor_item">
      <div class="editor_input" v-bind="$attrs" id="editor" :name="name" ref="editor"
        @input="emit('update:modelValue', $event.target.value)"></div>
    </div>
    <p v-if="help" class="editor_helpline">
      {{ help }}
    </p>
  </div>
</template>

<style>
.editor_group {
  margin-bottom: 20px;
}

.editor_group:last-child {
  margin-bottom: 0;
}

.editor_item {
  padding: 5px 0;
}

.editor_input {
  border: 1px solid var(--color-neutral-04);
  background: var(--color-neutral-00);
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  height: 30vh;
  padding: 5px 10px;
  margin: 0;
  font-size: 1rem;
  color: var(--color-neutral-10);
}

.editor_input:hover,
.editor_input:focus {
  border: 1px solid var(--color-primary-10);
  outline: none;
}

.editor_helpline {
  font-size: 0.8rem;
  color: var(--color-neutral-06);
}
</style>
