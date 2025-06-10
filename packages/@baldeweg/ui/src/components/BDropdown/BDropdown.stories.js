import BDropdown from './BDropdown.vue'

export default {
  component: BDropdown,
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['selector', 'mouse', 'bottom'],
    },
    keepOpen: {
      control: 'boolean',
    },
  },
  tags: ['beta'],
}

const Template = (args) => ({
  components: { BDropdown },
  setup() {
    return { args }
  },
  template: `
    <div style="height: 300px; padding: 50px;">
      <BDropdown v-bind="args">
        <template #selector>
          <button>
            Click to open dropdown
          </button>
        </template>
        <li style="padding: 10px;">Item 1</li>
        <li style="padding: 10px;">Item 2</li>
        <li style="padding: 10px;">Item 3</li>
      </BDropdown>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  position: 'selector',
  keepOpen: false,
}

export const MousePosition = Template.bind({})
MousePosition.args = {
  position: 'mouse',
  keepOpen: false,
}

export const BottomPosition = Template.bind({})
BottomPosition.args = {
  position: 'bottom',
  keepOpen: false,
}

export const KeepOpen = Template.bind({})
KeepOpen.args = {
  position: 'selector',
  keepOpen: true,
}
