<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BAlert - @baldeweg/ui' })
</script>

<template>
  <article :style="{ margin: '20px' }">
    <b-alert>Alert</b-alert>
    <b-alert type="error">Alert</b-alert>
    <b-alert type="warning">Alert</b-alert>
    <b-alert type="success">Alert</b-alert>
  </article>
</template>
