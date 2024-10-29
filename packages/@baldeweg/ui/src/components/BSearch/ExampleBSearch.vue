<script setup>
const log = (msg) => {
  console.log(msg)
}
</script>

<template>
  <AppComponent component="BSearch" @update:modelValue="log('search')" @submit.prevent="log('submit')"
    @filter="log('filter')" @reset="log('reset')" />
</template>
