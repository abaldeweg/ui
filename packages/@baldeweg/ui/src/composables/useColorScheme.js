import { ref, onMounted, watchEffect, watch } from 'vue'

const dark = ref(localStorage.getItem('dark') || false)

export function useColorScheme() {
  const init = () => {
    dark.value
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }

  onMounted(init)
  watchEffect(init)

  const save = () => {
    dark.value
      ? localStorage.setItem('dark', true)
      : localStorage.removeItem('dark')
  }

  watch(dark, save)

  return { dark, save }
}
