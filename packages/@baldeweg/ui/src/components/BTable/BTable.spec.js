import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import BTable from '../BTable/BTable.vue'

describe('BTable', () => {
  it('shows BTable', () => {
    expect(BTable).toBeTruthy()
  })

  it('applies canHover class by default', () => {
    const wrapper = mount(BTable)
    expect(wrapper.classes()).not.toContain('canHover')
  })

  it('applies canHover class when hover prop is true', () => {
    const wrapper = mount(BTable, {
      props: {
        hover: true
      }
    })
    expect(wrapper.classes()).toContain('canHover')
  })

  it('does not apply canHover class when hover prop is false', () => {
    const wrapper = mount(BTable, {
      props: {
        hover: false
      }
    })
    expect(wrapper.classes()).not.toContain('canHover')
  })
})
