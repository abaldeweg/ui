<template>
  <article>
    <b-divider size="l" />
    <b-divider size="m" />
    <b-divider size="s" />
    <b-divider size="xs" />
  </article>
</template>

<script>
import BDivider from '../components/BDivider/BDivider.vue'
import { useTitle } from './../composables/useTitle.js'

export default {
  name: 'b-divider-view',
  components: {
    BDivider,
  },
  setup() {
    useTitle({ title: 'BDivider - @baldeweg/ui' })
  },
}
</script>
