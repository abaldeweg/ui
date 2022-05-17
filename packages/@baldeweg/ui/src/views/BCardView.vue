<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BCard - @baldeweg/ui' })
</script>

<template>
  <article>
    <BCard title="Title" route="index">
      <template #image>
        <img src="@/assets/placeholder_16x9.jpg" alt="Image" />
      </template>

      <template #meta>
        <RouterLink :to="{ name: 'index' }">Meta</RouterLink> &bull; Meta
      </template>

      <template #content>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </template>
    </BCard>

    <BCard title="Title" route="index">
      <template #content>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </template>
    </BCard>
  </article>
</template>
