<template>
  <b-masthead>
    <b-masthead-item type="start">start</b-masthead-item>

    <b-masthead-item type="center">center</b-masthead-item>

    <b-masthead-item type="end">end</b-masthead-item>
  </b-masthead>
</template>

<script>
import BMasthead from '../components/BMasthead/BMasthead.vue'
import BMastheadItem from '../components/BMasthead/BMastheadItem.vue'
import { useTitle } from './../composables/useTitle.js'

export default {
  name: 'b-masthead-view',
  components: {
    BMasthead,
    BMastheadItem,
  },
  setup() {
    useTitle({ title: 'BMasthead - @baldeweg/ui' })
  },
}
</script>
