import BNav from './BNav.vue'

export default {
  title: 'Components/BNav',
  component: BNav,
  argTypes: {
    nav: {
      control: 'object',
      description: 'Navigation items array',
    },
  },
  tags: ['beta'],
}

const Template = (args) => ({
  components: { BNav },
  setup() {
    return { args }
  },
  template: '<BNav v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  nav: [
    {
      title: 'Dashboard',
      route: { name: 'dashboard' },
      icon: { type: 'icon', value: 'dashboard' },
    },
    {
      title: 'Settings',
      route: { name: 'settings' },
      icon: { type: 'icon', value: 'settings' },
    },
    {
      title: 'Profile',
      route: { name: 'profile' },
      icon: { type: 'icon', value: 'person' },
    },
  ],
}

export const WithDots = Template.bind({})
WithDots.args = {
  nav: [
    {
      title: 'Active Project',
      route: { name: 'project1' },
      icon: { type: 'dot', value: 'var(--color-green)' },
    },
    {
      title: 'Paused Project',
      route: { name: 'project2' },
      icon: { type: 'dot', value: 'var(--color-yellow)' },
    },
    {
      title: 'Completed Project',
      route: { name: 'project3' },
      icon: { type: 'dot', value: 'var(--color-blue)' },
    },
  ],
}

export const WithBadges = Template.bind({})
WithBadges.args = {
  nav: [
    {
      title: 'Inbox',
      route: { name: 'inbox' },
      icon: { type: 'icon', value: 'inbox' },
      badge: '4',
    },
    {
      title: 'Notifications',
      route: { name: 'notifications' },
      icon: { type: 'icon', value: 'notifications' },
      badge: '12',
    },
    {
      title: 'Messages',
      route: { name: 'messages' },
      icon: { type: 'icon', value: 'mail' },
      badge: '3',
    },
  ],
}

export const ExternalLinks = Template.bind({})
ExternalLinks.args = {
  nav: [
    {
      title: 'Documentation',
      route: 'http://localhost',
      icon: { type: 'icon', value: 'description' },
    },
    {
      title: 'GitHub',
      route: 'http://localhost',
      icon: { type: 'icon', value: 'code' },
    },
    {
      title: 'Support',
      route: 'http://localhost',
      icon: { type: 'icon', value: 'help' },
    },
  ],
}
