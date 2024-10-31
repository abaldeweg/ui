<script setup>
import { useRandomText } from '@/composables/useRandomText.js'

const { generateParagraph } = useRandomText()
</script>

<template>
  <AppComponent component="BList">
    <template #start>
      <RouterLink :to="route">
        <img src="@/assets/placeholder_1x1.jpg" alt="Icon" />
      </RouterLink>
    </template>

      <template #title>Title</template>
      <template #subtitle>Subtitle</template>
      {{generateParagraph(10,false)}}

    <template #end>
      <BMaterialIcon :size="32" hover>more_vert</BMaterialIcon>
    </template>
  </AppComponent>
</template>
