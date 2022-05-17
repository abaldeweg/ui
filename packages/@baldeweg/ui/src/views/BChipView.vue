<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BChip - @baldeweg/ui' })
</script>

<template>
  <article>
    <BChip>
      Label 1
      <template #action>X</template>
    </BChip>

    <BChip>Label 2</BChip>
  </article>
</template>
