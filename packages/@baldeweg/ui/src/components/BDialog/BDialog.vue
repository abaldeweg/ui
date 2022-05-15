<template>
  <div class="dialog">
    <div class="dialog_overlay" />

    <div class="dialog_body">
      <div class="dialog_content">
        <slot />
      </div>
      <div class="dialog_footer">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-dialog',
}
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}
.dialog_overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: var(--color-neutral-00);
  width: 100%;
  height: 100%;
  opacity: 0.8;
}
.dialog_body {
  position: relative;
  border: 1px solid var(--color-neutral-02);
  border-radius: 5px;
  background: var(--color-neutral-00);
  max-width: 600px;
  margin: 60px auto;
  box-sizing: border-box;
}
.dialog_content {
  padding: 20px;
}
.dialog_footer {
  padding: 20px;
  text-align: right;
}
</style>
