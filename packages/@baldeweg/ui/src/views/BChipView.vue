<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BChip - @baldeweg/ui' })
</script>

<template>
  <article>
    <BChip hover>
      Label 1
      <template #action
        ><BIcon type="close" :size="10" color="var(--color-neutral-08)"
      /></template>
    </BChip>

    <BChip>Label 2</BChip>
  </article>
</template>
