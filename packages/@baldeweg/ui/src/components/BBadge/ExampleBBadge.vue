<template>
  <AppComponent component="BBadge">
    <template #icon>
      <BMaterialIcon>shopping_cart</BMaterialIcon>
    </template>
    Cart
    <template #action>
      <BMaterialIcon :size="18" color="var(--color-neutral-08)" hover>close</BMaterialIcon>
    </template>
  </AppComponent>
</template>
