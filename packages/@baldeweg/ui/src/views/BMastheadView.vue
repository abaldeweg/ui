<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BMasthead - @baldeweg/ui' })
</script>

<template>
  <b-masthead>
    <b-masthead-item type="start">start</b-masthead-item>

    <b-masthead-item type="center">center</b-masthead-item>

    <b-masthead-item type="end">end</b-masthead-item>
  </b-masthead>
</template>
