<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BSlider - @baldeweg/ui' })
</script>

<template>
  <article>
    <BSlider>
      <BSliderItem size="l">
        <BDivider />
        <p>Item 1</p>
        <p>Description</p>
      </BSliderItem>
      <BSliderItem size="s">
        <BDivider />
        <p>Item 2</p>
        <p>Description</p>
      </BSliderItem>
      <BSliderItem size="m">
        <BDivider />
        <p>Item 3</p>
        <p>Description</p>
      </BSliderItem>
      <BSliderItem size="xs">
        <BDivider />
        <p>Item 4</p>
        <p>Description</p>
      </BSliderItem>
      <BSliderItem size="xl">
        <BDivider />
        <p>Item 5</p>
        <p>Description</p>
      </BSliderItem>
      <BSliderItem>
        <BDivider />
        <p>Item 6</p>
        <p>Description</p>
      </BSliderItem>
      <BSliderItem>
        <BDivider />
        <p>Item 7</p>
        <p>Description</p>
      </BSliderItem>
      <BSliderItem>
        <BDivider />
        <p>Item 8</p>
        <p>Description</p>
      </BSliderItem>
      <BSliderItem>
        <BDivider />
        <p>Item 9</p>
        <p>Description</p>
      </BSliderItem>
      <BSliderItem>
        <BDivider />
        <p>Item 10</p>
        <p>Description</p>
      </BSliderItem>
    </BSlider>

    <BSlider>
      <BSliderItem size="m">
        <BDivider />
        <p>Item 1</p>
        <p>Description</p>
      </BSliderItem>
      <BSliderItem size="m">
        <BDivider />
        <p>Item Item Item Item Item Item Item Item Item Item</p>
        <p>Description</p>
      </BSliderItem>
      <BSliderItem size="m">
        <BDivider />
        <p>Item 3</p>
        <p>Description</p>
      </BSliderItem>
    </BSlider>
  </article>
</template>
