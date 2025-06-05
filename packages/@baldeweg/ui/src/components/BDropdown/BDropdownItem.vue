<script setup>
defineProps({
  bold: {
    type: Boolean,
    default: false,
  },
  noHover: {
    type: Boolean,
    default: false,
  },
  icon: String,
})
</script>

<template>
  <li class="dropdown_item" :class="{ dropdown_isBold: bold, dropdown_canHover: !noHover }">
    <div class="dropdown_icon" v-if="icon">
      <BMaterialIcon :type="icon" :size="15">{{ icon }}</BMaterialIcon>
    </div>
    <div class="dropdown_title">
      <slot />
    </div>
  </li>
</template>

<style>
.dropdown_item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
}

.dropdown_item.dropdown_isBold {
  font-weight: bold;
}

.dropdown_item:hover.dropdown_canHover {
  background: var(--color-neutral-02);
}

.dropdown_title {
  width: 100%;
}

.dropdown_icon {
  display: flex;
  margin-right: 10px;
}
</style>
