<script setup>
import { ref } from 'vue'

const upload = ref(false)
</script>

<template>
  <AppComponent component="BUpload" v-model="upload" />
</template>
