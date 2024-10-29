<script setup>
import { ref } from 'vue'

const isVisible = ref(false)
</script>

<template>
  <AppComponent component="BDialog" @close="isVisible = false" :visible="isVisible">
    <p>Dialog</p>

    <template #actions>
      <BButton design="outline" :style="{ marginRight: '10px' }">No</BButton>
      <BButton design="primary" :style="{ marginRight: '10px' }">Yes</BButton>
    </template>
  </AppComponent>
</template>
