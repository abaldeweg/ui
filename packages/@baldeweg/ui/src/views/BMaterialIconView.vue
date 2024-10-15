<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BMaterialIcon - @baldeweg/ui' })
</script>

<template>
  <BMaterialIcon :size="60" hover>home</BMaterialIcon>
  <BMaterialIcon :size="50" color="var(--color-primary-10)" hover>home</BMaterialIcon>
  <BMaterialIcon :size="50">home</BMaterialIcon>
</template>
