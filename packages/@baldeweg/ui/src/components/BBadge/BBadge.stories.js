import BBadge from "./BBadge.vue";
import BMaterialIcon from "../BMaterialIcon/BMaterialIcon.vue";

export default {
  component: BBadge,
  argTypes: {
    border: {
      control: "select",
      options: ["neutral", "primary"],
    },
    content: {
      control: "text",
      description: "The content to display in the badge",
    },
    hideEmpty: {
      control: "boolean",
      description: "Whether to hide the badge when empty",
    },
    default: {
      control: "text",
      description: "Default slot content",
    },
    icon: {
      control: "text",
      description: "Material icon name for the icon slot",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The BBadge component is used to display status indicators, counters, or labels.",
      },
    },
  },
  tags: ["beta"],
};

export const Neutral = {
  args: {
    default: "Badge",
    icon: "star",
    border: "neutral",
    content: "2",
    hideEmpty: false,
  },
  render: (args) => ({
    components: { BBadge, BMaterialIcon },
    setup() {
      return { args };
    },
    template: `
    <a href="#">
      <BBadge v-bind="args">
        {{ args.default }}
        <template v-if="args.icon" #icon>
          <BMaterialIcon>{{ args.icon }}</BMaterialIcon>
        </template>
      </BBadge>
    </a>
    `,
  }),
};

export const Primary = {
  args: {
    default: "Badge",
    icon: "star",
    border: "primary",
    content: "2",
    hideEmpty: false,
  },
  render: (args) => ({
    components: {
      BBadge,
      BMaterialIcon,
    },

    setup() {
      return { args };
    },
    template: `
    <a href="#">
      <BBadge v-bind="args">
        {{ args.default }}
        <template v-if="args.icon" #icon>
          <BMaterialIcon>{{ args.icon }}</BMaterialIcon>
        </template>
      </BBadge>
    </a>
    `,
  }),
};

export const HideEmpty = {
  args: {
    default: "Badge",
    icon: "star",
    border: "neutral",
    content: "0",
    hideEmpty: true,
  },
  render: (args) => ({
    components: {
      BBadge,
      BMaterialIcon,
    },

    setup() {
      return { args };
    },
    template: `
    <a href="#">
      <BBadge v-bind="args">
        {{ args.default }}
        <template v-if="args.icon" #icon>
          <BMaterialIcon>{{ args.icon }}</BMaterialIcon>
        </template>
      </BBadge>
    </a>
    `,
  }),
};
