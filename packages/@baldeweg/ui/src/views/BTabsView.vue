<script setup>
import { ref } from 'vue'
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BTabs - @baldeweg/ui' })

const justify = ref('flex-start')
</script>

<template>
  <BTabs :justify="justify">
    <BTabsLink v-for="n in 10" :key="n">
      <RouterLink :to="{ name: 'index', query: {item: n} }">Item {{ n }}</RouterLink>
    </BTabsLink>
  </BTabs>

  <BContainer>
    <BForm>
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
    </BForm>
  </BContainer>
</template>
