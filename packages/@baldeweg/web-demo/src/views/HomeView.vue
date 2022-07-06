<script setup>
import { useTitle } from '@baldeweg/ui/composables/useTitle'
import i18n from '@/i18n.js'

useTitle({
  title: 'Home - Demo',
})
</script>

<template>
  <h1>{{ $t('welcome') }}</h1>

  Available locales: {{ i18n.global.availableLocales }}<br />
  Selected locale: {{ i18n.global.locale}}<br />
</template>
