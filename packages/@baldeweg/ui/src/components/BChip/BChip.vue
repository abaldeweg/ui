<script setup>
defineProps({
  hover: Boolean,
})
</script>

<template>
  <div class="chip" :class="{ canHover: hover }">
    <div class="body">
      <div class="chip_label">
        <slot name="default" />
      </div>
      <div class="action" v-if="$slots.action">
        <slot name="action" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.chip {
  display: inline-block;
  background: var(--color-neutral-02);
  border-radius: 20px;
  padding: 5px 20px;
  margin-left: 20px;
  font-size: 0.8rem;
  transition: background 0.3s;
}
.chip:first-child {
  margin-left: 0;
}
.canHover:hover {
  background: var(--color-primary-10);
}
.body {
  display: flex;
  align-items: center;
}
.action {
  margin-left: 20px;
}
</style>
