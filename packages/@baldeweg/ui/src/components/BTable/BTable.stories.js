import BTable from "./BTable.vue";

export default {
  component: BTable,
  parameters: {
    docs: {
      description: {
        component:
          "Its just a wrapper, make use of the HTML table elements, including `<table>`.",
      },
    },
  },
  argTypes: {
    hover: {
      control: "boolean",
      description: "Enables hover effect on table rows",
    },
  },
  tags: ["beta"],
};

export const Default = {
  args: {
    hover: false,
  },
  render: (args) => ({
    components: { BTable },
    setup() {
      return { args };
    },
    template: `
    <BTable v-bind="args">
      <table>
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1</td>
            <td>Row 1</td>
            <td>Row 1</td>
          </tr>
          <tr>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
          </tr>
          <tr>
            <td>Row 3</td>
            <td>Row 3</td>
            <td>Row 3</td>
          </tr>
        </tbody>
      </table>
    </BTable>
    `,
  }),
};

export const WithHover = {
  args: {
    hover: true,
  },
  render: (args) => ({
    components: {
      BTable,
    },

    setup() {
      return { args };
    },
    template: `
    <BTable v-bind="args">
      <table>
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1</td>
            <td>Row 1</td>
            <td>Row 1</td>
          </tr>
          <tr>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
          </tr>
          <tr>
            <td>Row 3</td>
            <td>Row 3</td>
            <td>Row 3</td>
          </tr>
        </tbody>
      </table>
    </BTable>
    `,
  }),
};
