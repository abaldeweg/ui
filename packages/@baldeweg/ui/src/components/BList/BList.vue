<script setup>
defineProps({
  route: Object,
  startSize: {
    type: String,
    default: '100px',
  },
  endSize: {
    type: String,
    default: '50px',
  },
  divider: Boolean,
  hover: Boolean,
})
</script>

<template>
  <div class="list" :class="{
    hasHover: hover,
    isActive: active,
  }">
    <div v-if="$slots.start" class="start" :style="{ width: startSize }">
      <slot name="start" />
    </div>

    <div class="content" :class="{
      hasDivider: divider,
    }">
      <RouterLink :to="route">
        <h3 v-if="$slots.title">
          <slot name="title" />
        </h3>
        <p><span v-if="$slots.subtitle" class="subtitle">
          <slot name="subtitle" />
        </span><span v-if="$slots.subtitle && $slots.default"> - </span><slot />
        </p>
      </RouterLink>
    </div>

    <div v-if="$slots.end" class="end" :class="{
      hasDivider: divider,
    }" :style="{ width: endSize }">
      <slot name="end" />
    </div>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  margin: 20px 0;
  transition: background-color 0.3s ease;
}

.hasHover:hover {
  background: var(--color-neutral-02);
  cursor: pointer;
}

.start,
.content,
.end {
  /* border: 1px solid #ff0000; */
  padding: 10px 0;
}

.start {
  padding-right: 20px;
}

.content {
  flex-grow: 1;
}

.content h3 {
  margin:0;
}

.content p {
  padding:0;
}

.content a,
.content a:hover {
  color: var(--color-neutral-10) !important;
}

.subtitle {
  font-weight: bold;
}

.end {
  padding-left: 20px;
}

.content.hasDivider,
.end.hasDivider {
  border-bottom: 1px solid var(--color-neutral-02);
}
</style>
