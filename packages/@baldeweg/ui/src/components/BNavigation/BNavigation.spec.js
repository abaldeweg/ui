import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BNavigation from './BNavigation.vue'

describe('BNavigation', () => {
  // general
  it('shows BNavigation', () => {
    expect(BNavigation).toBeTruthy()
  })

  // border
  it('does not apply a border class when border is none', () => {
    const wrapper = mount(BNavigation, { props: { border: 'none' } })
    expect(wrapper.classes()).not.toContain('navigation_border_primary')
    expect(wrapper.classes()).not.toContain('navigation_border_neutral')
  })

  it('applies navigation_border_primary class when border is primary', () => {
    const wrapper = mount(BNavigation, { props: { border: 'primary' } })
    expect(wrapper.classes()).toContain('navigation_border_primary')
  })

  it('applies navigation_border_neutral class when border is neutral', () => {
    const wrapper = mount(BNavigation, { props: { border: 'neutral' } })
    expect(wrapper.classes()).toContain('navigation_border_neutral')
  })

  // background
  it('does not apply a background class when background is none', () => {
    const wrapper = mount(BNavigation, { props: { background: 'none' } })
    expect(wrapper.classes()).not.toContain('navigation_background_primary')
    expect(wrapper.classes()).not.toContain('navigation_background_neutral')
  })

  it('applies navigation_background_primary class when background is primary', () => {
    const wrapper = mount(BNavigation, { props: { background: 'primary' } })
    expect(wrapper.classes()).toContain('navigation_background_primary')
  })

  it('applies navigation_background_neutral class when background is neutral', () => {
    const wrapper = mount(BNavigation, { props: { background: 'neutral' } })
    expect(wrapper.classes()).toContain('navigation_background_neutral')
  })

  // direction
  it('applies navigation_horizontal class when direction is horizontal', () => {
    const wrapper = mount(BNavigation, { props: { direction: 'horizontal' } })
    expect(wrapper.classes()).toContain('navigation_horizontal')
  })

  it('does not apply navigation_horizontal class when direction is vertical', () => {
    const wrapper = mount(BNavigation, { props: { direction: 'vertical' } })
    expect(wrapper.classes()).not.toContain('navigation_horizontal')
  })
})
