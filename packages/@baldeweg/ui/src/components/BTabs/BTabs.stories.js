import BTabs from './BTabs.vue'
import BTabsLink from './BTabsLink.vue'

export default {
  component: BTabs,
  argTypes: {
    justify: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    },
  },
  tags: ['experimental'],
}

const Template = (args) => ({
  components: { BTabs, BTabsLink },
  setup() {
    return { args }
  },
  template: `
    <BTabs v-bind="args">
      <BTabsLink title="Tab 1">Content for Tab 1</BTabsLink>
      <BTabsLink title="Tab 2">Content for Tab 2</BTabsLink>
      <BTabsLink title="Tab 3">Content for Tab 3</BTabsLink>
    </BTabs>
  `,
})

export const Default = Template.bind({})
Default.args = {
  justify: 'flex-start',
}

export const Centered = Template.bind({})
Centered.args = {
  justify: 'center',
}

export const EndJustified = Template.bind({})
EndJustified.args = {
  justify: 'flex-end',
}

export const SpaceBetween = Template.bind({})
SpaceBetween.args = {
  justify: 'space-between',
}
