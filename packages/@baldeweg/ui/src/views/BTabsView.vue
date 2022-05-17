<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BTabs - @baldeweg/ui' })
</script>

<template>
  <BTabs>
    <BTabsLink v-for="n in 10" :key="n">
      <RouterLink :to="{ name: 'index' }">Item {{ n }}</RouterLink>
    </BTabsLink>
  </BTabs>
</template>
