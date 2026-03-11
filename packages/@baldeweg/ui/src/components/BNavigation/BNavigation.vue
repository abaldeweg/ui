<script setup>
defineProps({
  border: {
    type: String,
    default: 'none',
    validator: (value) => ['none', 'primary', 'neutral'].includes(value),
  },
  background: {
    type: String,
    default: 'none',
    validator: (value) => ['none', 'primary', 'neutral'].includes(value),
  },
  direction: {
    type: String,
    default: 'vertical',
    validator: (value) => ['horizontal', 'vertical'].includes(value),
  },
})
</script>

<template>
  <ul class="navigation" :class="[
    border !== 'none' && `navigation_border_${border}`,
    background !== 'none' && `navigation_background_${background}`,
    direction === 'horizontal' && 'navigation_horizontal',
  ]">
    <slot />
  </ul>
</template>

<style>
.navigation {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  padding: 20px;
  margin: 0;
}

.navigation_border_primary {
  border: 1px solid var(--color-primary-00);
}

.navigation_border_neutral {
  border: 1px solid var(--color-neutral-02);
}

.navigation_background_primary {
  background-color: var(--color-primary-00);
}

.navigation_background_neutral {
  background-color: var(--color-neutral-02);
}

@media (min-width: 600px) {
  .navigation_horizontal {
    flex-direction: row;
    padding: 0 20px;
    overflow-x: auto;
  }
}
</style>
