<template>
  <article>
    <b-card title="Title" route="index">
      <template #image>
        <img src="@/assets/placeholder_16x9.jpg" alt="Image" />
      </template>

      <template #meta>
        <router-link :to="{ name: 'index' }">Meta</router-link> &bull; Meta
      </template>

      <template #content>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </template>
    </b-card>

    <b-card title="Title" route="index">
      <template #content>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </template>
    </b-card>
  </article>
</template>

<script>
import BCard from '../components/BCard/BCard.vue'
import { useTitle } from './../composables/useTitle.js'

export default {
  name: 'b-card-view',
  components: {
    BCard,
  },
  setup() {
    useTitle({ title: 'BCard - @baldeweg/ui' })
  },
}
</script>
