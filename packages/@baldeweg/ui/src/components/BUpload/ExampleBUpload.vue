<script setup>
import { ref } from 'vue'

const upload = ref(false)
</script>

<template>
  <BForm enctype="multipart/form-data" class="upload" @submit.prevent>
    <AppComponent component="BUpload" v-model="upload" />
  </BForm>
</template>
