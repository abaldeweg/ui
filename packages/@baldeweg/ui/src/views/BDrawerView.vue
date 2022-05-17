<script setup>
import { useTitle } from './../composables/useTitle.js'
import { ref } from 'vue'

useTitle({ title: 'BDrawer - @baldeweg/ui' })

const show = ref(false)
const collapsable = ref(true)
const inline = ref(false)
</script>

<template>
  <div class="layout">
    <div class="layout_drawer" v-if="show">
      <b-drawer
        :active="show"
        :collapsable="collapsable"
        :inline="inline"
        @open-menu="show = true"
        @close-menu="show = false"
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
          <input type="checkbox" id="show" v-model="show" />
          <label for="show">show</label>
        </p>
        <p>
          <input type="checkbox" id="collapsable" v-model="collapsable" />
          <label for="collapsable">collapsable</label>
        </p>
        <p>
          <input type="checkbox" id="inline" v-model="inline" />
          <label for="inline">inline</label>
        </p>
      </b-container>
    </div>
  </div>
</template>

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
