<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BContainer' })
</script>

<template>
  <article>
    <BContainer size="l">
      <h2>Container Large</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </BContainer>
    <BContainer size="m">
      <h2>Container Medium</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </BContainer>
    <BContainer size="s">
      <h2>Container Small</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </BContainer>

    <BContainer size="l" align="right">
      <h2>Container Large</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </BContainer>
    <BContainer size="l" align="center">
      <h2>Container Large</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </BContainer>

    <BContainer size="l" highlight>
      <h2>Container Large</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </BContainer>
    <BContainer size="m" highlight>
      <h2>Container Medium</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </BContainer>
    <BContainer size="s" highlight>
      <h2>Container Small</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </BContainer>
  </article>
</template>
