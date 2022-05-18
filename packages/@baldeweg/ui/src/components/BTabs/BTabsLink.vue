<template>
  <div class="link">
    <slot />
  </div>
</template>

<style scoped>
.link {
  border-radius: 3px;
  text-align: center;
  padding: 10px;
  color: var(--color-neutral-10);
}
.link a,
.link a:hover {
  color: var(--color-neutral-10);
}
.link:hover {
  background: var(--color-neutral-02);
}
</style>
