import BDropdownDivider from './BDropdownDivider.vue'

export default {
  title: 'Components/BDropdown/BDropdownDivider',
  component: BDropdownDivider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export const Default = {
  render: () => ({
    components: { BDropdownDivider },
    template: `
      <div style="width: 200px; border: 1px solid #ccc; padding: 10px;">
        <div>Menu Item Above</div>
        <b-dropdown-divider />
        <div>Menu Item Below</div>
      </div>
    `,
  }),
}

export const InContext = {
  render: () => ({
    components: { BDropdownDivider },
    template: `
      <div style="width: 200px; border: 1px solid #ccc; padding: 10px;">
        <div style="padding: 8px 0;">First option</div>
        <div style="padding: 8px 0;">Second option</div>
        <b-dropdown-divider />
        <div style="padding: 8px 0;">Third option</div>
        <div style="padding: 8px 0;">Fourth option</div>
        <b-dropdown-divider />
        <div style="padding: 8px 0;">Fifth option</div>
      </div>
    `,
  }),
}
