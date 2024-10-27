<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({ title: 'BSearch' })

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
      resetLabel="Reset"
      filterLabel="Filter"
      searchLabel="Search"
    />
    <p>Term: {{ term }}</p>
    <button @click="branded = !branded">Toggle Styling</button>
  </article>
</template>
