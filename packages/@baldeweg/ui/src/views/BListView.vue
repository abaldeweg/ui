<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({ title: 'BList' })

const bold = ref(false)
const divider = ref(false)
const subtitle = ref(true)
const options = ref(true)
const image = ref(true)
const imageSize = ref('m')
const imagePosition = ref('center')
const actionsPosition = ref('center')
const reverse = ref(false)
const disabled = ref(false)
const active = ref(false)
</script>

<template>
  <BList
    :route="{ name: 'index' }"
    :bold="bold"
    :divider="divider"
    :image-size="imageSize"
    :image-position="imagePosition"
    :actions-position="actionsPosition"
    :reverse="reverse"
    :disabled="disabled"
    :active="active"
  >
    <template #image v-if="image">
      <img src="@/assets/placeholder_1x1.jpg" alt="Icon" />
    </template>

    <template #title>
      text text text text text text text text text text
    </template>

    <template #options v-if="options">
      <BIcon type="kebab" />
    </template>

    <template #subtitle v-if="subtitle">
      <RouterLink :to="{ name: 'index' }">Subtitle</RouterLink> &bull; Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text
    </template>
  </BList>

  <b-divider />

  <!-- bold -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="bold" v-model="bold" />
      <BFormLabel for="bold">Bold</BFormLabel>
    </BFormItem>
  </BFormGroup>

  <!-- divider -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="divider" v-model="divider" />
      <BFormLabel for="divider">Divider</BFormLabel>
    </BFormItem>
  </BFormGroup>

  <!-- subtitle -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="subtitle" v-model="subtitle" />
      <BFormLabel for="subtitle">Subtitle</BFormLabel>
    </BFormItem>
  </BFormGroup>

  <!-- options -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="options" v-model="options" />
      <BFormLabel for="options">Options</BFormLabel>
    </BFormItem>
  </BFormGroup>

  <!-- image -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="image" v-model="image" />
      <BFormLabel for="image">Image</BFormLabel>
    </BFormItem>
  </BFormGroup>

  <!-- image size -->
  <BFormGroup>
    <BFormItem>
      <BFormLabel for="image-size">Image Size</BFormLabel>
    </BFormItem>
    <BFormItem>
      <BFormSelect
        id="image-size"
        v-model="imageSize"
        :items="[
          { key: 'xs', value: 'xs' },
          { key: 's', value: 's' },
          { key: 'm', value: 'm' },
          { key: 'l', value: 'l' },
          { key: 'xl', value: 'xl' },
        ]"
      />
    </BFormItem>
  </BFormGroup>

  <!-- image position -->
  <BFormGroup>
    <BFormItem>
      <BFormLabel for="image-position">Image Position</BFormLabel>
    </BFormItem>
    <BFormItem>
      <BFormSelect
        id="image-position"
        v-model="imagePosition"
        :items="[
          { key: 'start', value: 'start' },
          { key: 'center', value: 'center' },
          { key: 'end', value: 'end' },
        ]"
      />
    </BFormItem>
  </BFormGroup>

  <!-- actions position -->
  <BFormGroup>
    <BFormItem>
      <BFormLabel for="actions-position">Actions Position</BFormLabel>
    </BFormItem>
    <BFormItem>
      <BFormSelect
        id="actions-position"
        v-model="actionsPosition"
        :items="[
          { key: 'start', value: 'start' },
          { key: 'center', value: 'center' },
          { key: 'end', value: 'end' },
        ]"
      />
    </BFormItem>
  </BFormGroup>

  <!-- reverse -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="reverse" v-model="reverse" />
      <BFormLabel for="reverse">Reverse</BFormLabel>
    </BFormItem>
  </BFormGroup>

  <!-- disabled -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="disabled" v-model="disabled" />
      <BFormLabel for="disabled">Disabled</BFormLabel>
    </BFormItem>
  </BFormGroup>

  <!-- active -->
  <BFormGroup>
    <BFormItem>
      <input type="checkbox" id="active" v-model="active" />
      <BFormLabel for="active">Active</BFormLabel>
    </BFormItem>
  </BFormGroup>
</template>
