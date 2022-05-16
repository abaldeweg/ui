<template>
  <article>
    <b-chip>
      Label 1
      <template #action>X</template>
    </b-chip>

    <b-chip>Label 2</b-chip>
  </article>
</template>

<script>
import BChip from '../components/BChip/BChip.vue'

export default {
  name: 'b-chip-view',
  components: {
    BChip,
  },
}
</script>
