<script setup>
import { useHead } from '@unhead/vue'
import { computed, defineAsyncComponent, ref, watchEffect } from 'vue'
import components from './components.json'
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
  exampleComponent.value = defineAsyncComponent(() => import(`@/components/${props.component}/Example${props.component}.vue`))
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
  <BForm @submit.prevent>
    <BFormGroup>
      <BFormItem>
        <BFormLabel for="component">Components</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormSelect id="component" v-model="componentName" :items="components" @change="updateRoute" />
      </BFormItem>
    </BFormGroup>
  </BForm>

  <BDivider />

  <component :is="exampleComponent" />
</template>
