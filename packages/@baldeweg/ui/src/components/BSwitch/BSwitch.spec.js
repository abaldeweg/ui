import { describe, it, expect } from 'vitest'
import BSwitch from '../BSwitch/BSwitch.vue'

describe('BSwitch', () => {
  it('shows BSwitch', () => {
    expect(BSwitch).toBeTruthy()
  })

  it('emits update:modelValue with toggled value on click', async () => {
    const { mount } = await import('@vue/test-utils')
    const wrapper = mount(BSwitch, {
      props: {
        modelValue: false,
        label: 'Test Switch',
      },
    })

    await wrapper.find('.switch_indicator').trigger('click')
    expect(wrapper.emitted()['update:modelValue'][0][0]).toBe(true)

    await wrapper.setProps({ modelValue: true })
    await wrapper.find('.switch_indicator').trigger('click')
    expect(wrapper.emitted()['update:modelValue'][1][0]).toBe(false)
  })
})
