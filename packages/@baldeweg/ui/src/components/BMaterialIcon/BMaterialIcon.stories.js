import BMaterialIcon from './BMaterialIcon.vue'

export default {
  title: 'Components/BMaterialIcon',
  component: BMaterialIcon,
  argTypes: {
    size: {
      control: { type: 'number' },
      description: 'Sets the size of the icon in pixels',
    },
    color: {
      control: { type: 'color' },
      description: 'Sets the color of the icon. Accepts a string (e.g. hex code, custom properties)',
    },
    hover: {
      control: { type: 'boolean' },
      description: 'Enables hover effect',
    },
  },
}

const Template = (args) => ({
  components: { BMaterialIcon },
  setup() {
    return { args }
  },
  template: `<BMaterialIcon v-bind="args">home</BMaterialIcon>`,
})

export const Default = Template.bind({})
Default.args = {
  size: 24,
  color: '#ffffff',
  hover: false,
}

export const Large = Template.bind({})
Large.args = {
  size: 48,
  color: '#ffffff',
  hover: false,
}

export const Colored = Template.bind({})
Colored.args = {
  size: 24,
  color: '#ff0000',
  hover: false,
}

export const WithHoverEffect = Template.bind({})
WithHoverEffect.args = {
  size: 24,
  color: '#ff0000',
  hover: true,
}
