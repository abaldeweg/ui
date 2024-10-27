<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BDivider' })
</script>

<template>
  <article>
    <BDivider size="l" />
    <BDivider size="m" />
    <BDivider size="s" />
    <BDivider size="xs" />
  </article>
</template>
