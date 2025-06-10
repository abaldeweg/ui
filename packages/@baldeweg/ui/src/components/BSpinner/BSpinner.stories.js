import BSpinner from './BSpinner.vue'

export default {
  title: 'Components/BSpinner',
  component: BSpinner,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
      description: 'Controls the size of the spinner'
    }
  },
  tags: ['beta'],
}

const Template = (args) => ({
  components: { BSpinner },
  setup() {
    return { args }
  },
  template: '<b-spinner v-bind="args" />'
})

export const Small = Template.bind({})
Small.args = {
  size: 's'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'm'
}

export const Large = Template.bind({})
Large.args = {
  size: 'l'
}
