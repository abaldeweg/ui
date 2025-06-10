import BSliderItem from './BSliderItem.vue'

export default {
  component: BSliderItem,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'l', 'xl'],
    },
  },
  tags: ['experimental'],
}

const Template = (args) => ({
  components: { BSliderItem },
  setup() {
    return { args }
  },
  template: '<BSliderItem v-bind="args">Slider Item Content</BSliderItem>',
})

export const Default = Template.bind({})
Default.args = {
  size: 'm',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs',
}

export const Small = Template.bind({})
Small.args = {
  size: 's',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'm',
}

export const Large = Template.bind({})
Large.args = {
  size: 'l',
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  size: 'xl',
}

export const WithCustomContent = (args) => ({
  components: { BSliderItem },
  setup() {
    return { args }
  },
  template: `
    <BSliderItem v-bind="args">
      <div style="padding: 20px; background-color:rgb(0, 0, 0); border-radius: 4px; text-align: center;">
        <h3>Custom Content</h3>
        <p>You can place any content inside the slider item.</p>
      </div>
    </BSliderItem>
  `,
})
WithCustomContent.args = {
  size: 'm',
}
