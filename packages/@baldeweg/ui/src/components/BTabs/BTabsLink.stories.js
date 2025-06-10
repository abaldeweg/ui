import BTabsLink from './BTabsLink.vue'

export default {
  title: 'Components/BTabs/BTabsLink',
  component: BTabsLink,
  argTypes: {
    default: {
      control: 'text',
      description: 'Default slot content',
    },
  },
  tags: ['beta'],
}

const Template = (args) => ({
  components: { BTabsLink },
  setup() {
    return { args }
  },
  template: '<b-tabs-link>{{ args.default }}</b-tabs-link>',
})

export const Default = Template.bind({})
Default.args = {
  default: 'Tab Link',
}

export const WithLink = () => ({
  components: { BTabsLink },
  template: `
    <b-tabs-link>
      <a href="#" @click.prevent>Link in Tab</a>
    </b-tabs-link>
  `,
})

export const MultipleLinks = () => ({
  components: { BTabsLink },
  template: `
    <div style="display: flex; background: var(--color-neutral-01); padding: 10px;">
      <b-tabs-link>
        <a href="#" @click.prevent>First Tab</a>
      </b-tabs-link>
      <b-tabs-link>
        <a href="#" @click.prevent>Second Tab</a>
      </b-tabs-link>
      <b-tabs-link>
        <a href="#" @click.prevent>Third Tab</a>
      </b-tabs-link>
    </div>
  `,
})
