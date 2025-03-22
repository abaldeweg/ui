<script setup>
defineProps({
  route: Object,
  startSize: {
    type: String,
    default: '100px',
  },
  textSize: {
    type: String,
    default: '150px',
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
    list_hasHover: hover,
    list_isActive: active,
  }">
    <div v-if="$slots.start" class="list_start" :style="{ width: startSize }">
      <slot name="start" />
    </div>

    <div class="list_content" :class="{
      list_hasDivider: divider,
    }">
      <RouterLink :to="route" v-if="route">
        <h3 v-if="$slots.title">
          <slot name="title" />
        </h3>
        <p><span v-if="$slots.subtitle" class="list_subtitle">
            <slot name="subtitle" />
          </span><span v-if="$slots.subtitle && $slots.default"> - </span>
          <slot />
        </p>
      </RouterLink>
      <div v-else>
        <h3 v-if="$slots.title">
          <slot name="title" />
        </h3>
        <p><span v-if="$slots.subtitle" class="list_subtitle">
            <slot name="subtitle" />
          </span><span v-if="$slots.subtitle && $slots.default"> - </span>
          <slot />
        </p>
      </div>
    </div>

    <div v-if="$slots.text" class="list_text" :class="{
      list_hasDivider: divider,
    }" :style="{ width: textSize }">
      <slot name="text" />
    </div>

    <div v-if="$slots.end" class="list_end" :class="{
      list_hasDivider: divider,
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

.list_hasHover:hover {
  background: var(--color-neutral-02);
  cursor: pointer;
}

.list_start,
.list_content,
.list_text,
.list_end {
  padding: 10px 0;
}

.list_start {
  padding-right: 20px;
}

.list_content {
  flex-grow: 1;
}

.list_content h3 {
  margin: 0;
}

.list_content p {
  padding: 0;
}

.list_content a,
.list_content a:hover {
  color: var(--color-neutral-10) !important;
}

.list_subtitle {
  font-weight: bold;
}

.list_text {
  padding-left: 20px;
  text-align: right;
  color: var(--color-primary-10);
  font-weight: bold;
}

.list_end {
  padding-left: 20px;
}

.list_content.list_hasDivider,
.list_text.list_hasDivider,
.list_end.list_hasDivider {
  border-bottom: 1px solid var(--color-neutral-02);
}
</style>
