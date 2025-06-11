import { describe, it, expect } from 'vitest'

import BInput from './BInput.vue'

describe('BInput', () => {
  it('shows BInput', () => {
    expect(BInput).toBeTruthy()
  })

  it('changes the input type when the type prop changes', async () => {
    const { mount } = await import('@vue/test-utils')
    const wrapper = mount(BInput, {
      props: {
        modelValue: '',
        type: 'text',
        name: 'test',
        id: 'test',
        label: 'Test Label',
      },
    })
    let input = wrapper.find('input')
    expect(input.attributes('type')).toBe('text')

    await wrapper.setProps({ type: 'email' })
    input = wrapper.find('input')
    expect(input.attributes('type')).toBe('email')
  })
})
