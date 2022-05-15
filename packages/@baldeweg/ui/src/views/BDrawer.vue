<template>
  <div class="layout">
    <div class="layout_drawer" v-if="state.show">
      <b-drawer
        :active="state.show"
        :collapsable="state.collapsable"
        :inline="state.inline"
        @open-menu="state.show = true"
        @close-menu="state.show = false"
      >
        <b-container>
          <b-list :route="{ name: 'index' }">
            <template #image>
              <img src="@/assets/placeholder_1x1.jpg" width="25" alt="Icon" />
            </template>
            <template #title> Item 1 </template>
          </b-list>
        </b-container>

        <b-divider />

        <b-container>
          <b-list :route="{ name: 'index' }">
            <template #title>Item 1</template>
          </b-list>
          <b-list :route="{ name: 'index' }">
            <template #title>Item 2</template>
          </b-list>
        </b-container>
      </b-drawer>
    </div>

    <div class="layout_body">
      <b-container size="m">
        <p>
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text
        </p>

        <p>
          <input type="checkbox" id="show" v-model="state.show" />
          <label for="show">show</label>
        </p>
        <p>
          <input type="checkbox" id="collapsable" v-model="state.collapsable" />
          <label for="collapsable">collapsable</label>
        </p>
        <p>
          <input type="checkbox" id="inline" v-model="state.inline" />
          <label for="inline">inline</label>
        </p>
      </b-container>
    </div>
  </div>
</template>

<script>
import BDrawer from '../components/BDrawer/BDrawer.vue'
import BDivider from '../components/BDivider/BDivider.vue'
import BContainer from '../components/BContainer/BContainer.vue'
import BList from '../components/BList/BList.vue'
import { reactive } from 'vue'

export default {
  name: 'b-drawer-view',
  components: {
    BDrawer,
    BDivider,
    BContainer,
    BList,
  },
  setup() {
    const state = reactive({
      show: false,
      collapsable: true,
      inline: false,
    })

    return { state }
  },
}
</script>

<style>
@media all and (min-width: 900px) {
  .layout {
    display: flex;
  }
  .layout_drawer {
    width: 200px;
  }
  .layout_body {
    flex-grow: 1;
  }
}
</style>
