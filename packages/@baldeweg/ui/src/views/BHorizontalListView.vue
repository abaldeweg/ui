<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BHorizontalList - @baldeweg/ui' })
</script>

<template>
  <article>
    <BHorizontalList>
      <BHorizontalListItem size="l">
        <BDivider />
        <p>Item 1</p>
        <p>Description</p>
      </BHorizontalListItem>
      <BHorizontalListItem size="s">
        <BDivider />
        <p>Item 2</p>
        <p>Description</p>
      </BHorizontalListItem>
      <BHorizontalListItem size="m">
        <BDivider />
        <p>Item 3</p>
        <p>Description</p>
      </BHorizontalListItem>
      <BHorizontalListItem size="xs">
        <BDivider />
        <p>Item 4</p>
        <p>Description</p>
      </BHorizontalListItem>
      <BHorizontalListItem size="xl">
        <BDivider />
        <p>Item 5</p>
        <p>Description</p>
      </BHorizontalListItem>
      <BHorizontalListItem>
        <BDivider />
        <p>Item 6</p>
        <p>Description</p>
      </BHorizontalListItem>
      <BHorizontalListItem>
        <BDivider />
        <p>Item 7</p>
        <p>Description</p>
      </BHorizontalListItem>
      <BHorizontalListItem>
        <BDivider />
        <p>Item 8</p>
        <p>Description</p>
      </BHorizontalListItem>
      <BHorizontalListItem>
        <BDivider />
        <p>Item 9</p>
        <p>Description</p>
      </BHorizontalListItem>
      <BHorizontalListItem>
        <BDivider />
        <p>Item 10</p>
        <p>Description</p>
      </BHorizontalListItem>
    </BHorizontalList>

    <BHorizontalList>
      <BHorizontalListItem size="m">
        <BDivider />
        <p>Item 1</p>
        <p>Description</p>
      </BHorizontalListItem>
      <BHorizontalListItem size="m">
        <BDivider />
        <p>Item Item Item Item Item Item Item Item Item Item</p>
        <p>Description</p>
      </BHorizontalListItem>
      <BHorizontalListItem size="m">
        <BDivider />
        <p>Item 3</p>
        <p>Description</p>
      </BHorizontalListItem>
    </BHorizontalList>
  </article>
</template>
