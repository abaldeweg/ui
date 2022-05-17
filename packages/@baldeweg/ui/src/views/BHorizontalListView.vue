<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BHorizontalList - @baldeweg/ui' })
</script>

<template>
  <article>
    <b-horizontal-list>
      <b-horizontal-list-item size="l">
        <b-divider />
        <p>Item 1</p>
        <p>Description</p>
      </b-horizontal-list-item>
      <b-horizontal-list-item size="s">
        <b-divider />
        <p>Item 2</p>
        <p>Description</p>
      </b-horizontal-list-item>
      <b-horizontal-list-item size="m">
        <b-divider />
        <p>Item 3</p>
        <p>Description</p>
      </b-horizontal-list-item>
      <b-horizontal-list-item size="xs">
        <b-divider />
        <p>Item 4</p>
        <p>Description</p>
      </b-horizontal-list-item>
      <b-horizontal-list-item size="xl">
        <b-divider />
        <p>Item 5</p>
        <p>Description</p>
      </b-horizontal-list-item>
      <b-horizontal-list-item>
        <b-divider />
        <p>Item 6</p>
        <p>Description</p>
      </b-horizontal-list-item>
      <b-horizontal-list-item>
        <b-divider />
        <p>Item 7</p>
        <p>Description</p>
      </b-horizontal-list-item>
      <b-horizontal-list-item>
        <b-divider />
        <p>Item 8</p>
        <p>Description</p>
      </b-horizontal-list-item>
      <b-horizontal-list-item>
        <b-divider />
        <p>Item 9</p>
        <p>Description</p>
      </b-horizontal-list-item>
      <b-horizontal-list-item>
        <b-divider />
        <p>Item 10</p>
        <p>Description</p>
      </b-horizontal-list-item>
    </b-horizontal-list>

    <b-horizontal-list>
      <b-horizontal-list-item size="m">
        <b-divider />
        <p>Item 1</p>
        <p>Description</p>
      </b-horizontal-list-item>
      <b-horizontal-list-item size="m">
        <b-divider />
        <p>Item Item Item Item Item Item Item Item Item Item</p>
        <p>Description</p>
      </b-horizontal-list-item>
      <b-horizontal-list-item size="m">
        <b-divider />
        <p>Item 3</p>
        <p>Description</p>
      </b-horizontal-list-item>
    </b-horizontal-list>
  </article>
</template>
