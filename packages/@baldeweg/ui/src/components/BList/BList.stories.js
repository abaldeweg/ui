import BList from './BList.vue'
import placeholderImage from '../../assets/placeholder_16x9.jpg'

export default {
  component: BList,
  argTypes: {
    mediaSize: {
      control: 'select',
      options: ['landscape', 'portrait', 'avatar'],
    },
    divider: {
      control: 'boolean',
    },
    hover: {
      control: 'boolean',
    },
    route: {
      control: 'object',
    },
    textWidth: {
      control: 'text',
    },
    controlsWidth: {
      control: 'text',
    },
  },
  tags: ['experimental'],
}

export const Basic = {
  render: (args) => ({
    components: { BList },
    setup() {
      return { args }
    },
    template: `
      <BList v-bind="args">
        <template #title>List Title</template>
        <template #subtitle>Subtitle</template>
        This is the default content
      </BList>
    `,
  }),
  args: {
    hover: true,
    divider: false,
  },
}

export const WithMedia = {
  render: (args) => ({
    components: { BList },
    setup() {
      return { args, placeholderImage }
    },
    template: `
      <BList v-bind="args">
        <template #media>
          <img :src="placeholderImage" alt="Placeholder" />
        </template>
        <template #title>List with Media</template>
        <template #subtitle>Media Example</template>
        Content with media image
      </BList>
    `,
  }),
  args: {
    mediaSize: 'landscape',
    hover: true,
    divider: false,
  },
}

export const WithAvatar = {
  render: (args) => ({
    components: { BList },
    setup() {
      return { args, placeholderImage }
    },
    template: `
      <BList v-bind="args">
        <template #media>
          <img :src="placeholderImage" alt="Avatar" />
        </template>
        <template #title>User Profile</template>
        <template #subtitle>Username</template>
        Profile information
      </BList>
    `,
  }),
  args: {
    mediaSize: 'avatar',
    hover: true,
    divider: false,
  },
}

export const WithTextColumn = {
  render: (args) => ({
    components: { BList },
    setup() {
      return { args }
    },
    template: `
      <BList v-bind="args">
        <template #title>Item with Text Column</template>
        <template #subtitle>Information</template>
        Main content
        <template #text>Additional Text</template>
      </BList>
    `,
  }),
  args: {
    textWidth: '150px',
    hover: true,
    divider: true,
  },
}

export const WithControls = {
  render: (args) => ({
    components: { BList },
    setup() {
      return { args }
    },
    template: `
      <BList v-bind="args">
        <template #title>Item with Controls</template>
        <template #subtitle>Action Item</template>
        Content with control buttons
        <template #controls>
          <button>Edit</button>
        </template>
      </BList>
    `,
  }),
  args: {
    controlsWidth: '80px',
    hover: true,
    divider: true,
  },
}

export const FullExample = {
  render: (args) => ({
    components: { BList },
    setup() {
      return { args, placeholderImage }
    },
    template: `
      <BList v-bind="args">
        <template #media>
          <img :src="placeholderImage" alt="Placeholder" />
        </template>
        <template #title>Complete Example</template>
        <template #subtitle>All Features</template>
        Content with all available slots
        <template #text>0.00 €</template>
        <template #controls>
          <button>Add</button>
          <button>Remove</button>
        </template>
      </BList>
    `,
  }),
  args: {
    mediaSize: 'landscape',
    textWidth: '100px',
    controlsWidth: '120px',
    hover: true,
    divider: true,
    route: { name: 'example', params: { id: 1 } },
  },
}
