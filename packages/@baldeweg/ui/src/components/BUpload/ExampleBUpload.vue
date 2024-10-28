<script setup>
const upload = (file) => {
  console.log(file)
}
</script>

<template>
  <BForm enctype="multipart/form-data" class="upload" @submit.prevent>
    <AppComponent component="BUpload" @file="upload" />
  </BForm>
</template>
