<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BDivider - @baldeweg/ui' })
</script>

<template>
  <article>
    <b-divider size="l" />
    <b-divider size="m" />
    <b-divider size="s" />
    <b-divider size="xs" />
  </article>
</template>
