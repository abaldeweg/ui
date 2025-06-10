import BForm from './BForm.vue';

export default {
  title: 'Components/BForm',
  component: BForm,
  tags: ['beta'],
};

export const Default = {
  render: () => ({
    components: { BForm },
    template: `
      <BForm>
        <p>Form content goes here</p>
        <template #buttons>
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </template>
      </BForm>
    `,
  }),
};
