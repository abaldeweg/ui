<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BFlex - @baldeweg/ui' })
</script>

<template>
  <b-flex>
    <b-flex-row>
      <b-flex-col>Column 1</b-flex-col>
      <b-flex-col>Column 2</b-flex-col>
    </b-flex-row>
  </b-flex>
</template>
