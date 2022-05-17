<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BBadge - @baldeweg/ui' })
</script>

<template>
  <section>
    <p>
      <BBadge content="1"><BIcon type="cart" /></BBadge>text text text
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
