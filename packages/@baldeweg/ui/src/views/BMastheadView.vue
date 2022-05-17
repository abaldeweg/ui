<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BMasthead - @baldeweg/ui' })
</script>

<template>
  <BMasthead>
    <BMastheadItem type="start">start</BMastheadItem>

    <BMastheadItem type="center">center</BMastheadItem>

    <BMastheadItem type="end">end</BMastheadItem>
  </BMasthead>
</template>
