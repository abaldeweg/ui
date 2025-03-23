import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BFieldset from '../BFieldset/BFieldset.vue'

describe('BFieldset', () => {
  it('shows BFieldset', () => {
    expect(BFieldset).toBeTruthy()
  })

  it('renders fieldset', () => {
    const wrapper = mount(BFieldset, {
      props: {
        legend: 'Legend'
      }
    })
    const fieldsetElement = wrapper.find('fieldset')
    const legendElement = wrapper.find('legend')

    expect(fieldsetElement.exists()).toBe(true)
    expect(legendElement.exists()).toBe(true)
    expect(legendElement.text()).toBe('Legend')
  })
})
