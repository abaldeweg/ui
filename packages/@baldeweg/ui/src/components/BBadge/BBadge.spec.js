import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BBadge from '../BBadge/BBadge.vue'

describe('BBadge', () => {
  it('shows BBadge', () => {
    expect(BBadge).toBeTruthy()
  })

  it('applies .badge_neutral and .badge_primary classes', () => {
    const wrapperNeutral = mount(BBadge, { props: { border: 'neutral' } })

    expect(wrapperNeutral.classes()).toContain('badge_neutral')

    const wrapperPrimary = mount(BBadge, { props: { border: 'primary' } })

    expect(wrapperPrimary.classes()).toContain('badge_primary')
  })

  it('renders default slot content', () => {
    const wrapper = mount(BBadge, {
      slots: { default: 'Badge' }
    })

    expect(wrapper.find('.badge_body').text()).toBe('Badge')
  })
})
