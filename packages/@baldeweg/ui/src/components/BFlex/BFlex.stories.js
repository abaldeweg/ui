import BFlex from './BFlex.vue'

export default {
  title: 'Components/BFlex',
  component: BFlex,
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Sets the flex direction',
    },
    justify: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Sets justify-content property',
    },
    align: {
      control: { type: 'select' },
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      description: 'Sets align-items property',
    },
    gap: {
      control: { type: 'text' },
      description: 'Sets the gap between flex items (e.g. "10px", "1rem")',
    },
  },
}

const Template = (args) => ({
  components: { BFlex },
  setup() {
    return { args }
  },
  template: `
    <BFlex v-bind="args">
      <div style="padding: 20px; background-color: #e0e0e0;">Item 1</div>
      <div style="padding: 20px; background-color: #f0f0f0;">Item 2</div>
      <div style="padding: 20px; background-color: #e0e0e0;">Item 3</div>
    </BFlex>
  `,
})

export const Default = Template.bind({})
Default.args = {
  direction: 'row',
  justify: 'flex-start',
  align: 'stretch',
  gap: '10px',
}

export const RowDirection = Template.bind({})
RowDirection.args = {
  direction: 'row',
  justify: 'space-between',
  align: 'center',
  gap: '20px',
}

export const ColumnDirection = Template.bind({})
ColumnDirection.args = {
  direction: 'column',
  justify: 'center',
  align: 'center',
  gap: '15px',
}

export const RowReverseDirection = Template.bind({})
RowReverseDirection.args = {
  direction: 'row-reverse',
  justify: 'flex-end',
  align: 'center',
  gap: '10px',
}

export const SpaceBetween = Template.bind({})
SpaceBetween.args = {
  direction: 'row',
  justify: 'space-between',
  align: 'center',
  gap: '10px',
}
