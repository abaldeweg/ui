import BFieldset from './BFieldset.vue'

export default {
  title: 'Components/BFieldset',
  component: BFieldset,
  argTypes: {
    legend: { control: 'text' }
  }
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
