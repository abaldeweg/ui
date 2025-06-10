import BCard from './BCard.vue'
import placeholderImage from '../../assets/placeholder_16x9.jpg'

export default {
  component: BCard,
  argTypes: {
    outlined: {
      control: 'boolean',
      description: 'Sets an outline style for the card',
    },
    filled: {
      control: 'boolean',
      description: 'Sets a filled background style for the card',
    },
    route: {
      control: 'object',
      description: 'Router link object for clickable card elements',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A versatile card component that can display various content with different styles.',
      },
    },
  },
  tags: ['beta'],
}

const Template = (args) => ({
  components: { BCard },
  setup() {
    return { args, placeholderImage }
  },
  template: `
    <BCard v-bind="args">
      <template #title>Card Title</template>
      <template #subtitle v-if="args.subtitle">Card Subtitle</template>
      <template #text v-if="args.text">This is the card content that provides more information about this card item.</template>
      <template #image v-if="args.image">
        <img :src="placeholderImage" alt="Card image" />
      </template>
      <template #actions v-if="args.actions">
        <button>Action 1</button>
        <button>Action 2</button>
      </template>
    </BCard>
  `,
})

export const Default = Template.bind({})
Default.args = {
  outlined: false,
  filled: false,
  text: true,
}

export const Outlined = Template.bind({})
Outlined.args = {
  outlined: true,
  text: true,
}

export const Filled = Template.bind({})
Filled.args = {
  filled: true,
  text: true,
}

export const WithImage = Template.bind({})
WithImage.args = {
  outlined: true,
  text: true,
  image: true,
}

export const WithSubtitle = Template.bind({})
WithSubtitle.args = {
  outlined: true,
  subtitle: true,
  text: true,
}

export const WithActions = Template.bind({})
WithActions.args = {
  outlined: true,
  text: true,
  actions: true,
}

export const CompleteCard = Template.bind({})
CompleteCard.args = {
  outlined: true,
  image: true,
  subtitle: true,
  text: true,
  actions: true,
}

export const ClickableCard = Template.bind({})
ClickableCard.args = {
  outlined: true,
  image: true,
  subtitle: true,
  text: true,
  route: { path: '/' },
}
