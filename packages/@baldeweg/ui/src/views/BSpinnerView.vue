<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BSpinner - @baldeweg/ui' })
</script>

<template>
  <article>
    <b-spinner size="l" />
    <b-spinner size="m" />
    <b-spinner size="s" />
  </article>
</template>
