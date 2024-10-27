<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BCode' })
</script>

<template>
  <BCode>function helper() { return = htmlspecialchars('Content'); }</BCode>
</template>
