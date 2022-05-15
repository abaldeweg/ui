<template>
  <article :style="{ margin: '20px' }">
    <b-alert>Alert</b-alert>
    <b-alert type="error">Alert</b-alert>
    <b-alert type="warning">Alert</b-alert>
    <b-alert type="success">Alert</b-alert>
  </article>
</template>

<script>
import BAlert from '../components/BAlert/BAlert.vue'

export default {
  name: 'b-alert-view',
  components: {
    BAlert,
  },
}
</script>
