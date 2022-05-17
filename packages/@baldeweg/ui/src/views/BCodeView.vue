<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BCode - @baldeweg/ui' })
</script>

<template>
  <b-code>function helper() { return = htmlspecialchars('Content'); }</b-code>
</template>
