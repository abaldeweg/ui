<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BAlert - @baldeweg/ui' })
</script>

<template>
  <div :style="{ margin: '20px' }">
    <BAlert>Alert</BAlert>
    <BAlert type="error" hidable>Alert</BAlert>
    <BAlert type="warning" hidable>Alert</BAlert>
    <BAlert type="success" hidable>Alert</BAlert>
  </div>
</template>
