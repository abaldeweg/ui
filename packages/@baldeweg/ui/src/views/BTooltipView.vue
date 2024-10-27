<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BTooltip' })
</script>

<template>
  <article>
    <BTooltip position="top" text="Text">
      <button style="width: 300px">Tooltip Top</button>
    </BTooltip>
    <BTooltip position="bottom" text="Text">
      <button style="width: 300px">Tooltip Bottom</button>
    </BTooltip>
    <BTooltip position="left" text="Text">
      <button style="width: 300px">Tooltip Left</button>
    </BTooltip>
    <BTooltip position="right" text="Text">
      <button style="width: 300px">Tooltip Right</button>
    </BTooltip>

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

    <BTooltip position="top" text="Text">
      <button style="width: 300px">Tooltip Top</button>
    </BTooltip>
    <BTooltip position="bottom" text="Text">
      <button style="width: 300px">Tooltip Bottom</button>
    </BTooltip>
    <BTooltip position="left" text="Text">
      <button style="width: 300px">Tooltip Left</button>
    </BTooltip>
    <BTooltip position="right" text="Text">
      <button style="width: 300px">Tooltip Right</button>
    </BTooltip>
  </article>
</template>
