import BComment from './BComment.vue'

export default {
  title: 'Components/BComment',
  component: BComment,
  argTypes: {
    author: { control: 'text' },
    date: { control: 'text' },
    default: { control: 'text', description: 'Comment content' },
    actions: { description: 'Slot for action buttons' }
  }
}

export const Default = {
  args: {
    author: 'John Doe',
    date: '2023-07-15',
    default: 'This is a sample comment with some text content.'
  }
}

export const WithoutAuthor = {
  args: {
    date: '2023-07-15',
    default: 'This comment only shows the date, not the author.'
  }
}

export const WithoutDate = {
  args: {
    author: 'Jane Smith',
    default: 'This comment only shows the author, not the date.'
  }
}

export const WithActions = {
  render: (args) => ({
    components: { BComment },
    setup() {
      return { args }
    },
    template: `
      <BComment v-bind="args">
        {{ args.default }}
        <template #actions>
          <button>Edit</button>
          <button>Delete</button>
        </template>
      </BComment>
    `
  }),
  args: {
    author: 'John Doe',
    date: '2023-07-15',
    default: 'This is a comment with action buttons.'
  }
}
