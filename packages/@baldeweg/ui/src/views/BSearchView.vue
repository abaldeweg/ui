<script setup>
import { reactive } from 'vue'
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BSearch - @baldeweg/ui' })

const state = reactive({
  term: null,
  branded: false,
})

const log = (msg) => {
  console.log(msg)
}
</script>

<template>
  <article>
    <b-search
      placeholder="Search"
      filter
      :branded="state.branded"
      focus
      v-model="state.term"
      @input="log('search')"
      @submit.prevent="log('submit')"
      @filter="log('filter')"
      @reset="log('reset')"
    />
    <p>{{ state.term }}</p>
    <button @click="state.branded = !state.branded">Toggle Styling</button>
  </article>
</template>
