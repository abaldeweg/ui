<template>
  <b-form enctype="multipart/form-data" class="upload" @submit.prevent>
    <b-upload
      id="file"
      text="Drop the file in this area or click here."
      accept="image/jpeg, image/jpg, image/png, image/webp"
      @file="upload"
    />
  </b-form>
</template>

<script>
import BUpload from '../components/BUpload/BUpload.vue'
import BForm from '@/components/BForm/BForm.vue'

export default {
  name: 'b-upload-view',
  components: {
    BUpload,
    BForm,
  },
  setup() {
    const upload = (file) => {
      console.log(file)
    }

    return { upload }
  },
}
</script>
