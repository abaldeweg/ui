<template>
  <article>
    <b-toast v-if="current" :type="current.type" :visible="true">{{
      current.body
    }}</b-toast>

    <button
      @click="
        add({
          type: 'neutral',
          body: 'Neutral',
        })
      "
    >
      Neutral
    </button>

    <button
      @click="
        add({
          type: 'error',
          body: 'Error',
        })
      "
    >
      Error
    </button>

    <button
      @click="
        add({
          type: 'warning',
          body: 'Warning',
        })
      "
    >
      Warning
    </button>

    <button
      @click="
        add({
          type: 'success',
          body: 'Success',
        })
      "
    >
      Success
    </button>

    <section>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
    </section>
  </article>
</template>

<script>
import BToast from '../components/BToast/BToast.vue'
import { useToast } from '@/composables/useToast.js'

export default {
  name: 'b-toast-view',
  components: {
    BToast,
  },
  setup() {
    const { current, add } = useToast()

    return { current, add }
  },
}
</script>
