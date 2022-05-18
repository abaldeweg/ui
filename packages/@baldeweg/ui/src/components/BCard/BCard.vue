<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <div class="image" v-if="$slots.image">
      <RouterLink :to="{ name: route }">
        <slot name="image" />
      </RouterLink>
    </div>

    <h2 class="title">
      <RouterLink :to="{ name: route }">
        {{ title }}
      </RouterLink>
    </h2>

    <div class="meta" v-if="$slots.meta">
      <slot name="meta" />
    </div>

    <p class="body">
      <RouterLink :to="{ name: route }">
        <slot name="content" />
      </RouterLink>
    </p>
  </div>
</template>

<style scoped>
.card {
  clear: both;
  border-bottom: 1px solid var(--color-neutral-02);
  padding-bottom: 10px;
  margin: 20px 0;
  overflow: auto;
}
.image {
  background: var(--color-neutral-02);
  line-height: 0;
  margin: 0 20px 0 0;
  transition: opacity 0.2s;
}
.title {
  margin: 0;
}
.title a {
  color: var(--color-neutral-10);
}
.title a:hover {
  color: var(--color-neutral-06);
}
.body {
  padding: 0;
  margin: 0;
}
.body a,
.body a:hover {
  color: var(--color-neutral-10);
}
.meta {
  color: var(--color-neutral-06);
}
.meta a {
  color: var(--color-neutral-06);
}
.meta a:hover {
  text-decoration: underline;
}
</style>
