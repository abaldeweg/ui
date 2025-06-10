import BForm from './BForm.vue';

export default {
  title: 'Components/BForm',
  component: BForm,
  tags: ['beta'],
};

const Template = (args, { argTypes }) => ({
  components: { BForm },
  props: Object.keys(argTypes),
  template: `
    <BForm>
      <p>Form content goes here</p>
      <template #buttons>
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </template>
    </BForm>
  `,
});

export const Default = Template.bind({});
Default.args = {};
