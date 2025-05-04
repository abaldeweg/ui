<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <h1 class="green">{{ msg }}</h1>
  <p>
    You’ve successfully created a new project with
    <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> and
    <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
  </p>
</template>
