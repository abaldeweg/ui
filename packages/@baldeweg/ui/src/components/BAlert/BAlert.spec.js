import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BAlert from './BAlert.vue'

describe('BAlert', () => {
  it('shows BAlert', () => {
    expect(BAlert).toBeTruthy()
  })

  it('sets alert_info class', () => {
    const wrapper = mount(BAlert, {
      props: {
        type: 'info'
      },
      global: {
        stubs: {
          BMaterialIcon: true
        }
      }
    })
    expect(wrapper.classes()).toContain('alert_info')
  })

  it('sets alert_danger class', () => {
    const wrapper = mount(BAlert, {
      props: {
        type: 'danger'
      },
      global: {
        stubs: {
          BMaterialIcon: true
        }
      }
    })
    expect(wrapper.classes()).toContain('alert_danger')
  })

  it('sets alert_warning class', () => {
    const wrapper = mount(BAlert, {
      props: {
        type: 'warning'
      },
      global: {
        stubs: {
          BMaterialIcon: true
        }
      }
    })
    expect(wrapper.classes()).toContain('alert_warning')
  })

  it('sets alert_success class', () => {
    const wrapper = mount(BAlert, {
      props: {
        type: 'success'
      },
      global: {
        stubs: {
          BMaterialIcon: true
        }
      }
    })
    expect(wrapper.classes()).toContain('alert_success')
  })

  it('uses info type by default', () => {
    const wrapper = mount(BAlert, {
      global: {
        stubs: {
          BMaterialIcon: true
        }
      }
    })
    expect(wrapper.classes()).toContain('alert_info')
  })
})
