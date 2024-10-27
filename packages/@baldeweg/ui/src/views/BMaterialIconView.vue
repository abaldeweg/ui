<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BMaterialIcon' })
</script>

<template>
  <BMaterialIcon :size="60" hover>home</BMaterialIcon>
  <BMaterialIcon :size="50" color="var(--color-primary-10)" hover>home</BMaterialIcon>
  <BMaterialIcon :size="50">home</BMaterialIcon>
</template>
