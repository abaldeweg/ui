<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BAlert - @baldeweg/ui' })
</script>

<template>
  <div :style="{ margin: '20px' }">
    <BAlert>Message</BAlert>
    <BAlert type="error" hidable>Message</BAlert>
    <BAlert type="warning" hidable>Message</BAlert>
    <BAlert type="success" hidable>Message</BAlert>
  </div>
</template>
