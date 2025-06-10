import BDropdownItem from './BDropdownItem.vue'
import BMaterialIcon from '../BMaterialIcon/BMaterialIcon.vue'

export default {
  title: 'Components/BDropdown/BDropdownItem',
  component: BDropdownItem,
  argTypes: {
    bold: {
      control: 'boolean',
      description: 'Makes the text bold',
    },
    noHover: {
      control: 'boolean',
      description: 'Disables hover effect',
    },
    icon: {
      control: 'text',
      description: 'Material icon name to display',
    },
  },
  tags: ['beta'],
}

export const Default = {
  render: (args) => ({
    components: { BDropdownItem, BMaterialIcon },
    setup() {
      return { args }
    },
    template: '<BDropdownItem v-bind="args">Dropdown Item Text</BDropdownItem>',
  }),
  args: {},
}

export const WithIcon = {
  render: (args) => ({
    components: { BDropdownItem, BMaterialIcon },
    setup() {
      return { args }
    },
    template: '<BDropdownItem v-bind="args">Dropdown Item with Icon</BDropdownItem>',
  }),
  args: {
    icon: 'settings',
  },
}

export const Bold = {
  render: (args) => ({
    components: { BDropdownItem, BMaterialIcon },
    setup() {
      return { args }
    },
    template: '<BDropdownItem v-bind="args">Bold Dropdown Item</BDropdownItem>',
  }),
  args: {
    bold: true,
  },
}

export const NoHover = {
  render: (args) => ({
    components: { BDropdownItem, BMaterialIcon },
    setup() {
      return { args }
    },
    template: '<BDropdownItem v-bind="args">Dropdown Item without Hover</BDropdownItem>',
  }),
  args: {
    noHover: true,
  },
}

export const Combined = {
  render: (args) => ({
    components: { BDropdownItem, BMaterialIcon },
    setup() {
      return { args }
    },
    template: '<BDropdownItem v-bind="args">Combined Properties</BDropdownItem>',
  }),
  args: {
    bold: true,
    icon: 'star',
    noHover: false,
  },
}
