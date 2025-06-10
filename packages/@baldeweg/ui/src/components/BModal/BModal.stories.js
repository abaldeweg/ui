import BModal from './BModal.vue'
import BMaterialIcon from '../BMaterialIcon/BMaterialIcon.vue'

export default {
  component: BModal,
  argTypes: {
    modelValue: { control: 'boolean' },
    width: { control: { type: 'number', min: 200, max: 1000, step: 50 } },
    closeButton: { control: 'boolean' },
  },
  tags: ['experimental'],
}

export const Default = {
  render: (args) => ({
    components: { BModal, BMaterialIcon },
    setup() {
      return { args }
    },
    template: `
      <div>
        <button @click="args.modelValue = true">Open Modal</button>
        <BModal v-bind="args" @update:modelValue="args.modelValue = $event">
          <template #title>Modal Title</template>
          <p style="padding: 20px;">This is the modal content.</p>
        </BModal>
      </div>
    `,
  }),
  args: {
    modelValue: false,
    width: 600,
    closeButton: true,
  },
}

export const WithFooter = {
  render: (args) => ({
    components: { BModal, BMaterialIcon },
    setup() {
      return { args }
    },
    template: `
      <div>
        <button @click="args.modelValue = true">Open Modal With Footer</button>
        <BModal v-bind="args" @update:modelValue="args.modelValue = $event">
          <template #title>Modal With Footer</template>
          <p style="padding: 20px;">This modal has a footer with action buttons.</p>
          <template #footer>
            <div style="display: flex; justify-content: flex-end; gap: 10px;">
              <button @click="args.modelValue = false">Cancel</button>
              <button @click="args.modelValue = false">Save</button>
            </div>
          </template>
        </BModal>
      </div>
    `,
  }),
  args: {
    modelValue: false,
    width: 600,
    closeButton: true,
  },
}

export const NoCloseButton = {
  render: (args) => ({
    components: { BModal, BMaterialIcon },
    setup() {
      return { args }
    },
    template: `
      <div>
        <button @click="args.modelValue = true">Open Modal Without Close Button</button>
        <BModal v-bind="args" @update:modelValue="args.modelValue = $event">
          <template #title>No Close Button</template>
          <div style="padding: 20px;">
            <p>This modal has no close button in the header.</p>
            <p>Click the overlay to close.</p>
          </div>
        </BModal>
      </div>
    `,
  }),
  args: {
    modelValue: false,
    width: 600,
    closeButton: false,
  },
}

export const CustomWidth = {
  render: (args) => ({
    components: { BModal, BMaterialIcon },
    setup() {
      return { args }
    },
    template: `
      <div>
        <button @click="args.modelValue = true">Open Wider Modal</button>
        <BModal v-bind="args" @update:modelValue="args.modelValue = $event">
          <template #title>Custom Width</template>
          <p style="padding: 20px;">This modal has a custom width of 800px.</p>
        </BModal>
      </div>
    `,
  }),
  args: {
    modelValue: false,
    width: 800,
    closeButton: true,
  },
}
