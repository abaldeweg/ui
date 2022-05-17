<template>
  <b-tabs>
    <b-tabs-link v-for="n in 10" :key="n">
      <router-link :to="{ name: 'index' }">Item {{ n }}</router-link>
    </b-tabs-link>
  </b-tabs>
</template>

<script>
import BTabs from '../components/BTabs/BTabs.vue'
import BTabsLink from '../components/BTabs/BTabsLink.vue'
import { useTitle } from './../composables/useTitle.js'

export default {
  name: 'b-tabs-view',
  components: {
    BTabs,
    BTabsLink,
  },
  setup() {
    useTitle({ title: 'BTabs - @baldeweg/ui' })
  },
}
</script>
