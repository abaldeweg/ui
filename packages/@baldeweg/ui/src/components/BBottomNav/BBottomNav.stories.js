import BBottomNav from './BBottomNav.vue'
import BMaterialIcon from '../BMaterialIcon/BMaterialIcon.vue'

export default {
  component: BBottomNav,
  tags: ['deprecated'],
}

export const Default = {
  render: (args) => ({
    components: { BBottomNav },
    setup() {
      return { args }
    },
    template: `
      <BBottomNav v-bind="args">
        <button>Home</button>
        <button>Search</button>
        <button>Profile</button>
      </BBottomNav>
    `
  }),
}

export const WithCustomItems = {
  render: (args) => ({
    components: { BBottomNav, BMaterialIcon },
    setup() {
      return { args }
    },
    template: `
      <BBottomNav v-bind="args">
        <a href="#" style="display: flex; flex-direction: column; align-items: center;">
          <BMaterialIcon>home</BMaterialIcon>
          <span>Home</span>
        </a>
        <a href="#" style="display: flex; flex-direction: column; align-items: center;">
          <BMaterialIcon>search</BMaterialIcon>
          <span>Search</span>
        </a>
        <a href="#" style="display: flex; flex-direction: column; align-items: center;">
          <BMaterialIcon>person</BMaterialIcon>
          <span>Profile</span>
        </a>
      </BBottomNav>
    `
  }),
}
