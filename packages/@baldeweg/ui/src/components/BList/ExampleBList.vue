<script setup>
import { ref } from 'vue'

const subtitle = ref(true)
const options = ref(true)
const image = ref(true)
</script>

<template>
  <AppComponent component="BList">
    <template #image v-if="image">
      <img src="@/assets/placeholder_1x1.jpg" alt="Icon" />
    </template>

    <template #title>
      text text text text text text text text text text
    </template>

    <template #options v-if="options">
      <BIcon type="kebab" />
    </template>

    <template #subtitle v-if="subtitle">
      <RouterLink :to="{ name: 'index' }">Subtitle</RouterLink> &bull; Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text
    </template>
  </AppComponent>
</template>
