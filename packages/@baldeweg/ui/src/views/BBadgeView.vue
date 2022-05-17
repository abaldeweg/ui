<template>
  <section>
    <p>
      <b-badge content="1"><b-icon type="cart" /></b-badge>text text text
    </p>
    <p>
      <b-badge content="99"><b-icon type="cart" /></b-badge>text text text
    </p>
    <p>
      <b-badge :content="0" hide-empty><b-icon type="cart" /></b-badge>text text
      text
    </p>
  </section>
</template>

<script>
import BBadge from '../components/BBadge/BBadge.vue'
import BIcon from '../components/BIcon/BIcon.vue'
import { useTitle } from './../composables/useTitle.js'

export default {
  name: 'b-badge-view',
  components: {
    BBadge,
    BIcon,
  },
  setup() {
    useTitle({ title: 'BBadge - @baldeweg/ui' })
  },
}
</script>
