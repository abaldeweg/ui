import { ref, onMounted, watchEffect } from 'vue'

export function useTheme() {
  const theme = ref(localStorage.getItem('theme') || 'light')

  onMounted(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
  })

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
  })

  return { theme }
}
