<script setup>
defineProps({
  bold: Boolean,
  noHover: Boolean,
  icon: String,
})
</script>

<template>
  <li class="item" :class="{ isBold: bold, canHover: !noHover }">
    <div class="icon" v-if="icon">
      <BMaterialIcon :type="icon" :size="15">{{ icon }}</BMaterialIcon>
    </div>
    <div class="title">
      <slot />
    </div>
  </li>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
}

.item.isBold {
  font-weight: bold;
}

.item:hover.canHover {
  background: var(--color-neutral-02);
}

.title {
  width: 100%;
}

.icon {
  display: flex;
  margin-right: 10px;
}
</style>
