import BAlert from './BAlert.vue';

export default {
  title: 'Components/BAlert',
  component: BAlert,
  argTypes: {
    type: {
      control: { type: 'select', options: ['neutral', 'error', 'warning', 'success', 'info'] },
    },
    closable: { control: 'boolean' },
    elevated: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { BAlert },
  setup() {
    return { args };
  },
  template: '<BAlert v-bind="args">This is an alert message</BAlert>',
});

export const Neutral = Template.bind({});
Neutral.args = {
  type: 'neutral',
  closable: false,
  elevated: false,
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  closable: true,
  elevated: false,
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  closable: false,
  elevated: true,
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  closable: true,
  elevated: true,
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  closable: false,
  elevated: false,
};
