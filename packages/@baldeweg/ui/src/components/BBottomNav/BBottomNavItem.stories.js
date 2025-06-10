import BBottomNavItem from './BBottomNavItem.vue'
import BMaterialIcon from '../BMaterialIcon/BMaterialIcon.vue'

export default {
  component: BBottomNavItem,
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text displayed below the icon'
    }
  },
  tags: ['beta'],
}

const Template = (args) => ({
  components: { BBottomNavItem, BMaterialIcon },
  setup() {
    return { args }
  },
  template: `
    <BBottomNavItem v-bind="args">
      <BMaterialIcon>{{ args.icon }}</BMaterialIcon>
    </BBottomNavItem>
  `
})

export const Default = Template.bind({})
Default.args = {
  title: 'Menu',
  icon: 'menu'
}
