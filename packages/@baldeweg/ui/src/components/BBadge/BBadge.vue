<script setup>
import { computed } from 'vue'

const props = defineProps({
  border: {
    type: String,
    default: 'neutral',
    validator: (value) => ['neutral', 'primary'].includes(value)
  },
  content: {
    type: [String, Number]
  },
  hideEmpty: {
    type: Boolean,
    default: false
  }
})

const isHidden = computed(() => {
  if ([0, '0', ''].includes(props.content) && props.hideEmpty) {
    return true
  }
  return false
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

    <div class="badge_content" v-if="!isHidden">{{ content }}</div>
  </div>
</template>

<style>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--color-neutral-10);
  border-radius: 20px;
  padding: 10px;
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
.badge_body,
.badge_content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge_icon {
  width: 17px;
  height: 17px;
}

.badge_content {
  border: 1px solid var(--color-neutral-10);
  border-radius: 50%;
  width: 24px;
  height: 24px;
}

.badge_neutral .badge_content {
  border-color: var(--color-neutral-10);
}

.badge_primary .badge_content {
  border-color: var(--color-primary-10);
}

.badge a,
.badge a:hover {
  color: inherit;
  text-decoration: none;
}
</style>
