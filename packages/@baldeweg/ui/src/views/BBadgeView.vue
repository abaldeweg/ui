<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BBadge - @baldeweg/ui' })
</script>

<template>
  <section>
    <p>
      <b-badge content="1"><b-icon type="cart" /></b-badge>text text text
    </p>
    <p>
      <b-badge content="99"><b-icon type="cart" /></b-badge>text text text
    </p>
    <p>
      <b-badge :content="0" hide-empty><b-icon type="cart" /></b-badge>text text
      text
    </p>
  </section>
</template>
