<script setup>
import { ref } from 'vue'
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BCard - @baldeweg/ui' })

const outlined = ref(false)
const filled = ref(false)
const image = ref(true)
const subtitle = ref(true)
const text = ref(true)
const actions = ref(true)
</script>

<template>
  <BCard :route="{ name: 'index' }" :outlined="outlined" :filled="filled">
    <template #image v-if="image">
      <img src="@/assets/placeholder_16x9.jpg" alt="Example Image" width="300" />
    </template>

    <template #title>Title</template>

    <template #subtitle v-if="subtitle">Subtitle</template>

    <template #text v-if="text">Text</template>

    <template #actions v-if="actions">
      <BButton design="outline" :style="{ marginRight: '10px' }"
        >Action 1</BButton
      >
      <BButton design="outline">Action 2</BButton>
    </template>
  </BCard>

  <b-divider />

  <!-- outlined -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="outlined" v-model="outlined" />
      <BFormLabel for="outlined">Outlined</BFormLabel>
    </BFormItem>
  </BFormGroup>

  <!-- filled -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="filled" v-model="filled" />
      <BFormLabel for="filled">Filled</BFormLabel>
    </BFormItem>
  </BFormGroup>

  <!-- image -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="image" v-model="image" />
      <BFormLabel for="image">Image</BFormLabel>
    </BFormItem>
  </BFormGroup>

  <!-- subtitle -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="subtitle" v-model="subtitle" />
      <BFormLabel for="subtitle">Subtitle</BFormLabel>
    </BFormItem>
  </BFormGroup>

  <!-- text -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="text" v-model="text" />
      <BFormLabel for="text">Text</BFormLabel>
    </BFormItem>
  </BFormGroup>

  <!-- actions -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="actions" v-model="actions" />
      <BFormLabel for="actions">Actions</BFormLabel>
    </BFormItem>
  </BFormGroup>
</template>
