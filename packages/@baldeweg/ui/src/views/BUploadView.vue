<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BUpload - @baldeweg/ui' })

const upload = (file) => {
  console.log(file)
}
</script>

<template>
  <BForm enctype="multipart/form-data" class="upload" @submit.prevent>
    <BUpload
      id="file"
      text="Drop the file in this area or click here."
      accept="image/jpeg, image/jpg, image/png, image/webp"
      @file="upload"
    />
  </BForm>
</template>
