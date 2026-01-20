import BBadge from "./BBadge.vue";
import BMaterialIcon from "../BMaterialIcon/BMaterialIcon.vue";

export default {
  component: BBadge,
  argTypes: {
    border: {
      control: "select",
      options: ["neutral", "primary"],
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
  tags: ["deprecated"],
};

export const Neutral = {
  args: {
    default: "Badge (2)",
    icon: "star",
    border: "neutral",
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
    default: "Badge (2)",
    icon: "star",
    border: "primary",
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
