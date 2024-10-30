<script setup>
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({
  title: "Home",
  titleTemplate: '%s%separator%siteName',
  templateParams: { separator: ' - ', siteName: '@baldeweg/ui' },
  htmlAttrs: {
    lang: navigator.language,
  }
})
</script>

<template>
  <BApp id="app">
    <RouterView />
  </BApp>
</template>
