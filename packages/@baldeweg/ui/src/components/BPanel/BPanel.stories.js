import BPanel from './BPanel.vue'

export default {
  component: BPanel,
  argTypes: {
    position: {
      control: { type: 'select', options: ['left', 'right'] },
      description: 'The position of the panel',
    },
    width: {
      control: { type: 'text' },
      description: 'The width of the panel',
    },
    modelValue: {
      control: { type: 'boolean' },
      description: 'Controls the visibility of the panel',
    },
    'update:modelValue': {
      action: 'update:modelValue',
      description: 'Event emitted when the panel is closed',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A sliding panel component that can be positioned on the left or right side of the screen.',
      },
    },
  },
  tags: ['beta'],
}

const Template = (args) => ({
  components: { BPanel },
  setup() {
    return { args }
  },
  template: `
    <div>
      <button @click="args.modelValue = true">Open Panel</button>
      <BPanel v-bind="args">
        <template #header v-if="args.showHeader">
          <div style="padding: 1rem;">
            <h2>Panel Header</h2>
          </div>
        </template>

        <div style="padding: 1rem;">
          <h3>Panel Content</h3>
          <p>This is the main content of the panel.</p>
        </div>

        <template #footer v-if="args.showFooter">
          <div style="padding: 1rem;">
            <button @click="args.modelValue = false">Close</button>
          </div>
        </template>
      </BPanel>
    </div>
  `,
})

export const LeftPanel = Template.bind({})
LeftPanel.args = {
  modelValue: false,
  position: 'left',
  width: '300px',
  showHeader: true,
  showFooter: true,
}

export const RightPanel = Template.bind({})
RightPanel.args = {
  modelValue: false,
  position: 'right',
  width: '300px',
  showHeader: true,
  showFooter: true,
}

export const WithoutHeader = Template.bind({})
WithoutHeader.args = {
  modelValue: false,
  position: 'left',
  width: '300px',
  showHeader: false,
  showFooter: true,
}

export const WithoutFooter = Template.bind({})
WithoutFooter.args = {
  modelValue: false,
  position: 'left',
  width: '300px',
  showHeader: true,
  showFooter: false,
}

export const CustomWidth = Template.bind({})
CustomWidth.args = {
  modelValue: false,
  position: 'left',
  width: '500px',
  showHeader: true,
  showFooter: true,
}
