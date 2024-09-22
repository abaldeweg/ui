<script setup>
import { ref } from 'vue'
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BPanel - @baldeweg/ui' })

const visible = ref(true)
const position = ref('left')
</script>

<template>
  <BPanel :visible="visible" :position="position" @close="visible = false" width="300px">
    <template #header>header</template>
    <template #footer>footer</template>
    <BContainer>
      <BList :route="{ name: 'index' }">
        <template #image>
          <img src="@/assets/placeholder_1x1.jpg" width="25" alt="Icon" />
        </template>
        <template #title> Item 1 </template>
      </BList>
    </BContainer>

    <BDivider />

    <BContainer>
      <BList :route="{ name: 'index' }">
        <template #title>Item 1</template>
      </BList>
      <BList :route="{ name: 'index' }">
        <template #title>Item 2</template>
      </BList>
    </BContainer>
  </BPanel>

  <BContainer size="m">
    <BForm @submit.prevent>
      <BFormGroup>
        <BFormItem>
          <input type="checkbox" id="visible" v-model="visible" />
          <BFormLabel for="visible">Visible</BFormLabel>
        </BFormItem>
      </BFormGroup>

      <BFormGroup>
        <BFormItem>
          <BFormLabel for="position">Position</BFormLabel>
        </BFormItem>
        <BFormItem>
          <BFormSelect
            id="position"
            :items="[
              { key: 'left', value: 'Left' },
              { key: 'right', value: 'Right' },
            ]"
            v-model="position"
          />
        </BFormItem>
      </BFormGroup>
    </BForm>
  </BContainer>
</template>
