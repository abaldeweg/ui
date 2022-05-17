<template>
  <b-scroll-to-bottom :width="0" :height="500">
    <ul>
      <li v-for="entry in list" :key="entry.id">
        {{ entry.name }}
      </li>
    </ul>
  </b-scroll-to-bottom>
</template>

<script>
import { onMounted, ref } from 'vue'
import BScrollToBottom from '../components/BScrollToBottom/BScrollToBottom.vue'
import { useTitle } from './../composables/useTitle.js'

export default {
  name: 'scroll-to-bottom-view',
  components: {
    BScrollToBottom,
  },
  setup() {
    useTitle({ title: 'BScrollToBottom - @baldeweg/ui' })

    let list = ref([
      { id: 1, name: 'entry 1' },
      { id: 2, name: 'entry 2' },
      { id: 3, name: 'entry 3' },
      { id: 4, name: 'entry 4' },
      { id: 5, name: 'entry 5' },
      { id: 6, name: 'entry 6' },
      { id: 7, name: 'entry 7' },
      { id: 8, name: 'entry 8' },
      { id: 9, name: 'entry 9' },
      { id: 10, name: 'entry 10' },
    ])

    const add = () => {
      let id = list.value.length + 1
      list.value.push({ id: id, name: 'entry ' + id })
    }

    onMounted(() => {
      window.setInterval(() => {
        add()
      }, 1000)
    })

    return { list, add }
  },
}
</script>
