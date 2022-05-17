<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BCode - @baldeweg/ui' })
</script>

<template>
  <BCode>function helper() { return = htmlspecialchars('Content'); }</BCode>
</template>
