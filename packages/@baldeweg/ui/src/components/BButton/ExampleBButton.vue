<script setup>
const log = (msg) => {
  console.log(msg)
}
</script>

<template>
  <AppComponent component="BButton" type="submit" @click="log">
    Button
  </AppComponent>
</template>
