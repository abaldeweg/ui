import { describe, it, expect } from 'vitest'

import BSelect from './BSelect.vue'

describe('BSelect', () => {
  it('shows BSelect', () => {
    expect(BSelect).toBeTruthy()
  })

  it('sets values correctly for options type', async () => {
    const { mount } = await import('@vue/test-utils')
    const wrapper = mount(BSelect, {
      props: {
        modelValue: '',
        type: 'options',
        name: 'test',
        id: 'test',
        options: [
          { key: 'a', value: 'A' },
          { key: 'b', value: 'B' },
        ],
      },
    })

    const select = wrapper.find('select')
    expect(select.exists()).toBe(true)

    await select.setValue('a')
    expect(wrapper.emitted()['update:modelValue'][0][0]).toBe('a')

    await select.setValue('b')
    expect(wrapper.emitted()['update:modelValue'][1][0]).toBe('b')
  })

  it('sets values correctly for checkbox type', async () => {
    const { mount } = await import('@vue/test-utils')
    const wrapper = mount(BSelect, {
      props: {
        modelValue: [],
        type: 'checkbox',
        name: 'test',
        id: 'test',
        options: [
          { key: 'a', value: 'A' },
          { key: 'b', value: 'B' },
        ],
      },
    })

    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    expect(checkboxes.length).toBe(2)

    await checkboxes[0].setValue(true)
    expect(wrapper.emitted()['update:modelValue'][0][0]).toContain('a')

    await checkboxes[1].setValue(true)
    expect(wrapper.emitted()['update:modelValue'][1][0]).toEqual(['a', 'b'])

    await checkboxes[0].setValue(false)
    expect(wrapper.emitted()['update:modelValue'][2][0]).toEqual(['b'])
  })

  it('sets values correctly for radio type', async () => {
    const { mount } = await import('@vue/test-utils')
    const wrapper = mount(BSelect, {
      props: {
        modelValue: '',
        type: 'radio',
        name: 'test',
        id: 'test',
        options: [
          { key: 'a', value: 'A' },
          { key: 'b', value: 'B' },
        ],
      },
    })

    const radios = wrapper.findAll('input[type="radio"]')
    expect(radios.length).toBe(2)

    await radios[0].setValue(true)
    expect(wrapper.emitted()['update:modelValue'][0][0]).toBe('a')

    await radios[1].setValue(true)
    expect(wrapper.emitted()['update:modelValue'][1][0]).toBe('b')
  })
})
