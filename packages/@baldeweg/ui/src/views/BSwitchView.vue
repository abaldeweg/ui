<script setup>
import { useTitle } from './../composables/useTitle.js'
import { ref, watch } from 'vue'

useTitle({ title: 'BSwitch - @baldeweg/ui' })

const switch1 = ref(false)
const switch2 = ref(false)

watch([switch1, switch2], (elements) => {
  console.log('Switch 1:' + elements[0])
  console.log('Switch 2:' + elements[1])
})
</script>

<template>
  <article>
    <BSwitch label="Archive" v-model="switch1" />
    <BSwitch v-model="switch2" />
  </article>
</template>
