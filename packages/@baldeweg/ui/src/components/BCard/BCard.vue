<script setup>
defineProps({
  route: Object,
  outlined: Boolean,
  filled: Boolean,
})
</script>

<template>
  <article
    class="card"
    :class="{
      outlined,
      filled,
    }"
  >
    <div class="image" v-if="$slots.image">
      <RouterLink :to="route" v-if="route">
        <slot name="image" />
      </RouterLink>
      <slot name="image" v-else />
    </div>

    <div class="body">
      <div class="title">
        <RouterLink :to="route" v-if="route">
          <slot name="title" />
        </RouterLink>
        <slot name="title" v-else />
      </div>

      <div class="subtitle" v-if="$slots.subtitle">
        <RouterLink :to="route" v-if="route">
          <slot name="subtitle" />
        </RouterLink>
        <slot name="subtitle" v-else />
      </div>

      <div class="text" v-if="$slots.text">
        <RouterLink :to="route" v-if="route">
          <slot name="text" />
        </RouterLink>
        <slot name="text" v-else />
      </div>
    </div>

    <div class="actions" v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </article>
</template>

<style scoped>
.card {
  clear: both;
}
.outlined {
  border: 2px solid var(--color-neutral-02);
}
.filled {
  background: var(--color-neutral-02);
}
.image {
  background: var(--color-neutral-02);
  width: 100%;
  line-height: 0;
}
.title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}
.title,
.title a {
  color: var(--color-neutral-10);
}
.title:hover,
.title a:hover {
  color: var(--color-neutral-06);
}
.subtitle,
.subtitle a,
.subtitle a:hover {
  color: var(--color-neutral-06);
  font-size: 1.2rem;
}
.text,
.text a,
.text a:hover {
  color: var(--color-neutral-10);
  margin-top: 10px;
}
.actions {
  text-align: right;
  margin-top: 20px;
}
</style>
