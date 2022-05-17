<script setup>
import { ref } from 'vue'
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BModal - @baldeweg/ui' })

const show = ref(true)

const closeModal = (type) => {
  show.value = !show.value
  console.log(type)
}
</script>

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

    <button @click="show = !show">Show Modal</button>
    <BModal :width="600" @close="closeModal" v-if="show">
      <template #title><BIcon type="plus" :size="16" /> Modal</template>
      <template #footer>Footer</template>
      <BContainer>
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
      </BContainer>
    </BModal>
  </article>
</template>
