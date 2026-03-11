import BNavigationItem from "./BNavigationItem.vue";

export default {
  title: "Components/BNavigation/BNavigationItem",
  component: BNavigationItem,
  argTypes: {
    border: {
      control: { type: "inline-radio" },
      options: ["none", "primary", "neutral"],
      description: "Border color.",
      defaultValue: "none",
    },
    background: {
      control: { type: "inline-radio" },
      options: ["none", "primary", "neutral"],
      description: "Background color.",
      defaultValue: "none",
    },
    direction: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      description: "Layout direction",
      defaultValue: "horizontal",
    },
    route: {
      control: "object",
      description: "Internal router route object or external URL string.",
      table: {
        type: { summary: "string | object" },
        defaultValue: { summary: "undefined" },
      },
    },
    icon: {
      control: "text",
      description: "Icon name passed to BMaterialIcon.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    badge: {
      control: "text",
      description: "Badge text for notification count or status",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    default: {
      control: "text",
      description: "Main content of the navigation item",
      table: {
        category: "slots",
        type: {
          summary: "html",
        },
      },
    },
  },
  tags: ["beta"],
};

export const Default = {
  args: {
    route: { path: "/inbox" },
    default: "Inbox",
  },
  render: (args) => ({
    components: { BNavigationItem },
    setup() {
      return { args };
    },
    template: `
      <ul class="nav">
        <BNavigationItem v-bind="args">
          {{ args.default }}
        </BNavigationItem>
      </ul>
    `,
  }),
};

export const IconAndBadge = {
  args: {
    route: { path: "/inbox" },
    icon: "inbox",
    badge: "4",
    default: "Inbox",
  },
  render: (args) => ({
    components: { BNavigationItem },
    setup() {
      return { args };
    },
    template: `
      <ul class="nav">
        <BNavigationItem v-bind="args">
          {{ args.default }}
        </BNavigationItem>
      </ul>
    `,
  }),
};

export const ExternalLink = {
  args: {
    route: "https://localhost",
    icon: "inbox",
    badge: "4",
    default: "Inbox",
  },
  render: (args) => ({
    components: { BNavigationItem },
    setup() {
      return { args };
    },
    template: `
      <ul class="nav">
        <BNavigationItem v-bind="args">
          {{ args.default }}
        </BNavigationItem>
      </ul>
    `,
  }),
};

export const Border = {
  args: {
    route: {
      path: "/inbox",
    },
    default: "Inbox",
    border: "primary",
  },
  render: (args) => ({
    components: {
      BNavigationItem,
    },
    setup() {
      return { args };
    },
    template: `
      <ul class="nav">
        <BNavigationItem v-bind="args">
          {{ args.default }}
        </BNavigationItem>
      </ul>
    `,
  }),
};

export const Background = {
  args: {
    route: {
      path: "/inbox",
    },
    default: "Inbox",
    background: "primary",
  },
  render: (args) => ({
    components: {
      BNavigationItem,
    },
    setup() {
      return { args };
    },
    template: `
      <ul class="nav">
        <BNavigationItem v-bind="args">
          {{ args.default }}
        </BNavigationItem>
      </ul>
    `,
  }),
};

export const Direction = {
  args: {
    direction: "vertical",
    route: { path: "/inbox" },
    icon: "inbox",
    default: "Inbox",
  },
  render: (args) => ({
    components: { BNavigationItem },
    setup() {
      return { args };
    },
    template: `
      <ul class="nav">
        <BNavigationItem v-bind="args">
          {{ args.default }}
        </BNavigationItem>
      </ul>
    `,
  }),
};
