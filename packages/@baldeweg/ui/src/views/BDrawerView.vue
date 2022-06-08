<script setup>
import { ref } from 'vue'
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BDrawer - @baldeweg/ui' })

const show = ref(false)
const collapsable = ref(true)
const inline = ref(false)
</script>

<template>
  <div class="layout">
    <div class="layout_drawer" v-if="show">
      <BDrawer
        :active="show"
        :collapsable="collapsable"
        :inline="inline"
        @open-menu="show = true"
        @close-menu="show = false"
      >
        <BContainer>
          <BList :route="{ name: 'index' }">
            <template #image>
              <img src="@/assets/placeholder_1x1.jpg" width="25" alt="Icon" />
            </template>
            <template #title> Item 1 </template>
          </BList>
        </BContainer>

        <BDivider />

        <BContainer>
          <BList :route="{ name: 'index' }">
            <template #title>Item 1</template>
          </BList>
          <BList :route="{ name: 'index' }">
            <template #title>Item 2</template>
          </BList>
        </BContainer>
      </BDrawer>
    </div>

    <div class="layout_body">
      <BContainer size="m">
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
      </BContainer>
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
