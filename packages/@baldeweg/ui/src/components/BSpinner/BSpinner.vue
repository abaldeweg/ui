<template>
  <div
    class="spinner"
    :class="{
      spinner_l: this.size === 'l',
      spinner_m: this.size === 'm',
      spinner_s: this.size === 's',
    }"
  />
</template>

<script>
export default {
  name: 'b-spinner',
  props: {
    size: {
      default: 'l',
      validator(value) {
        return ['l', 'm', 's'].indexOf(value) !== -1
      },
    },
  },
}
</script>

<style scoped>
.spinner {
  border-radius: 50%;
  animation: spinner 2s linear infinite;
}
.spinner_s {
  border: 2px solid var(--color-neutral-02);
  border-top: 2px solid var(--color-primary-10);
  width: 20px;
  height: 20px;
}
.spinner_m {
  border: 4px solid var(--color-neutral-02);
  border-top: 4px solid var(--color-primary-10);
  width: 40px;
  height: 40px;
}
.spinner_l {
  border: 6px solid var(--color-neutral-02);
  border-top: 6px solid var(--color-primary-10);
  width: 60px;
  height: 60px;
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
