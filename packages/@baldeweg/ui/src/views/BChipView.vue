<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BChip - @baldeweg/ui' })
</script>

<template>
  <article>
    <b-chip>
      Label 1
      <template #action>X</template>
    </b-chip>

    <b-chip>Label 2</b-chip>
  </article>
</template>
