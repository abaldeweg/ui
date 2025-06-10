import BSearch from './BSearch.vue'

export default {
  title: 'Components/BSearch',
  component: BSearch,
  argTypes: {
    placeholder: { control: 'text' },
    modelValue: { control: 'text' },
    filter: { control: 'boolean' },
    branded: { control: 'boolean' },
    focus: { control: 'boolean' },
    reset: { control: 'boolean' },
    resetLabel: { control: 'text' },
    filterLabel: { control: 'text' },
    searchLabel: { control: 'text' },
    submit: { action: 'submit' },
    onReset: { action: 'reset' },
    onFilter: { action: 'filter' },
    'update:modelValue': { action: 'update:modelValue' }
  },
  tags: ['beta'],
}

const Template = (args) => ({
  components: { BSearch },
  setup() {
    return { args }
  },
  template: '<BSearch v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Search',
  modelValue: '',
  searchLabel: 'Search'
}

export const WithFilter = Template.bind({})
WithFilter.args = {
  placeholder: 'Search',
  modelValue: '',
  filter: true,
  filterLabel: 'Show filters',
  searchLabel: 'Search'
}

export const WithReset = Template.bind({})
WithReset.args = {
  placeholder: 'Search',
  modelValue: 'Search term',
  reset: true,
  resetLabel: 'Clear search',
  searchLabel: 'Search'
}

export const Branded = Template.bind({})
Branded.args = {
  placeholder: 'Search',
  modelValue: '',
  branded: true,
  searchLabel: 'Search'
}

export const Autofocus = Template.bind({})
Autofocus.args = {
  placeholder: 'Search',
  modelValue: '',
  focus: true,
  searchLabel: 'Search'
}

export const WithAllFeatures = Template.bind({})
WithAllFeatures.args = {
  placeholder: 'Search',
  modelValue: 'Example search',
  filter: true,
  reset: true,
  branded: true,
  resetLabel: 'Clear search',
  filterLabel: 'Show filters',
  searchLabel: 'Search'
}
