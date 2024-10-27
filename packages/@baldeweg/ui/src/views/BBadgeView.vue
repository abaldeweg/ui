<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BBadge' })
</script>

<template>
  <section>
    <p>
      <BBadge content="1" position="left"><BIcon type="cart" /></BBadge>text text text
    </p>
    <p>
      <BBadge content="99"><BIcon type="cart" /></BBadge>text text text
    </p>
    <p>
      <BBadge :content="0" hide-empty><BIcon type="cart" /></BBadge>text text
      text
    </p>
  </section>
</template>
