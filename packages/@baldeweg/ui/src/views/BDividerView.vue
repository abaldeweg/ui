<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BDivider - @baldeweg/ui' })
</script>

<template>
  <article>
    <BDivider size="l" />
    <BDivider size="m" />
    <BDivider size="s" />
    <BDivider size="xs" />
  </article>
</template>
