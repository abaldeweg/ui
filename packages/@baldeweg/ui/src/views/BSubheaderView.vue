<template>
  <b-subheader>Subheader</b-subheader>
</template>

<script>
import BSubheader from '../components/BSubheader/BSubheader.vue'
import { useTitle } from './../composables/useTitle.js'

export default {
  name: 'b-subheader-view',
  components: {
    BSubheader,
  },
  setup() {
    useTitle({ title: 'BSubheader - @baldeweg/ui' })
  },
}
</script>
