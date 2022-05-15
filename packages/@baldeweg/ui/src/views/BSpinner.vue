<template>
  <article>
    <b-spinner size="l" />
    <b-spinner size="m" />
    <b-spinner size="s" />
  </article>
</template>

<script>
import BSpinner from '../components/BSpinner/BSpinner.vue'

export default {
  name: 'b-spinner-view',
  components: {
    BSpinner,
  },
}
</script>
