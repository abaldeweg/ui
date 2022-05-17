<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BButton - @baldeweg/ui' })

const log = (msg) => {
  console.log(msg)
}
</script>

<template>
  <article>
    <h2>Primary</h2>
    <BButton design="primary" type="submit" ripple @click="log">
      Button Primary
    </BButton>
    <BButton design="primary_danger" ripple>Button Danger</BButton>
    <BButton design="primary" disabled>Button Disabled</BButton>
    <br />
    <br />
    <BButton design="primary_wide" ripple>Button Wide</BButton>
    <br />
    <br />
    <BButton design="primary_wide" disabled>Button Disabled Wide</BButton>

    <h2>Outline</h2>
    <BButton design="outline" ripple>Button Outline</BButton>
    <BButton design="outline_danger" ripple>Button Danger</BButton>
    <BButton design="outline" disabled>Button Disabled</BButton>
    <br />
    <br />
    <BButton design="outline_wide" ripple>Button Wide</BButton>
    <br />
    <br />
    <BButton design="outline_wide" disabled>Button Disabled Wide</BButton>

    <h2>Text</h2>
    <BButton design="text" ripple>Button Text</BButton>
    <BButton design="text_danger" ripple>Button Danger</BButton>
    <BButton design="text" disabled>Button Disabled</BButton>
  </article>
</template>
