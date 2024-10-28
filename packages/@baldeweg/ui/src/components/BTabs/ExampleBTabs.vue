<template>
  <AppComponent component="BTabs">
    <BTabsLink v-for="n in 10" :key="n">
      <RouterLink :to="{ name: 'index', query: { item: n } }">Item {{ n }}</RouterLink>
    </BTabsLink>
  </AppComponent>
</template>
