<template>
  <article>
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

    <button @click="state.show = !state.show">Show Modal</button>
    <b-modal :width="600" @close="closeModal" v-if="state.show">
      <template #title><b-icon type="plus" :size="16" /> Modal</template>
      <template #footer>Footer</template>
      <b-container>
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
      </b-container>
    </b-modal>
  </article>
</template>

<script>
import BModal from '../components/BModal/BModal.vue'
import BContainer from '../components/BContainer/BContainer.vue'
import { reactive } from 'vue'

export default {
  name: 'b-modal-view',
  components: {
    BModal,
    BContainer,
  },
  setup() {
    const state = reactive({
      show: true,
    })

    const closeModal = (type) => {
      state.show = !state.show
      console.log(type)
    }

    return { state, closeModal }
  },
}
</script>
