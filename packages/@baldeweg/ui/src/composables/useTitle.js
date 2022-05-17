import { ref, watchEffect } from 'vue'

export function useTitle(options) {
  const title = ref(options.title)

  watchEffect(() => {
    document.title = title.value ?? null
  })

  return { options }
}
