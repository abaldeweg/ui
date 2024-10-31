<script setup>
import { ref } from 'vue'

defineProps({
  id: String,
  text: String,
  accept: String,
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(["update:modelValue"])

const isDragging = ref(false)
</script>

<template>
  <div class="upload" :class="{ isDragging }">
    <p class="text">{{ text }}</p>
    <div
      class="dropzone"
      @dragover="isDragging = true"
      @dragenter="isDragging = true"
      @dragleave="isDragging = false"
      @dragend="isDragging = false"
      @drop="isDragging = false"
    >
      <b-form-input
        type="file"
        class="input"
        event
        :id="id"
        :accept="accept"
        @change="emits('update:modelValue', $event.target.files[0])"
        aria-label="Upload"
      />
    </div>
  </div>
</template>

<style scoped>
.upload {
  position: relative;
  height: 300px;
  border: 1px solid var(--color-neutral-02);
  border-radius: 10px;
}
.upload:hover,
.upload.isDragging {
  border: 1px solid var(--color-primary-10);
}
.text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}
.dropzone {
  position: absolute;
  width: 100%;
  height: 100%;
}
.input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.001;
}
</style>
