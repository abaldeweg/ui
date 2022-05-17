<script setup>
import { RouterView } from 'vue-router'
import { useLocale } from '@baldeweg/ui/composables/useLocale'
import { useTheme } from '@baldeweg/ui/composables/useTheme'

useLocale()
useTheme()
</script>

<template>
  <BApp>
    <BContainer size="m">
      <RouterView />
    </BContainer>
  </BApp>
</template>
