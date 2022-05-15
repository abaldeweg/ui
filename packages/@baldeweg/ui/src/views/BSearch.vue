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

<script>
import { reactive } from 'vue'
import BSearch from '../components/BSearch/BSearch.vue'

export default {
  name: 'b-search-view',
  components: {
    BSearch,
  },
  setup() {
    const state = reactive({
      term: null,
      branded: false,
    })

    const log = (msg) => {
      console.log(msg)
    }

    return { state, log }
  },
}
</script>
