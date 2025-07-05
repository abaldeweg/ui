import BAlert from "./BAlert.vue";

export default {
  component: BAlert,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["info", "danger", "warning", "success"],
    },
    closable: { control: "boolean" },
  },
  decorators: [
    () => ({
      template:
        '<div style="padding: 3em; height: 300px; position: relative;">This is same text.<story/></div>',
    }),
  ],
  tags: ["beta"],
};

export const Default = {
  args: {
    type: "info",
    closable: false,
  },
  render: (args) => ({
    components: { BAlert },
    setup() {
      return { args };
    },
    template: `<BAlert v-bind="args">This is an alert message. <a href="#">Link</a></BAlert>`,
  }),
};

export const Info = {
  args: {
    type: "info",
    closable: true,
  },
  render: (args) => ({
    components: {
      BAlert,
    },

    setup() {
      return { args };
    },
    template: `<BAlert v-bind="args">This is an alert message. <a href="#">Link</a></BAlert>`,
  }),
};

export const Danger = {
  args: {
    type: "danger",
    closable: true,
  },
  render: (args) => ({
    components: {
      BAlert,
    },

    setup() {
      return { args };
    },
    template: `<BAlert v-bind="args">This is an alert message. <a href="#">Link</a></BAlert>`,
  }),
};

export const Warning = {
  args: {
    type: "warning",
    closable: true,
  },
  render: (args) => ({
    components: {
      BAlert,
    },

    setup() {
      return { args };
    },
    template: `<BAlert v-bind="args">This is an alert message. <a href="#">Link</a></BAlert>`,
  }),
};

export const Success = {
  args: {
    type: "success",
    closable: true,
  },
  render: (args) => ({
    components: {
      BAlert,
    },

    setup() {
      return { args };
    },
    template: `<BAlert v-bind="args">This is an alert message. <a href="#">Link</a></BAlert>`,
  }),
};

export const WithoutCloseButton = {
  args: {
    type: "info",
    closable: false,
  },
  render: (args) => ({
    components: {
      BAlert,
    },

    setup() {
      return { args };
    },
    template: `<BAlert v-bind="args">This is an alert message. <a href="#">Link</a></BAlert>`,
  }),
};
