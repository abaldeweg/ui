import BInput from './BInput.vue'

export default {
  title: 'Components/BInput',
  component: BInput,
  argTypes: {
    modelValue: { control: 'text' },
    type: {
      control: 'select',
      options: ['date', 'color', 'datetime-local', 'email', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week'],
    },
    name: { control: 'text' },
    id: { control: 'text' },
    label: { control: 'text' },
    help: { control: 'text' },
    hideLabel: { control: 'boolean' },
    'update:modelValue': { action: 'updated' },
  },
  parameters: {
    docs: {
      description: {
        component: "Not applicable to checkbox and radio. Additional attributes are passed to the underlying input element. For types refer to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes."
      }
    }
  }
}

const Template = (args) => ({
  components: { BInput },
  setup() {
    return { args }
  },
  template: '<BInput v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  modelValue: '',
  type: 'text',
  name: 'default-input',
  id: 'default-input',
  label: 'Input Label',
  help: 'This is a help text',
  hideLabel: false,
}

export const TextInput = Template.bind({})
TextInput.args = {
  modelValue: 'Test',
  type: 'text',
  name: 'text-input',
  id: 'text-input',
  label: 'Text Input',
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  modelValue: '',
  type: 'password',
  name: 'password-input',
  id: 'password-input',
  label: 'Password',
}

export const NumberInput = Template.bind({})
NumberInput.args = {
  modelValue: '42',
  type: 'number',
  name: 'number-input',
  id: 'number-input',
  label: 'Number Input',
}

export const ColorInput = Template.bind({})
ColorInput.args = {
  modelValue: '#ff0000',
  type: 'color',
  name: 'color-input',
  id: 'color-input',
  label: 'Color Input',
}

export const DateInput = Template.bind({})
DateInput.args = {
  modelValue: '2025-01-01',
  type: 'date',
  name: 'date-input',
  id: 'date-input',
  label: 'Date Input',
}

export const EmailInput = Template.bind({})
EmailInput.args = {
  modelValue: 'user@localhost',
  type: 'email',
  name: 'email-input',
  id: 'email-input',
  label: 'Email Input',
}

export const MonthInput = Template.bind({})
MonthInput.args = {
  modelValue: '2025-01',
  type: 'month',
  name: 'month-input',
  id: 'month-input',
  label: 'Month Input',
}

export const RangeInput = Template.bind({})
RangeInput.args = {
  modelValue: '50',
  type: 'range',
  name: 'range-input',
  id: 'range-input',
  label: 'Range Input',
}

export const SearchInput = Template.bind({})
SearchInput.args = {
  modelValue: 'Query',
  type: 'search',
  name: 'search-input',
  id: 'search-input',
  label: 'Search Input',
}

export const TelInput = Template.bind({})
TelInput.args = {
  modelValue: '+1234567890',
  type: 'tel',
  name: 'tel-input',
  id: 'tel-input',
  label: 'Telephone Input',
}

export const TimeInput = Template.bind({})
TimeInput.args = {
  modelValue: '13:30',
  type: 'time',
  name: 'time-input',
  id: 'time-input',
  label: 'Time Input',
}

export const UrlInput = Template.bind({})
UrlInput.args = {
  modelValue: 'http://localhost',
  type: 'url',
  name: 'url-input',
  id: 'url-input',
  label: 'URL Input',
}

export const WeekInput = Template.bind({})
WeekInput.args = {
  modelValue: '2025-W01',
  type: 'week',
  name: 'week-input',
  id: 'week-input',
  label: 'Week Input',
}

export const DatetimeLocalInput = Template.bind({})
DatetimeLocalInput.args = {
  modelValue: '2025-01-01T13:30',
  type: 'datetime-local',
  name: 'datetime-local-input',
  id: 'datetime-local-input',
  label: 'Datetime Local Input',
}

export const HiddenLabel = Template.bind({})
HiddenLabel.args = {
  modelValue: '',
  type: 'text',
  name: 'hidden-label-input',
  id: 'hidden-label-input',
  label: 'This label is hidden',
  hideLabel: true,
}
