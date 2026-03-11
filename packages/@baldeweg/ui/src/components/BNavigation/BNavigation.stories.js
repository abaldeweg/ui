import BNavigation from "./BNavigation.vue";
import BNavigationItem from "./BNavigationItem.vue";

export default {
  title: "Components/BNavigation",
  component: BNavigation,
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
      control: { type: "inline-radio" },
      options: ["horizontal", "vertical"],
      description: "Navigation direction. The horizontal direction has no effect on screens smaller than 600px.",
      defaultValue: "vertical",
    },
  },
  tags: ["beta"],
};

export const Default = {
  render: (args) => ({
    components: {
      BNavigation,
      BNavigationItem,
    },
    setup() {
      return { args };
    },
    template: `
    <BNavigation v-bind="args">
      <BNavigationItem route="https://localhost" icon="dashboard" badge="4">
        Dashboard
      </BNavigationItem>
      <BNavigationItem :route="{ path: '/settings' }" icon="settings" badge="12">
        Settings
      </BNavigationItem>
      <BNavigationItem :route="{ path: '/profile' }" icon="person" badge="3">
        Profile
      </BNavigationItem>
    </BNavigation>
  `,
  }),
};

export const Background = {
  args: {
    background: "primary",
  },
  render: (args) => ({
    components: {
      BNavigation,
      BNavigationItem,
    },
    setup() {
      return { args };
    },
    template: `
    <BNavigation v-bind="args">
      <BNavigationItem route="https://localhost" icon="dashboard" badge="4">
        Dashboard
      </BNavigationItem>
      <BNavigationItem :route="{ path: '/settings' }" icon="settings" badge="12">
        Settings
      </BNavigationItem>
      <BNavigationItem :route="{ path: '/profile' }" icon="person" badge="3">
        Profile
      </BNavigationItem>
    </BNavigation>
  `,
  }),
};

export const Border = {
  args: {
    border: "primary",
  },
  render: (args) => ({
    components: {
      BNavigation,
      BNavigationItem,
    },
    setup() {
      return { args };
    },
    template: `
    <BNavigation v-bind="args">
      <BNavigationItem route="https://localhost" icon="dashboard" badge="4">
        Dashboard
      </BNavigationItem>
      <BNavigationItem :route="{ path: '/settings' }" icon="settings" badge="12">
        Settings
      </BNavigationItem>
      <BNavigationItem :route="{ path: '/profile' }" icon="person" badge="3">
        Profile
      </BNavigationItem>
    </BNavigation>
  `,
  }),
};

export const Direction = {
  args: {
    direction: "horizontal",
  },
  render: (args) => ({
    components: {
      BNavigation,
      BNavigationItem,
    },
    setup() {
      return { args };
    },
    template: `
    <BNavigation v-bind="args">
      <BNavigationItem route="https://localhost" icon="dashboard" badge="4">
        Dashboard
      </BNavigationItem>
      <BNavigationItem :route="{ path: '/settings' }" icon="settings" badge="12">
        Settings
      </BNavigationItem>
      <BNavigationItem :route="{ path: '/profile' }" icon="person" badge="3">
        Profile
      </BNavigationItem>
    </BNavigation>
  `,
  }),
};
