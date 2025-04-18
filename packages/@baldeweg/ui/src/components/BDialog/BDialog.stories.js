import BDialog from './BDialog.vue'

export default {
  title: 'Components/BDialog',
  component: BDialog,
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Controls the visibility of the dialog'
    },
    canClose: {
      control: 'boolean',
      description: 'Whether the dialog can be closed by clicking the overlay'
    },
    'update:modelValue': {
      action: 'update:modelValue',
      description: 'Event emitted when dialog visibility changes'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A dialog component that can be toggled on/off and contain custom content and actions.'
      }
    }
  }
}

const Template = (args) => ({
  components: { BDialog },
  setup() {
    return { args }
  },
  template: `
    <div>
      <button @click="args.modelValue = true">Open Dialog</button>
      <BDialog v-bind="args">
        <template #default>
          <h2>Dialog Title</h2>
          <p>This is the content of the dialog. You can put any content here.</p>
        </template>
        <template #actions>
          <button @click="args.modelValue = false">Close</button>
          <button @click="args.modelValue = false" style="margin-left: 10px;">Submit</button>
        </template>
      </BDialog>
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  modelValue: false,
  canClose: true
}

export const NonClosable = Template.bind({})
NonClosable.args = {
  modelValue: false,
  canClose: false
}

export const OpenByDefault = Template.bind({})
OpenByDefault.args = {
  modelValue: true,
  canClose: true
}
