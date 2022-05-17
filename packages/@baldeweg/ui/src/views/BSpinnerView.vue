<template>
  <article>
    <b-spinner size="l" />
    <b-spinner size="m" />
    <b-spinner size="s" />
  </article>
</template>

<script>
import BSpinner from '../components/BSpinner/BSpinner.vue'
import { useTitle } from './../composables/useTitle.js'

export default {
  name: 'b-spinner-view',
  components: {
    BSpinner,
  },
  setup() {
    useTitle({ title: 'BSpinner - @baldeweg/ui' })
  },
}
</script>
