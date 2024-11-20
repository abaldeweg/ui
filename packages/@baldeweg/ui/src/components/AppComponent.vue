<script setup>
import { reactive, ref, watchEffect, computed, watch } from 'vue'

const props = defineProps({
  component: {
    type: String,
    default: 'Alert',
  },
})

const componentName = ref(props.component)
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
    if (!disabledSlots.value[slot.name]) return slot
    return undefined
  }) : []
  slotsSchema.value = res.slots
  eventsSchema.value = res.events

  slotsModule.value = slotsModule.value.filter(slot => slot !== undefined);
}

const initializePropsValues = () => {
  propsSchema.value.forEach((prop) => {
    if (!(prop.name in propsValues)) {
      propsValues[prop.name] = prop.example ?? prop.default ?? ''
    }
  })
}

const disabledSlots = ref({})

watchEffect(async () => {
  await fetchComponentSchema()
  initializePropsValues()
})

watch(disabledSlots, () => {
  fetchComponentSchema()
}, { deep: true })

const tab = ref("props")

const propsNames = computed(() => {
  return propsSchema.value.map(prop => ` ${prop.name}="${propsValues[prop.name]}"`).join('')
})

const eventsNames = computed(() => {
  return eventsSchema.value
    ? eventsSchema.value.map(event => ` @${event.name}="handler"`).join('')
    : ''
})

const slotsNames = computed(() => {
  return slotsModule.value.map(slot => {
    if (slot.name === 'default') {
      return;
    } else {
      return `\n\t<template #${slot.name}>${slot.name}</template>`
    }
  }).join('')
})

const generatedCode = computed(() => {
  const openingTag = `<${props.component}${propsNames.value}${eventsNames.value}`
  const closingTag = `</${props.component}>`

  if (slotsNames.value) {
    return `${openingTag}>${slotsNames.value}\n${closingTag}`
  } else {
    return `${openingTag} />`
  }
})
</script>

<template>
  <BContainer size="l">
    <h1>Component "{{ componentName }}"</h1>
  </BContainer>

  <BContainer size="l">
    <h2>Preview</h2>

    <component :is="componentName" v-bind="propsValues" v-on="$listeners"
      @update:modelValue="propsValues.modelValue = $event">
      <template v-for="(slot, index) in slotsModule" :key="index" v-slot:[slot.name]>
        <slot :name="slot.name" />
      </template>
    </component>
  </BContainer>

  <BDivider />

  <BTabs justify="center">
    <BTabsLink @click="tab = 'props'" v-if="propsSchema" class="tab">Props</BTabsLink>
    <BTabsLink @click="tab = 'slots'" v-if="slotsSchema" class="tab">Slots</BTabsLink>
    <BTabsLink @click="tab = 'events'" v-if="eventsSchema" class="tab">Events</BTabsLink>
    <BTabsLink @click="tab = 'code'" class="tab">Code</BTabsLink>
  </BTabs>

  <BDivider />

  <BContainer size="l" v-if="propsSchema && tab === 'props'">
    <h2>Properties</h2>

    <BTable>
      <table>
        <thead>
          <tr>
            <th width="250">Name</th>
            <th>Options</th>
            <th width="150">Data-Type</th>
            <th width="150">Default</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="prop in propsSchema" :key="prop.name">
            <td>
              {{ prop.name }}
            </td>

            <td>
              <BForm @submit.prevent>
                <BFormGroup>
                  <BFormItem>
                    <BFormLabel :for="prop.name">
                      {{ prop.name }}
                    </BFormLabel>
                  </BFormItem>
                  <BFormItem>
                    <BFormInput v-if="!prop.allowedValues && prop.type.length === 1 && prop.type[0] === 'Number'"
                      :id="prop.name" v-model.number="propsValues[prop.name]" type="number" />
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
            </td>

            <td>
              {{ prop.type.join(', ') }}
            </td>

            <td>
              {{ prop.default }}
            </td>
          </tr>
        </tbody>
      </table>
    </BTable>
  </BContainer>

  <BContainer size="l" v-if="slotsSchema && tab === 'slots'">
    <h2>Slots</h2>

    <BTable>
      <table>
        <thead>
          <tr>
            <th width="250">Name</th>
            <th width="250">Disable</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(slot, index) in slotsSchema" :key="index">
            <td>{{ slot.name }}</td>
            <td>
              <BSwitch v-model="disabledSlots[slot.name]" />
            </td>
          </tr>
        </tbody>
      </table>
    </BTable>
  </BContainer>

  <BContainer size="l" v-if="eventsSchema && tab === 'events'">
    <h2>Events</h2>

    <BTable>
      <table>
        <thead>
          <tr>
            <th width="250">Name</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(event, index) in eventsSchema" :key="index">
            <td>
              {{ event.name }}
            </td>
          </tr>
        </tbody>
      </table>
    </BTable>
  </BContainer>

  <BContainer size="l" v-if="tab === 'code'">
    <h2>Code</h2>

    <BCode>{{ generatedCode }}</BCode>
  </BContainer>
</template>

<style>
.tab {
  cursor: pointer;
}
</style>
