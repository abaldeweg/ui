<script setup>
import { useTitle } from '@baldeweg/ui/composables/useTitle'
import { useColorScheme } from '@baldeweg/ui/composables/useColorScheme'
import i18n from '@/i18n.js'

useTitle({
  title: 'Home - Demo',
})

const { dark } = useColorScheme()
</script>

<template>
  <h1>{{ $t('welcome') }}</h1>

  Available locales: {{ i18n.global.availableLocales }}<br />
  Selected locale: {{ i18n.global.locale}}<br />

  Color Scheme: <input type="checkbox" v-model="dark"/>
</template>
