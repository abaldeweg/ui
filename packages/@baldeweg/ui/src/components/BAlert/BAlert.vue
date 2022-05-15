<template>
  <div
    class="alert"
    :class="{
      alert_error: type === 'error',
      alert_warning: type === 'warning',
      alert_success: type === 'success',
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-alert',
  props: {
    type: {
      type: String,
      validator: (value) => {
        return ['neutral', 'error', 'warning', 'success'].indexOf(value) !== -1
      },
      default: 'neutral',
    },
  },
}
</script>

<style scoped>
.alert {
  border-radius: 5px;
  border-left: 3px solid var(--color-neutral-08);
  background: var(--color-neutral-02);
  padding: 20px;
  margin: 20px 0;
}
.alert_error {
  border-left: 3px solid var(--color-accent-red-10);
}
.alert_warning {
  border-left: 3px solid var(--color-accent-yellow-10);
}
.alert_success {
  border-left: 3px solid var(--color-accent-green-10);
}
</style>
