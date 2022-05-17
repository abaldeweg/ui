<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BTooltip - @baldeweg/ui' })
</script>

<template>
  <article>
    <b-tooltip position="top" text="Text">
      <button style="width: 300px">Tooltip Top</button>
    </b-tooltip>
    <b-tooltip position="bottom" text="Text">
      <button style="width: 300px">Tooltip Bottom</button>
    </b-tooltip>
    <b-tooltip position="left" text="Text">
      <button style="width: 300px">Tooltip Left</button>
    </b-tooltip>
    <b-tooltip position="right" text="Text">
      <button style="width: 300px">Tooltip Right</button>
    </b-tooltip>

    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>

    <b-tooltip position="top" text="Text">
      <button style="width: 300px">Tooltip Top</button>
    </b-tooltip>
    <b-tooltip position="bottom" text="Text">
      <button style="width: 300px">Tooltip Bottom</button>
    </b-tooltip>
    <b-tooltip position="left" text="Text">
      <button style="width: 300px">Tooltip Left</button>
    </b-tooltip>
    <b-tooltip position="right" text="Text">
      <button style="width: 300px">Tooltip Right</button>
    </b-tooltip>
  </article>
</template>
