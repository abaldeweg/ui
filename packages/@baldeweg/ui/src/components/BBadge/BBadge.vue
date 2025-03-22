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
    badge_isInline: props.variant === 'inline' && !isHidden.value,
    badge_hasSuperscript: props.variant === 'superscript' && !isHidden.value,
    badge_backgroundPrimary: props.background === "primary",
    badge_backgroundNeutral: props.background === "neutral",
    badge_positionLeft: props.position === 'left',
    badge_positionRight: props.position === 'right'
  }
})
</script>

<template>
  <div class="badge" :class="classes" :data-content="content">
    <div class="badge_icon" v-if="$slots.icon">
      <slot name="icon" />
    </div>

    <div class="badge_body">
      <slot />
    </div>

    <div class="badge_inline" :class="{ badge_positionLeft: props.position === 'left', badge_positionRight: props.position === 'right' }"
      v-if="props.variant === 'inline' && !isHidden">{{ content }}</div>

    <div class="badge_action" v-if="$slots.action">
      <slot name="action" />
    </div>
  </div>
</template>

<style>
.badge {
  display: inline-flex;
  border-radius: 20px;
  padding: 5px 10px;
  transition: background-color 0.3s;
}

.badge:hover {
  cursor: pointer;
}

.badge_icon,
.badge_body,
.badge_action {
  line-height: 0;
  align-content: center;
}

.badge_icon {
  margin-right: 10px;
}

.badge_body {
  display: inline-block;
  min-height: 1rem;
}

.badge_inline {
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

.badge_inline.badge_positionLeft {
  margin-right: 10px;
}

.badge_inline.badge_positionRight {
  margin-left: 10px;
}

.badge_isInline.badge_positionLeft .badge_icon {
  order: 2;
}

.badge_isInline.badge_positionLeft .badge_body {
  order: 3;
}

.badge_isInline.badge_positionLeft .badge_inline {
  order: 1;
}

.badge_isInline.badge_positionRight .badge_icon {
  order: 1;
}

.badge_isInline.badge_positionRight .badge_body {
  order: 2;
}

.badge_isInline.badge_positionRight .badge_inline {
  order: 3;
}

.badge.badge_backgroundPrimary {
  background: var(--color-primary-10);
}

.badge.badge_backgroundPrimary:hover {
  background: var(--color-primary-05);
}

.badge.badge_backgroundNeutral {
  background: var(--color-neutral-02);
}

.badge.badge_backgroundNeutral:hover {
  background: var(--color-neutral-04);
}

.badge_hasSuperscript.badge_positionLeft::before,
.badge_hasSuperscript.badge_positionRight::after {
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

.badge_action {
  margin-left: 10px;
  order: 3;
}
</style>
