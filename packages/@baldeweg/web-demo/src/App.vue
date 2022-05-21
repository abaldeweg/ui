<script setup>
import { useLocale, useTheme } from '@baldeweg/ui'

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
