<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BAlert - @baldeweg/ui' })
</script>

<template>
  <article :style="{ margin: '20px' }">
    <BAlert>Alert</BAlert>
    <BAlert type="error" canHide>Alert</BAlert>
    <BAlert type="warning" canHide>Alert</BAlert>
    <BAlert type="success" canHide>Alert</BAlert>
  </article>
</template>
