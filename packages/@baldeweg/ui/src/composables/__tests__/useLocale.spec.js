import { describe, it, expect } from 'vitest'
import { nextTick } from 'vue'
import { useLocale } from '@/composables/useLocale.js'

describe('Locale', () => {
  it('Set locale', async () => {
    const { locale } = useLocale()

    locale.value = 'de'
    await nextTick()

    expect(document.documentElement.getAttribute('lang')).toEqual('de')
  })
})
