<script setup>
defineProps({
  author: String,
  date: String,
})
</script>

<template>
  <div class="comment">
    <div class="actions" v-if="$slots.actions">
      <slot name="actions" />
    </div>

    <div class="header" v-if="author || date">
      <span class="author" v-if="author">{{ author }}</span>
      <span class="date" v-if="date">{{ date }}</span>
    </div>

    <div class="body">
      <p><slot /></p>
    </div>
  </div>
</template>

<style scoped>
.comment {
  border-bottom: 1px solid var(--color-neutral-02);
  margin-bottom: 20px;
}
.comment:first-of-type {
  border-top: 1px solid var(--color-neutral-02);
  padding-top: 20px;
}
.header {
  font-size: 0.8rem;
  color: var(--color-neutral-06);
}
.author {
  font-weight: bold;
}
.date {
  margin-left: 10px;
}
.actions {
  float: right;
}
.body {
  overflow-wrap: break-word;
}
</style>
