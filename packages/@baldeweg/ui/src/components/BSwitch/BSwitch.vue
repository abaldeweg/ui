<script setup>
defineProps({
  label: {
    type: String,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="switch">
    <button
      class="indicator"
      :class="{ isActive: modelValue }"
      @click="$emit('update:modelValue', !modelValue)"
    />
    <label class="label" @click="$emit('update:modelValue', !modelValue)">
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
.switch {
  display: flex;
}
.label {
  display: block;
  margin-left: 10px;
  cursor: pointer;
}
.indicator {
  position: relative;
  border: 0 hidden;
  border-radius: 50px;
  background: var(--color-neutral-08);
  height: 30px;
  width: 50px;
  padding: 0;
  cursor: pointer;
}
.indicator::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  border-radius: 90px;
  background: var(--color-neutral-00);
  width: 20px;
  height: 20px;
  transition: 0.2s;
}
.indicator.isActive {
  background: var(--color-primary-10);
}
.indicator.isActive::after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}
</style>
