import BSelect from './BSelect.vue'

export default {
  title: 'Components/BSelect',
  component: BSelect,
  parameters: {
    docs: {
      description: {
        component: 'Additional attributes are passed to the underlying input or select element.',
      },
    },
  },
  argTypes: {
    modelValue: {
      control: 'object',
    },
    type: {
      control: 'select',
      options: ['checkbox', 'radio', 'options'],
    },
    name: { control: 'text' },
    id: { control: 'text' },
    help: { control: 'text' },
    options: { control: 'object' },
  },
}

const Template = (args) => ({
  components: { BSelect },
  setup() {
    return { args }
  },
  template: '<BSelect v-bind="args" />',
})

export const Checkbox = Template.bind({})
Checkbox.args = {
  modelValue: ['option1', 'option3'],
  name: 'checkbox',
  id: 'checkbox',
  type: 'checkbox',
  options: {
    option1: 'Option 1',
    option2: 'Option 2',
    option3: 'Option 3',
    option4: 'Option 4',
  },
}

export const RadioButton = Template.bind({})
RadioButton.args = {
  modelValue: 'option2',
  name: 'radio',
  id: 'radio',
  type: 'radio',
  options: {
    option1: 'Option 1',
    option2: 'Option 2',
    option3: 'Option 3',
    option4: 'Option 4',
  },
}

export const DropdownSelect = Template.bind({})
DropdownSelect.args = {
  modelValue: 'option2',
  name: 'dropdown',
  id: 'dropdown',
  type: 'options',
  options: {
    option1: 'Option 1',
    option2: 'Option 2',
    option3: 'Option 3',
    option4: 'Option 4',
  },
}

export const WithHelpText = Template.bind({})
WithHelpText.args = {
  modelValue: [],
  name: 'helpline',
  id: 'helpline',
  type: 'radio',
  help: 'Select one option',
  options: {
    option1: 'Yes',
    option2: 'No',
    option3: 'Maybe',
  },
}
