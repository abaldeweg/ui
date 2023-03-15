<script setup>
import { useLocale, useColorScheme } from '@baldeweg/ui'

useLocale()
useColorScheme()
</script>

<template>
  <BApp>
    <RouterView />
  </BApp>
</template>
