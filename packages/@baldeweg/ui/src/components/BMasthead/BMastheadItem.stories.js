import BMastheadItem from './BMastheadItem.vue'

export default {
  component: BMastheadItem,
  argTypes: {
    position: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Position of the masthead item',
    },
  },
  tags: ['experimental'],
}

export const Start = {
  args: {
    position: 'start',
  },
  render: (args) => ({
    components: { BMastheadItem },
    setup() {
      return { args }
    },
    template: '<BMastheadItem v-bind="args">Content at start position</BMastheadItem>'
  }),
}

export const Center = {
  args: {
    position: 'center',
  },
  render: (args) => ({
    components: { BMastheadItem },
    setup() {
      return { args }
    },
    template: '<BMastheadItem v-bind="args">Content at center position</BMastheadItem>'
  }),
}

export const End = {
  args: {
    position: 'end',
  },
  render: (args) => ({
    components: { BMastheadItem },
    setup() {
      return { args }
    },
    template: '<BMastheadItem v-bind="args">Content at end position</BMastheadItem>'
  }),
}
