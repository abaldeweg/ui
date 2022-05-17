<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BSpinner - @baldeweg/ui' })
</script>

<template>
  <article>
    <BSpinner size="l" />
    <BSpinner size="m" />
    <BSpinner size="s" />
  </article>
</template>
