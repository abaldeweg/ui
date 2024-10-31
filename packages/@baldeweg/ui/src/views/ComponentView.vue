<script setup>
import { useHead } from '@unhead/vue'
import { computed, defineAsyncComponent, ref, watchEffect } from 'vue'
import components from './../components/components.json'
import { useRouter } from 'vue-router'

const props = defineProps({
  component: {
    type: String,
    default: 'BAlert',
  },
})

useHead({ title: computed(() => props.component || 'Component') })

const exampleComponent = ref(undefined)
const loadComponent = () => {
  exampleComponent.value = defineAsyncComponent(() => import(`@/components/B${props.component}/ExampleB${props.component}.vue`))
}

watchEffect(() => {
  console.log(props.component)
  loadComponent()
})

const componentName = ref(props.component)

const router = useRouter()

const updateRoute = () => {
  router.push({ name: 'component', params: { component: componentName.value } })
}
</script>

<template>
  <BContainer size="l">
    <BForm @submit.prevent>
      <BFormGroup>
        <BFormItem>
          <BFormLabel for="component">Components</BFormLabel>
        </BFormItem>
        <BFormItem>
          <BFormSelect id="component" v-model="componentName" :items="components" item-key="name" item-value="name"
            @change="updateRoute" />
        </BFormItem>
      </BFormGroup>
    </BForm>
  </BContainer>

  <BDivider />

  <component :is="exampleComponent" />
</template>
