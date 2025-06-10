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
  <div class="upload" :class="{ upload_isDragging: isDragging }">
    <p class="upload_text">{{ text }}</p>
    <div class="upload_dropzone" @dragover="isDragging = true" @dragenter="isDragging = true"
      @dragleave="isDragging = false" @dragend="isDragging = false" @drop="isDragging = false">
      <BInput type="file" class="upload_input" event :id="id" :accept="accept"
        @change="emits('update:modelValue', $event.target.files[0])" aria-label="Upload" />
    </div>
  </div>
</template>

<style>
.upload {
  position: relative;
  height: 300px;
  border: 1px solid var(--color-neutral-02);
  border-radius: 10px;
}

.upload:hover,
.upload.upload_isDragging {
  border: 1px solid var(--color-primary-10);
}

.upload_text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}

.upload_dropzone {
  position: absolute;
  width: 100%;
  height: 100%;
}

.upload_input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.001;
}
</style>
