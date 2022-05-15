<template>
  <div class="chip">
    <div class="chip_body">
      <div class="chip_label">
        <slot name="default" />
      </div>
      <div class="chip_action" v-if="$slots.action">
        <slot name="action" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-chip',
}
</script>

<style scoped>
.chip {
  display: inline-block;
  background: var(--color-neutral-02);
  border-radius: 20px;
  padding: 5px 10px;
  margin-left: 20px;
  font-size: 0.8rem;
}
.chip:first-child {
  margin-left: 0;
}
.chip_body {
  display: flex;
  align-items: center;
}
.chip_action {
  margin-left: 20px;
}
</style>
