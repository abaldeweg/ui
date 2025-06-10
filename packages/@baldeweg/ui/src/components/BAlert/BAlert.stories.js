import BAlert from './BAlert.vue';

export default {
  title: 'Components/BAlert',
  component: BAlert,
  argTypes: {
    type: {
      control: { type: 'select', options: ['neutral', 'info', 'danger', 'warning', 'success'] },
    },
    closable: { control: 'boolean' },
    position: {
      control: { type: 'select', options: ['block', 'top', 'bottom', 'topleft', 'topright', 'bottomleft', 'bottomright'] },
      defaultValue: 'block',
    },
  },
  decorators: [() => ({ template: '<div style="padding: 3em; height: 300px; position: relative;">This is same text.<story/></div>' })],
  tags: ['beta'],
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

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  closable: false,
};

export const Error = Template.bind({});
Error.args = {
  type: 'danger',
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

export const Block = Template.bind({});
Block.args = {
  type: 'neutral',
  closable: false,
  position: 'block',
};

export const Top = Template.bind({});
Top.args = {
  type: 'info',
  closable: true,
  position: 'top',
};

export const Bottom = Template.bind({});
Bottom.args = {
  type: 'success',
  closable: true,
  position: 'bottom',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  type: 'warning',
  closable: false,
  position: 'topleft',
};

export const TopRight = Template.bind({});
TopRight.args = {
  type: 'danger',
  closable: true,
  position: 'topright',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  type: 'warning',
  closable: false,
  position: 'bottomleft',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  type: 'danger',
  closable: true,
  position: 'bottomright',
};
