<template>
  <b-code>function helper() { return = htmlspecialchars('Content'); }</b-code>
</template>

<script>
import BCode from '../components/BCode/BCode.vue'

export default {
  name: 'code-view',
  components: {
    BCode,
  },
}
</script>
