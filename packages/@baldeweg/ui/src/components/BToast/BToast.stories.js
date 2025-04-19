import BToast from './BToast.vue'

export default {
  title: 'Components/BToast',
  component: BToast,
  argTypes: {
    type: {
      control: 'select',
      options: ['neutral', 'error', 'warning', 'success'],
      description: 'The type of the toast notification'
    },
    visible: {
      control: 'boolean',
      description: 'Controls the visibility of the toast'
    }
  },
  decorators: [() => ({ template: '<div style="padding: 3em; height: 300px; position: relative;"><story/></div>' })],
}

const Template = (args) => ({
  components: { BToast },
  setup() {
    return { args }
  },
  template: '<BToast v-bind="args">{{args.content || "This is a toast notification"}}</BToast>'
})

export const Default = Template.bind({})
Default.args = {
  visible: true,
  type: 'neutral',
  content: 'This is a default toast notification'
}

export const Error = Template.bind({})
Error.args = {
  visible: true,
  type: 'error',
  content: 'An error has occurred!'
}

export const Warning = Template.bind({})
Warning.args = {
  visible: true,
  type: 'warning',
  content: 'This is a warning message'
}

export const Success = Template.bind({})
Success.args = {
  visible: true,
  type: 'success',
  content: 'Operation completed successfully!'
}
