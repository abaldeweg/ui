<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BForm' })
</script>

<template>
  <AppComponent component="BForm">
    <template #buttons>
      <BButton design="outline">Reset</BButton>
      <BButton design="primary">Save</BButton>
    </template>
  </AppComponent>
</template>
