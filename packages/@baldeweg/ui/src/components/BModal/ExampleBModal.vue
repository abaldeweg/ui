<script setup>
import { useRandomText } from '@/composables/useRandomText'

const { generateParagraphs } = useRandomText()

const text = generateParagraphs(5)
</script>

<template>
  <AppComponent component="BModal">
    <template #title>
      <BMaterialIcon :size="26">add</BMaterialIcon> Modal
    </template>
    <template #footer>Footer</template>
    <BContainer v-html="text" />
  </AppComponent>
</template>
