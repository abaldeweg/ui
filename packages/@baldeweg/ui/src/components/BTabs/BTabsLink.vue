<template>
  <div class="link">
    <slot />
  </div>
</template>

<style>
.link {
  flex-shrink: 0;
  border-radius: 10px;
  text-align: center;
  padding: 5px 10px;
  margin: 0 10px;
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
