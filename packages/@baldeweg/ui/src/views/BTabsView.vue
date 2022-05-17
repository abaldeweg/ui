<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BTabs - @baldeweg/ui' })
</script>

<template>
  <b-tabs>
    <b-tabs-link v-for="n in 10" :key="n">
      <router-link :to="{ name: 'index' }">Item {{ n }}</router-link>
    </b-tabs-link>
  </b-tabs>
</template>
