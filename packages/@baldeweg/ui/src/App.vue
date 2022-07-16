<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useDraggable } from '@vueuse/core'
import Cookies from 'js-cookie'
import { useRequest } from '@baldeweg/ui'
import { useColorScheme } from './composables/useColorScheme.js'
import { useLocale } from './composables/useLocale.js'

const { config, setAuthHeader } = useRequest()
config.value.baseURL = import.meta.env.VUE_APP_API
setAuthHeader(Cookies.get('token'))

useLocale()
const { dark } = useColorScheme()

const el = ref(null)

const { style } = useDraggable(el, {
  initialValue: { x: 20, y: 500 },
})
</script>

<template>
  <BApp id="app">
    <RouterView />

    <div class="admin" ref="el" :style="style">
      <p>
        <RouterLink :to="{ name: 'index' }">Home</RouterLink>
      </p>
      <BForm @submit.prevent>
        <BFormGroup>
          <BFormItem>
            <input type="checkbox" id="dark" v-model="dark" />
            <BFormLabel for="dark">Dark Mode</BFormLabel>
          </BFormItem>
        </BFormGroup>
      </BForm>
    </div>
  </BApp>
</template>

<style scoped>
.admin {
  position: fixed;
  width: 200px;
  border: 1px solid var(--color-neutral-04);
  border-radius: 10px;
  background: var(--color-neutral-00);
  padding: 20px;
  margin: 20px;
  box-sizing: border-box;
  z-index: 99999;
}
</style>
