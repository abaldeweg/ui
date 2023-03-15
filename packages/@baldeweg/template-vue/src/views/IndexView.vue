<script setup>
import { useTitle } from '@baldeweg/ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useTitle({ title: t('welcome') })
</script>

<template>
  <BContainer size="m">
    <h1>{{ $t('welcome') }}</h1>
  </BContainer>
</template>
