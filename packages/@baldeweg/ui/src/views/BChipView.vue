<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BChip' })
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
