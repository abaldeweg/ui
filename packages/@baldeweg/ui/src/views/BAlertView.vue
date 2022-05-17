<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BAlert - @baldeweg/ui' })
</script>

<template>
  <article :style="{ margin: '20px' }">
    <BAlert>Alert</BAlert>
    <BAlert type="error">Alert</BAlert>
    <BAlert type="warning">Alert</BAlert>
    <BAlert type="success">Alert</BAlert>
  </article>
</template>
