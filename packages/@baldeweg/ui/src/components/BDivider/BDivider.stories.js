import BDivider from './BDivider.vue'

export default {
  component: BDivider,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['l', 'm', 's', 'xs'],
    },
  },
  tags: ['experimental'],
}

const Template = (args) => ({
  components: { BDivider },
  setup() {
    return { args }
  },
  template: '<BDivider v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  size: 'l',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'm',
}

export const Small = Template.bind({})
Small.args = {
  size: 's',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs',
}
