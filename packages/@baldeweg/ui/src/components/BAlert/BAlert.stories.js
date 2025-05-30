import BAlert from './BAlert.vue';

export default {
  title: 'Components/BAlert',
  component: BAlert,
  argTypes: {
    type: {
      control: { type: 'select', options: ['neutral', 'error', 'warning', 'success', 'info'] },
    },
    closable: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { BAlert },
  setup() {
    return { args };
  },
  template: '<BAlert v-bind="args">This is an alert message. <a href="#">Link</a></BAlert>',
});

export const Neutral = Template.bind({});
Neutral.args = {
  type: 'neutral',
  closable: false,
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  closable: true,
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  closable: false,
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  closable: true,
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  closable: false,
};
