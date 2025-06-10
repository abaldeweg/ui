import BSelect from './BSelect.vue'

export default {
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
  tags: ['experimental'],
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
    { optionsKey: 'option1', optionsValue: 'Option 1' },
    { optionsKey: 'option2', optionsValue: 'Option 2' },
    { optionsKey: 'option3', optionsValue: 'Option 3' },
    { optionsKey: 'option4', optionsValue: 'Option 4' },
  ],
}

export const RadioButton = Template.bind({})
RadioButton.args = {
  modelValue: ['option2'],
  name: 'radio',
  id: 'radio',
  type: 'radio',
  options: [
    { optionsKey: 'option1', optionsValue: 'Option 1' },
    { optionsKey: 'option2', optionsValue: 'Option 2' },
    { optionsKey: 'option3', optionsValue: 'Option 3' },
    { optionsKey: 'option4', optionsValue: 'Option 4' },
  ],
}

export const DropdownSelect = Template.bind({})
DropdownSelect.args = {
  modelValue: ['option2'],
  name: 'dropdown',
  id: 'dropdown',
  type: 'options',
  options: [
    { optionsKey: 'option1', optionsValue: 'Option 1' },
    { optionsKey: 'option2', optionsValue: 'Option 2' },
    { optionsKey: 'option3', optionsValue: 'Option 3' },
    { optionsKey: 'option4', optionsValue: 'Option 4' },
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
    { label: 'option1', id: 'First Option' },
    { label: 'option2', id: 'Second Option' },
    { label: 'option3', id: 'Third Option' },
  ]
}
