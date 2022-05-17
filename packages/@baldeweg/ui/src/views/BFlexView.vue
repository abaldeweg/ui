<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BFlex - @baldeweg/ui' })
</script>

<template>
  <BFlex>
    <BFlexRow>
      <BFlexCol>Column 1</BFlexCol>
      <BFlexCol>Column 2</BFlexCol>
    </BFlexRow>
  </BFlex>
</template>
