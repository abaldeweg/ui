<template>
  <article>
    <h2>{{ $t('theme') }}</h2>
    <b-form-select :items="state.themes" v-model="state.theme" />
  </article>
</template>

<script>
import { reactive, watch } from '@vue/composition-api'

export default {
  name: 'profile-theme',
  setup() {
    const state = reactive({
      themes: [
        { key: 'light', value: 'Light' },
        { key: 'dark', value: 'Dark' },
      ],
      theme: localStorage.getItem('theme'),
    })

    watch(
      () => state.theme,
      () => {
        document.documentElement.setAttribute('data-theme', state.theme)
        localStorage.setItem('theme', state.theme)
      }
    )

    return { state }
  },
}
</script>
