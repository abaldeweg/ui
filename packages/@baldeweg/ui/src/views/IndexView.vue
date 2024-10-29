<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'Home' })
</script>

<template>
  <BContainer size="s">
    <h1>@baldeweg/ui</h1>

    <ul>
      <li>
        <RouterLink :to="{ name: 'component' }">Components</RouterLink>
      </li>
    </ul>
  </BContainer>
</template>
