<script setup>
import { useTitle } from '@baldeweg/ui/composables/useTitle'

useTitle({
  title: 'Home - Demo',
})
</script>

<template>
  <h1>{{ $t('welcome') }}</h1>
</template>
