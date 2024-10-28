<script setup>
import { ref } from 'vue'

const image = ref(true)
const subtitle = ref(true)
const text = ref(true)
const actions = ref(true)
</script>

<template>
  <AppComponent component="BCard">
    <template #image v-if="image">
      <img src="@/assets/placeholder_16x9.jpg" alt="Example Image" width="300" />
    </template>

    <template #title>Title</template>

    <template #subtitle v-if="subtitle">Subtitle</template>

    <template #text v-if="text">Text</template>

    <template #actions v-if="actions">
      <BButton design="outline" :style="{ marginRight: '10px' }">Action 1</BButton>
      <BButton design="outline">Action 2</BButton>
    </template>
  </AppComponent>
</template>
