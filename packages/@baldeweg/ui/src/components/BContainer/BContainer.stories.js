import BContainer from './BContainer.vue'

export default {
  component: BContainer,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['l', 'm', 's'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'right', 'center'],
    },
    highlight: {
      control: 'boolean',
    },
  },
  tags: ['experimental'],
}

const Template = (args) => ({
  components: { BContainer },
  setup() {
    return { args }
  },
  template: `
    <BContainer v-bind="args">
      <p>This is content inside the container.</p>
    </BContainer>
  `,
})

export const Default = Template.bind({})
Default.args = {
  size: 'l',
  align: 'left',
  highlight: false,
}

export const MediumSize = Template.bind({})
MediumSize.args = {
  size: 'm',
  align: 'left',
  highlight: false,
}

export const SmallSize = Template.bind({})
SmallSize.args = {
  size: 's',
  align: 'left',
  highlight: false,
}

export const CenterAligned = Template.bind({})
CenterAligned.args = {
  size: 'l',
  align: 'center',
  highlight: false,
}

export const RightAligned = Template.bind({})
RightAligned.args = {
  size: 'l',
  align: 'right',
  highlight: false,
}

export const Highlighted = Template.bind({})
Highlighted.args = {
  size: 'l',
  align: 'left',
  highlight: true,
}
