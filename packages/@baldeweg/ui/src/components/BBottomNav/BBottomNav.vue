<template>
  <header class="bottom_nav">
    <slot />
  </header>
</template>

<style>
.bottom_nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid var(--color-neutral-02);
  background: var(--color-neutral-00);
  width: 100%;
  height: var(--bottom-nav-height);
  box-sizing: border-box;
  line-height: 0;
  z-index: 2;
}

@media print {
  .bottom_nav {
    display: none;
  }
}
</style>

<style>
main {
  margin-bottom: var(--bottom-nav-height);
}
</style>
