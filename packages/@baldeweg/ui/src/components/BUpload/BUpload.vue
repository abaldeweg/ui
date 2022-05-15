<template>
  <div class="upload" :class="{ isDragging: isDragging }">
    <p class="upload_text">{{ text }}</p>
    <div
      class="upload_dropzone"
      @dragover="isDragging = true"
      @dragenter="isDragging = true"
      @dragleave="isDragging = false"
      @dragend="isDragging = false"
      @drop="isDragging = false"
    >
      <b-form-input
        type="file"
        class="upload_input"
        event
        :id="id"
        :accept="accept"
        @change="upload($event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-upload',
  props: {
    id: String,
    text: String,
    accept: String,
  },
  setup(_props, { emit }) {
    var isDragging = false

    const upload = (event) => {
      emit('file', event.target.files[0])
    }

    return { isDragging, upload }
  },
}
</script>

<style scoped>
.upload {
  position: relative;
  height: 300px;
  border: 1px solid var(--color-neutral-02);
  border-radius: 5px;
}
.upload.isDragging {
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
