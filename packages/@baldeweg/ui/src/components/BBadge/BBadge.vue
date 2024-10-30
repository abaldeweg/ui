<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: "none",
    validator: (value) => ['none', 'inline', 'superscript'].includes(value),
  },
  position: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value),
  },
  background: {
    type: String,
    default: "none",
    validator: (value) => ['none', 'primary', 'neutral'].includes(value),
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

const classes = computed(() => {
  return {
    isInline: props.variant === 'inline' && !isHidden.value,
    hasSuperscript: props.variant === 'superscript' && !isHidden.value,
    backgroundPrimary: props.background === "primary",
    backgroundNeutral: props.background === "neutral",
    positionLeft: props.position === 'left',
    positionRight: props.position === 'right'
  }
})
</script>

<template>
  <div class="badge" :class="classes" :data-content="content">
    <div class="icon" v-if="$slots.icon">
      <slot name="icon" />
    </div>

    <div class="body">
      <slot />
    </div>

    <div class="inline" :class="{ positionLeft: props.position === 'left', positionRight: props.position === 'right' }"
      v-if="props.variant === 'inline' && !isHidden">{{ content }}</div>

    <div class="action" v-if="$slots.action">
      <slot name="action" />
    </div>
  </div>
</template>

<style scoped>
.badge {
  display: inline-flex;
  border-radius: 20px;
  padding: 5px 10px;
  transition: background-color 0.3s;
}

.badge:hover {
  cursor: pointer;
}

.icon,
.body,
.action {
  line-height: 0;
  align-content: center;
}

.icon {
  margin-right: 10px;
}

.body {
  display: inline-block;
}

.inline {
  display: inline-block;
  background: var(--color-neutral-02);
  border-radius: 20px;
  min-width: 25px;
  text-align: center;
  font-size: 0.9rem;
  padding: 0 10px;
  box-sizing: border-box;
  align-content: center;
}

.inline.positionLeft {
  margin-right: 10px;
}

.inline.positionRight {
  margin-left: 10px;
}

.isInline.positionLeft .icon {
  order: 2;
}

.isInline.positionLeft .body {
  order: 3;
}

.isInline.positionLeft .inline {
  order: 1;
}

.isInline.positionRight .icon {
  order: 1;
}

.isInline.positionRight .body {
  order: 2;
}

.isInline.positionRight .inline {
  order: 3;
}

.badge.backgroundPrimary {
  background: var(--color-primary-10);
}

.badge.backgroundPrimary:hover {
  background: var(--color-primary-05);
}

.badge.backgroundNeutral {
  background: var(--color-neutral-02);
}

.badge.backgroundNeutral:hover {
  background: var(--color-neutral-04);
}

.hasSuperscript.positionLeft::before,
.hasSuperscript.positionRight::after {
  content: attr(data-content);
  display: inline-block;
  position: relative;
  top: -15px;
  border-radius: 10px;
  background: var(--color-primary-10);
  height: 1rem;
  padding: 0 5px;
  font-size: 0.7rem;
  color: var(--color-neutral-10);
}

.action {
  margin-left: 10px;
  order: 3;
}
</style>
