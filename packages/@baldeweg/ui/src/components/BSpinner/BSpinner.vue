<script setup>
defineProps({
  size: {
    default: 'l',
    validator(value) {
      return ['l', 'm', 's'].includes(value)
    },
  },
})
</script>

<template>
  <div
    class="spinner"
    :class="{
      spinner_size_l: size === 'l',
      spinner_size_m: size === 'm',
      spinner_size_s: size === 's',
    }"
  />
</template>

<style>
.spinner {
  border-radius: 50%;
  animation: spinner 2s linear infinite;
}
.spinner_size_s {
  border: 2px solid var(--color-neutral-02);
  border-top: 2px solid var(--color-primary-10);
  width: 20px;
  height: 20px;
}
.spinner_size_m {
  border: 4px solid var(--color-neutral-02);
  border-top: 4px solid var(--color-primary-10);
  width: 40px;
  height: 40px;
}
.spinner_size_l {
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
