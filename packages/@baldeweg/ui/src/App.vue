<script setup>
import BApp from '@/components/BApp/BApp.vue'
import BForm from '@/components/BForm/BForm.vue'
import BFormSelect from '@/components/BForm/BFormSelect.vue'
import { getTheme, setTheme } from './services/theme'
import { reactive, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const state = reactive({
  position: 'bottom',
  themes: [
    { key: 'light', value: 'Light' },
    { key: 'dark', value: 'Dark' },
  ],
  theme: getTheme() || 'light',
})

const togglePosition = () => {
  state.position = state.position === 'top' ? 'bottom' : 'top'
}

watch(
  () => state.theme,
  (theme) => {
    setTheme(theme)
  }
)
</script>

<template>
  <b-app id="app">
    <RouterView />
    <div
      class="components"
      :class="{
        isTop: state.position === 'top',
        isBottom: state.position === 'bottom',
      }"
    >
      <p><router-link :to="{ name: 'index' }">Home</router-link></p>
      <p><button @click="togglePosition">Top/Bottom</button></p>
      <b-form @submit.prevent>
        <div class="form_group">
          <div class="form_item">
            <label for="theme" class="form_label visuallyHidden">Theme</label>
          </div>
          <div class="form_item">
            <b-form-select
              id="theme"
              v-model="state.theme"
              :items="state.themes"
            />
          </div>
        </div>
      </b-form>
    </div>
  </b-app>
</template>

<style scoped>
.components {
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
.components.isTop {
  top: 0;
}
.components.isBottom {
  bottom: 0;
}
</style>
