<script setup>
import { ref } from 'vue'
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BSearch - @baldeweg/ui' })

const term = ref(null)
const branded = ref(false)

const log = (msg) => {
  console.log(msg)
}
</script>

<template>
  <article>
    <BSearch
      placeholder="Search"
      filter
      :branded="branded"
      focus
      v-model="term"
      reset
      @update:modelValue="log('search')"
      @submit.prevent="log('submit')"
      @filter="log('filter')"
      @reset="log('reset')"
    />
    <p>Term: {{ term }}</p>
    <button @click="branded = !branded">Toggle Styling</button>
  </article>
</template>
