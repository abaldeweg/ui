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
      control: 'array',
    },
    type: {
      control: 'select',
      options: ['checkbox', 'radio', 'options'],
    },
    name: { control: 'text' },
    id: { control: 'text' },
    help: { control: 'text' },
    options: { control: 'array' },
    optionsKeyName: { control: 'text' },
    optionsValueName: { control: 'text' },
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
  options: [
    { optionsKey: 'Option 1', optionsValue: 'option1' },
    { optionsKey: 'Option 2', optionsValue: 'option2' },
    { optionsKey: 'Option 3', optionsValue: 'option3' },
    { optionsKey: 'Option 4', optionsValue: 'option4' },
  ],
}

export const RadioButton = Template.bind({})
RadioButton.args = {
  modelValue: ['option2'],
  name: 'radio',
  id: 'radio',
  type: 'radio',
  options: [
    { optionsKey: 'Option 1', optionsValue: 'option1' },
    { optionsKey: 'Option 2', optionsValue: 'option2' },
    { optionsKey: 'Option 3', optionsValue: 'option3' },
    { optionsKey: 'Option 4', optionsValue: 'option4' },
  ],
}

export const DropdownSelect = Template.bind({})
DropdownSelect.args = {
  modelValue: ['option2'],
  name: 'dropdown',
  id: 'dropdown',
  type: 'options',
  options: [
    { optionsKey: 'Option 1', optionsValue: 'option1' },
    { optionsKey: 'Option 2', optionsValue: 'option2' },
    { optionsKey: 'Option 3', optionsValue: 'option3' },
    { optionsKey: 'Option 4', optionsValue: 'option4' },
  ],
}

export const WithHelpText = Template.bind({})
WithHelpText.args = {
  modelValue: [],
  name: 'helpline',
  id: 'helpline',
  type: 'radio',
  help: 'Select one option',
  options: [
    { optionsKey: 'yes', optionsValue: 'Yes' },
    { optionsKey: 'no', optionsValue: 'No' },
    { optionsKey: 'maybe', optionsValue: 'Maybe' },
  ],
}

export const WithCustomKeyNames = Template.bind({})
WithCustomKeyNames.args = {
  modelValue: ['custom2'],
  name: 'custom-keys',
  id: 'custom-keys',
  type: 'checkbox',
  optionsKeyName: 'label',
  optionsValueName: 'id',
  options: [
    { label: 'First Option', id: 'custom1' },
    { label: 'Second Option', id: 'custom2' },
    { label: 'Third Option', id: 'custom3' },
  ]
}
