<script setup>
import { useTheme } from './composables/useTheme.js'
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const { theme } = useTheme()
const position = ref('bottom')

const togglePosition = () => {
  position.value = position.value === 'top' ? 'bottom' : 'top'
}
</script>

<template>
  <BApp id="app">
    <RouterView />

    <div
      class="admin"
      :class="{
        isTop: position === 'top',
        isBottom: position === 'bottom',
      }"
    >
      <p>
        <RouterLink :to="{ name: 'index' }">Home</RouterLink>
      </p>
      <p>
        <BButton design="outline" @click="togglePosition">Top/Bottom</BButton>
      </p>
      <BForm @submit.prevent>
        <BFormGroup>
          <BFormItem>
            <BFormLabel for="theme" hidden>Theme</BFormLabel>
          </BFormItem>
          <BFormItem>
            <BFormSelect
              id="theme"
              v-model="theme"
              :items="[
                { key: 'light', value: 'Light' },
                { key: 'dark', value: 'Dark' },
              ]"
            />
          </BFormItem>
        </BFormGroup>
      </BForm>
    </div>
  </BApp>
</template>

<style scoped>
.admin {
  position: fixed;
  right: 0;
  width: 200px;
  border: 1px solid var(--color-neutral-04);
  border-radius: 10px;
  background: var(--color-neutral-00);
  padding: 20px;
  margin: 20px;
  box-sizing: border-box;
  z-index: 99999;
}
.admin.isTop {
  top: 0;
}
.admin.isBottom {
  bottom: 0;
}
</style>
