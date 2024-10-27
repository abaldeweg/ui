<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({ title: 'BFlex' })

const direction = ref('row')
const justify = ref('flex-start')
const align = ref('center')
const gap = ref('20px')
</script>

<template>
  <BFlex :direction="direction" :justify="justify" :align="align" :gap="gap">
    <div class="flex_item">Column 1</div>
    <div class="flex_item">Column 2</div>
  </BFlex>

  <b-divider />

  <BFormGroup>
    <BFormItem>
      <BFormLabel for="direction">Direction</BFormLabel>
    </BFormItem>
    <BFormItem>
      <BFormSelect
        id="direction"
        :items="[
          { key: 'row', value: 'row' },
          { key: 'column', value: 'column' },
        ]"
        v-model="direction"
      />
    </BFormItem>
  </BFormGroup>

  <BFormGroup>
    <BFormItem>
      <BFormLabel for="justify">Justify</BFormLabel>
    </BFormItem>
    <BFormItem>
      <BFormSelect
        id="justify"
        :items="[
          { key: 'flex-start', value: 'flex-start' },
          { key: 'flex-end', value: 'flex-end' },
          { key: 'center', value: 'center' },
          { key: 'space-between', value: 'space-between' },
          { key: 'space-around', value: 'space-around' },
          { key: 'space-evenly', value: 'space-evenly' },
        ]"
        v-model="justify"
      />
    </BFormItem>
  </BFormGroup>

  <BFormGroup>
    <BFormItem>
      <BFormLabel for="align">Align</BFormLabel>
    </BFormItem>
    <BFormItem>
      <BFormSelect
        id="align"
        :items="[
          { key: 'stretch', value: 'stretch' },
          { key: 'flex-start', value: 'flex-start' },
          { key: 'flex-end', value: 'flex-end' },
          { key: 'center', value: 'center' },
          { key: 'baseline', value: 'baseline' },
        ]"
        v-model="align"
      />
    </BFormItem>
  </BFormGroup>

  <BFormGroup>
    <BFormItem>
      <BFormLabel for="gap">Gap</BFormLabel>
    </BFormItem>
    <BFormItem>
      <BFormInput id="gap" v-model="gap" />
    </BFormItem>
  </BFormGroup>
</template>

<style scoped>
.flex_item {
  border: 1px solid var(--color-neutral-02);
  border-radius: 10px;
  padding: 20px;
}
</style>
