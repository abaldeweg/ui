<script setup>
import { reactive, ref, watchEffect, computed } from 'vue'

const props = defineProps({
  component: {
    type: String,
    default: 'Alert',
  },
})

const componentName = ref(props.component);
const propsSchema = ref([])
const propsValues = reactive({})
const slotsSchema = ref([])
const eventsSchema = ref([])
const slotsModule = ref([])

const fetchComponentSchema = async () => {
  const res = await import(`./../components/${componentName.value}/${componentName.value}.json`)
  propsSchema.value = res.props ? res.props.map((prop) => {
    if (prop.allowedValues) {
      prop.allowedValues = prop.allowedValues.map((value) => ({ key: value, value }))
    }
    return prop
  }) : []
  slotsModule.value = res.slots ? res.slots.map((slot) => {
    return slot
  }) : []
  slotsSchema.value = res.slots
  eventsSchema.value = res.events
}

const initializePropsValues = () => {
  propsSchema.value.forEach((prop) => {
    if (!(prop.name in propsValues)) {
      propsValues[prop.name] = prop.example ?? prop.default ?? ''
    }
  })
}

watchEffect(async () => {
  await fetchComponentSchema()
  initializePropsValues()
})
</script>

<template>
  <h1>Component "{{ componentName }}"</h1>

  <h2>Preview</h2>

  <component :is="componentName" v-bind="propsValues">
    <template v-for="(slot, index) in slotsModule" :key="index" v-slot:[slot.name]>
      <slot :name="slot.name" />
    </template>
  </component>

  <BDivider />

  <h2>Properties</h2>

  <BForm @submit.prevent>
    <BFormGroup v-for="prop in propsSchema" :key="prop.name">
      <BFormItem>
        <BFormLabel :for="prop.name">
          {{ prop.name }}<span v-if="prop.type"> ({{ prop.type.join(',') }})</span>
        </BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormInput v-if="!prop.allowedValues && prop.type.length === 1 && prop.type[0] === 'Number'" :id="prop.name"
          v-model.number="propsValues[prop.name]" type="number" />
        <BFormInput v-else-if="!prop.allowedValues && !prop.type.includes('Boolean')" :id="prop.name"
          v-model="propsValues[prop.name]" />
        <BFormSelect v-else-if="prop.allowedValues" :id="prop.name" v-model="propsValues[prop.name]"
          :items="prop.allowedValues" item-key="key" item-value="value" />
        <div v-else-if="prop.type.includes('Boolean')">
          <BSwitch v-model="propsValues[prop.name]" />
        </div>
      </BFormItem>
    </BFormGroup>
  </BForm>

  <h2>Slots</h2>
  <ul>
    <li v-for="(slot, index) in slotsSchema" :key="index">{{ slot.name }}</li>
  </ul>

  <h2>Events</h2>
  <ul>
    <li v-for="(event, index) in eventsSchema" :key="index">{{ event.name }}</li>
  </ul>
</template>
