<script setup>
import { useLocale } from '@baldeweg/ui/composables/useLocale'
import { useColorScheme } from '@baldeweg/ui/composables/useColorScheme'

useLocale()
useColorScheme()
</script>

<template>
  <BApp>
    <BContainer size="m">
      <RouterView />
    </BContainer>
  </BApp>
</template>
