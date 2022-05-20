<template>
  <article>
    <h2>{{ $t('language') }}</h2>
    <b-form-select :items="state.locales" v-model="state.locale" />
  </article>
</template>

<script>
import { reactive, watch } from '@vue/composition-api'
import i18n from '@/i18n'

export default {
  name: 'profile-locale',
  setup() {
    const state = reactive({
      locales: [
        { key: 'de-DE', value: 'Deutsch' },
        { key: 'en-US', value: 'English' },
      ],
      locale: localStorage.getItem('locale'),
    })

    watch(
      () => state.locale,
      () => {
        i18n.locale = state.locale
        localStorage.setItem('locale', state.locale)
      }
    )

    return { state }
  },
}
</script>
