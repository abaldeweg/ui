import BCode from './BCode.vue'

export default {
  component: BCode,
  argTypes: {
    default: {
      control: 'text',
      description: 'The content to be displayed inside the code block'
    }
  },
  tags: ['beta'],
}

const Template = (args) => ({
  components: { BCode },
  setup() {
    return { args }
  },
  template: '<b-code>{{ args.default }}</b-code>'
})

export const Default = Template.bind({})
Default.args = {
  default: 'const example = "test";\nconsole.log(example);'
}
