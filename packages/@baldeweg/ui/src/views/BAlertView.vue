<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BAlert - @baldeweg/ui' })
</script>

<template>
  <div :style="{ margin: '20px' }">
    <BAlert>Message</BAlert>
    <BAlert type="error" closable>Message</BAlert>
    <BAlert type="warning" closable>Message</BAlert>
    <BAlert type="success" closable>Message</BAlert>
    <BAlert type="info" closable>Message</BAlert>
  </div>
</template>
