<script setup>
defineProps({
  legend: {
    type: String,
  }
})
</script>

<template>
  <fieldset class="fieldset">
    <legend class="legend">
      {{ legend }}
    </legend>
    <slot />
  </fieldset>
</template>

<style>
.fieldset {
  clear: both;
  border: 0 hidden;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  overflow: auto;
}

.fieldset:last-child {
  margin-bottom: 0;
}

.legend {
  padding: 0;
}
</style>
