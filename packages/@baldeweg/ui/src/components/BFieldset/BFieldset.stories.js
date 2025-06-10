import BFieldset from './BFieldset.vue'

export default {
  component: BFieldset,
  argTypes: {
    legend: { control: 'text' }
  },
  tags: ['beta'],
}

export const Default = {
  args: {
    legend: 'Label'
  },
  render: (args) => ({
    components: { BFieldset },
    setup() {
      return { args }
    },
    template: `
      <BFieldset v-bind="args">
        <button>Submit</button>
      </BFieldset>
    `
  })
}
