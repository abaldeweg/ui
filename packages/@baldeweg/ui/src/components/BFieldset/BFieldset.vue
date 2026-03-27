<script setup>
defineProps({
  legend: {
    type: String,
  }
})
</script>

<template>
  <fieldset class="fieldset u:clear-both u:mb-xl u:overflow-auto">
    <legend class="fieldset_legend">
      {{ legend }}
    </legend>
    <slot />
  </fieldset>
</template>

<style>
.fieldset:last-child {
  margin-bottom: 0;
}

.fieldset_legend {
  padding: 0;
}
</style>
