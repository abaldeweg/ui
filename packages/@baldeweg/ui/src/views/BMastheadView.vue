<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BMasthead - @baldeweg/ui' })
</script>

<template>
  <BMasthead>
    <BMastheadItem position="start">start</BMastheadItem>

    <BMastheadItem position="center">center</BMastheadItem>

    <BMastheadItem position="end">end</BMastheadItem>
  </BMasthead>
</template>
