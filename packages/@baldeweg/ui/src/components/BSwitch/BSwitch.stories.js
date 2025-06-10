import BSwitch from './BSwitch.vue'

export default {
  component: BSwitch,
  argTypes: {
    modelValue: { control: 'boolean' },
    label: { control: 'text' },
  },
  tags: ['experimental'],
}

const Template = (args) => ({
  components: { BSwitch },
  setup() {
    return { args }
  },
  template: '<BSwitch v-bind="args" v-model="args.modelValue" />',
})

export const Default = Template.bind({})
Default.args = {
  modelValue: false,
  label: 'Switch Label',
}

export const Checked = Template.bind({})
Checked.args = {
  modelValue: true,
  label: 'Switch Label',
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  modelValue: false,
}
