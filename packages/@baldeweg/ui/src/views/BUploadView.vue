<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BUpload - @baldeweg/ui' })

const upload = (file) => {
  console.log(file)
}
</script>

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
