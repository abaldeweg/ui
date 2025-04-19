import BTooltip from './BTooltip.vue'

export default {
  title: 'Components/BTooltip',
  component: BTooltip,
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the tooltip',
      table: {
        defaultValue: { summary: 'top' }
      }
    },
    text: {
      control: { type: 'text' },
      description: 'Text content of the tooltip'
    }
  }
}

const Template = (args) => ({
  components: { BTooltip },
  setup() {
    return { args }
  },
  template: `
    <BTooltip v-bind="args">
      <button>Hover me</button>
    </BTooltip>
  `
})

export const Default = Template.bind({})
Default.args = {
  text: 'This is a tooltip',
  position: 'top'
}
export const Bottom = Template.bind({})
Bottom.args = {
  text: 'This is a bottom tooltip',
  position: 'bottom'
}

export const Left = Template.bind({})
Left.args = {
  text: 'This is a left tooltip',
  position: 'left'
}

export const Right = Template.bind({})
Right.args = {
  text: 'This is a right tooltip',
  position: 'right'
}

// Long text tooltip example
export const LongText = Template.bind({})
LongText.args = {
  text: 'This is a tooltip with a very long text content that demonstrates how the component handles wrapping larger amounts of content.',
  position: 'top'
}
