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
    permanent: {
      control: { type: 'boolean' },
      description: 'If true, panel is always shown, no overlay, and margin is added',
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
  tags: ['experimental'],
}

const Template = (args) => ({
  components: { BPanel },
  setup() {
    return { args }
  },
  template: `
    <div :style="args.modelValue && args.permanent ? { marginLeft: args.position === 'left' ? args.width : undefined, marginRight: args.position === 'right' ? args.width : undefined } : {}">
      <div :style="{margin: 'auto', width: '500px'}">
        <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text </p>
        <button @click="args.modelValue = true">Open Panel</button>
      </div>
    </div>
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
  `,
})

export const LeftPanel = Template.bind({})
LeftPanel.args = {
  modelValue: false,
  position: 'left',
  width: '300px',
  showHeader: true,
  showFooter: true,
  permanent: false,
}

export const RightPanel = Template.bind({})
RightPanel.args = {
  modelValue: false,
  position: 'right',
  width: '300px',
  showHeader: true,
  showFooter: true,
  permanent: false,
}

export const WithoutHeader = Template.bind({})
WithoutHeader.args = {
  modelValue: false,
  position: 'left',
  width: '300px',
  showHeader: false,
  showFooter: true,
  permanent: false,
}

export const WithoutFooter = Template.bind({})
WithoutFooter.args = {
  modelValue: false,
  position: 'left',
  width: '300px',
  showHeader: true,
  showFooter: false,
  permanent: false,
}

export const CustomWidth = Template.bind({})
CustomWidth.args = {
  modelValue: false,
  position: 'left',
  width: '500px',
  showHeader: true,
  showFooter: true,
  permanent: false,
}

export const PermanentPanel = Template.bind({})
PermanentPanel.args = {
  modelValue: true,
  position: 'left',
  width: '300px',
  showHeader: true,
  showFooter: true,
  permanent: true,
}
