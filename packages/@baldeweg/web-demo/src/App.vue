<script setup>
import { useLocale } from '@baldeweg/ui'
import { useTheme } from '@baldeweg/ui'

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
