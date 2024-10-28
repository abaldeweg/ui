<script setup>
import { ref } from 'vue'

const visible = ref(true)
</script>

<template>
  <AppComponent component="BPanel" @close="visible = false" width="300px">
    <template #header>header</template>
    <template #footer>footer</template>
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
  </AppComponent>
</template>
