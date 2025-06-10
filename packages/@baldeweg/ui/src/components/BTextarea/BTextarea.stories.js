import BTextarea from './BTextarea.vue'

export default {
  component: BTextarea,
  parameters: {
    docs: {
      description: {
        component: 'Additional attributes are passed to the underlying input element.',
      },
    },
  },
  tags: ['experimental'],
  argTypes: {
    modelValue: { control: 'text' },
    name: { control: 'text' },
    id: { control: 'text' },
    label: { control: 'text' },
    hideLabel: { control: 'boolean' },
    help: { control: 'text' },
  },
}

const Template = (args) => ({
  components: { BTextarea },
  setup() {
    return { args }
  },
  template: '<BTextarea v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  modelValue: 'This is some sample text for the textarea.',
  name: 'textarea',
  id: 'textarea',
  label: 'Label',
}

export const WithHelpText = Template.bind({})
WithHelpText.args = {
  ...Default.args,
  help: 'This is some help text for the textarea.',
}

export const HiddenLabel = Template.bind({})
HiddenLabel.args = {
  ...Default.args,
  hideLabel: true,
}
