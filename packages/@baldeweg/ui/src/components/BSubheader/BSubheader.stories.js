import BSubheader from './BSubheader.vue'

export default {
  title: 'Components/BSubheader',
  component: BSubheader,
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content for the subheader',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
}

const Template = (args) => ({
  components: { BSubheader },
  setup() {
    return { args }
  },
  template: '<b-subheader>{{ args.default }}</b-subheader>',
})

export const Default = Template.bind({})
Default.args = {
  default: 'Default Subheader',
}
