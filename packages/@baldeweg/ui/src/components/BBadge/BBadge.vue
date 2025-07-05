<script setup>
const props = defineProps({
  border: {
    type: String,
    default: 'neutral',
    validator: (value) => ['neutral', 'primary'].includes(value)
  },
})
</script>

<template>
  <div class="badge" :class="`badge_${props.border}`">
    <div class="badge_icon" v-if="$slots.icon">
      <slot name="icon" />
    </div>

    <div class="badge_body">
      <slot />
    </div>
  </div>
</template>

<style>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--color-neutral-10);
  border-radius: 20px;
  padding: 1px 10px;
  color: var(--color-neutral-10);
  transition: border 0.3s;
}

.badge_neutral {
  border-color: var(--color-neutral-10);
  color: var(--color-neutral-10);
}

.badge_neutral:hover {
  border-color: var(--color-neutral-06);
}

.badge_primary {
  border-color: var(--color-primary-10);
  color: var(--color-primary-10);
}

.badge_primary:hover {
  border-color: var(--color-primary-00);
}

.badge_icon,
.badge_body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge_icon {
  width: 17px;
  height: 17px;
}

.badge a,
.badge a:hover {
  color: inherit;
  text-decoration: none;
}
</style>
