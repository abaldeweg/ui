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

  it('renders .badge_content if it has a value', () => {
    const wrapper = mount(BBadge, { props: { content: 5, hideEmpty: true } })

    expect(wrapper.find('.badge_content').exists()).toBe(true)
    expect(wrapper.find('.badge_content').text()).toBe('5')
  })

  it('does not render .badge_content if value is 0 or empty string and hideEmpty is true', () => {
    const wrapperZero = mount(BBadge, { props: { content: 0, hideEmpty: true } })

    expect(wrapperZero.find('.badge_content').exists()).toBe(false)

    const wrapperEmpty = mount(BBadge, { props: { content: '', hideEmpty: true } })

    expect(wrapperEmpty.find('.badge_content').exists()).toBe(false)
  })
})
