<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BSpinner' })
</script>

<template>
  <article>
    <BSpinner size="l" />
    <BSpinner size="m" />
    <BSpinner size="s" />
  </article>
</template>
