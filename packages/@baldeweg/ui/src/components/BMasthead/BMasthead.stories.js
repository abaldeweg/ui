import BMasthead from './BMasthead.vue'

export default {
  title: 'Components/BMasthead',
  component: BMasthead,
}

const Template = (args) => ({
  components: { BMasthead },
  setup() {
    return { args }
  },
  template: '<BMasthead v-bind="args"><div style="padding: 0 1rem;">Masthead Content</div></BMasthead>',
})

export const Default = Template.bind({})
Default.args = {}

export const WithContent = Template.bind({})
WithContent.args = {}
WithContent.decorators = [
  () => ({
    template: `
      <div style="padding-top: 60px; height: 200px;">
        <story />
        <div style="padding: 0 1rem;">Page content below the masthead</div>
      </div>
    `,
  }),
]
