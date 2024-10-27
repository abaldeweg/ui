<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BMasthead' })
</script>

<template>
  <BMasthead>
    <BMastheadItem position="start">start</BMastheadItem>

    <BMastheadItem position="center">center</BMastheadItem>

    <BMastheadItem position="end">end</BMastheadItem>
  </BMasthead>
</template>
