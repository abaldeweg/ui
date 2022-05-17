<template>
  <b-code>function helper() { return = htmlspecialchars('Content'); }</b-code>
</template>

<script>
import BCode from '../components/BCode/BCode.vue'
import { useTitle } from './../composables/useTitle.js'

export default {
  name: 'code-view',
  components: {
    BCode,
  },
  setup() {
    useTitle({ title: 'BCode - @baldeweg/ui' })
  },
}
</script>
