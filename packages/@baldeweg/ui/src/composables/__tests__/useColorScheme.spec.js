import { describe, it, expect } from 'vitest'
import { nextTick } from 'vue'
import { useColorScheme } from '@/composables/useColorScheme.js'

describe('ColorScheme', () => {
  it('Sets Color Scheme', async () => {
    const { dark } = useColorScheme()

    dark.value = true
    await nextTick()

    expect(document.documentElement.classList.contains('dark')).toBeTruthy()

    dark.value = false
    await nextTick()

    expect(document.documentElement.classList.contains('dark')).toBeFalsy()
  })

  it('Saves Color Scheme', () => {
    const { dark, save } = useColorScheme()

    dark.value = true
    save()

    expect(localStorage.getItem('dark')).toBeTruthy()

    dark.value = false
    save()

    expect(localStorage.getItem('dark')).toBeFalsy()
  })
})
