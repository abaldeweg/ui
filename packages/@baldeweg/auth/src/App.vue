<script setup>
import { useLocale } from '@baldeweg/ui/composables/useLocale'
import { useTheme } from '@baldeweg/ui/composables/useTheme'
import useAuth from '@/composables/useJWTAuth'

useLocale()
useTheme()

const auth = useAuth()
</script>

<template>
  <BApp>
    <BContainer size="m">
      <b-container size="s" v-if="!auth.state.isAuthenticated">
        <h1>{{ $t('login') }}</h1>
        <auth-login />
      </b-container>
      <RouterView />
    </BContainer>
  </BApp>
</template>
