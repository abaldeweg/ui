import BBadge from './BBadge.vue'
import BMaterialIcon from '../BMaterialIcon/BMaterialIcon.vue'

export default {
  component: BBadge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['none', 'inline', 'superscript'],
      description: 'The variant style of the badge',
    },
    position: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'The position of the badge content',
    },
    background: {
      control: { type: 'select' },
      options: ['none', 'primary', 'neutral'],
      description: 'The background color of the badge',
    },
    content: {
      control: 'text',
      description: 'The content to display in the badge',
    },
    hideEmpty: {
      control: 'boolean',
      description: 'Whether to hide the badge when empty',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The BBadge component is used to display status indicators, counts, or labels.',
      },
    },
  },
  tags: ['experimental'],
}

const Template = (args) => ({
  components: { BBadge, BMaterialIcon },
  setup() {
    return { args }
  },
  template: `
    <BBadge v-bind="args">
      {{ args.default }}
      <a href="#">Link</a>
      <template v-if="args.icon" #icon>
        <BMaterialIcon>{{ args.icon }}</BMaterialIcon>
      </template>
      <template v-if="args.action" #action>
        <BMaterialIcon :size="18" color="var(--color-neutral-08)" hover>{{ args.action }}</BMaterialIcon>
      </template>
    </BBadge>
  `,
})

export const Default = Template.bind({})
Default.args = {
  default: 'Badge',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  default: 'Badge with Icon',
  icon: 'star',
}

export const WithAction = Template.bind({})
WithAction.args = {
  default: 'Badge with Action',
  action: 'close',
}

export const WithInlineVariant = Template.bind({})
WithInlineVariant.args = {
  default: 'Badge',
  variant: 'inline',
  content: '42',
}

export const WithSuperscriptVariant = Template.bind({})
WithSuperscriptVariant.args = {
  default: 'Badge',
  variant: 'superscript',
  content: '8',
}

export const WithPrimaryBackground = Template.bind({})
WithPrimaryBackground.args = {
  default: 'Badge with Primary Background',
  background: 'primary',
}

export const WithNeutralBackground = Template.bind({})
WithNeutralBackground.args = {
  default: 'Badge with Neutral Background',
  background: 'neutral',
}

export const WithLeftPosition = Template.bind({})
WithLeftPosition.args = {
  default: 'Badge with Left Content',
  variant: 'inline',
  position: 'left',
  content: '7',
}

export const Full = Template.bind({})
Full.args = {
  default: 'Shopping Cart',
  icon: 'shopping_cart',
  action: 'close',
  variant: 'inline',
  content: '3',
}
