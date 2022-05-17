<template>
  <article>
    <b-switch label="Archive" v-model="switch1" />
    <b-switch v-model="switch2" />
  </article>
</template>

<script>
import BSwitch from '../components/BSwitch/BSwitch.vue'
import { ref, watch } from 'vue'
import { useTitle } from './../composables/useTitle.js'

export default {
  name: 'b-switch-view',
  components: {
    BSwitch,
  },
  setup() {
    useTitle({ title: 'BSwitch - @baldeweg/ui' })

    const switch1 = ref(false)
    const switch2 = ref(false)

    watch([switch1, switch2], (elements) => {
      console.log('Switch 1:' + elements[0])
      console.log('Switch 2:' + elements[1])
    })

    return { switch1, switch2 }
  },
}
</script>
