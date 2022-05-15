<template>
  <div class="card">
    <div class="card_image" v-if="$slots.image">
      <router-link :to="{ name: route }">
        <slot name="image" />
      </router-link>
    </div>

    <h2 class="card_title">
      <router-link :to="{ name: route }">
        {{ title }}
      </router-link>
    </h2>

    <div class="card_meta" v-if="$slots.meta">
      <slot name="meta" />
    </div>

    <p class="card_body">
      <router-link :to="{ name: route }">
        <slot name="content" />
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'b-card',
  props: {
    title: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  clear: both;
  border-bottom: 1px solid var(--color-neutral-02);
  padding-bottom: 10px;
  margin: 20px 0;
  overflow: auto;
}
.card_image {
  background: var(--color-neutral-02);
  line-height: 0;
  margin: 0 20px 0 0;
  transition: opacity 0.2s;
}
.card_title {
  margin: 0;
}
.card_title a {
  color: var(--color-neutral-10);
}
.card_title a:hover {
  color: var(--color-neutral-06);
}
.card_body {
  padding: 0;
  margin: 0;
}
.card_body a,
.card_body a:hover {
  color: var(--color-neutral-10);
}
.card_meta {
  color: var(--color-neutral-06);
}
.card_meta a {
  color: var(--color-neutral-06);
}
.card_meta a:hover {
  text-decoration: underline;
}
</style>
