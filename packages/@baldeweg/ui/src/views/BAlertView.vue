<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BAlert' })
</script>

<template>
  <div :style="{ margin: '20px' }">
    <BAlert>Message</BAlert>
    <BAlert type="error" closable elevated>Message</BAlert>
    <BAlert type="warning" closable elevated>Message</BAlert>
    <BAlert type="success" closable elevated>Message</BAlert>
    <BAlert type="info" closable elevated>Message</BAlert>
  </div>
</template>
