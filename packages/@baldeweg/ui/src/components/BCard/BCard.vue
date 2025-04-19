<script setup>
defineProps({
  route: Object,
  outlined: {
    type: Boolean,
    default: false,
  },
  filled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <article
    class="card"
    :class="{
      card_outlined: outlined,
      card_filled: filled,
    }"
  >
    <div class="card_image" v-if="$slots.image">
      <RouterLink :to="route" v-if="route">
        <slot name="image" />
      </RouterLink>
      <slot name="image" v-else />
    </div>

    <div class="card_body">
      <div class="card_title">
        <RouterLink :to="route" v-if="route">
          <slot name="title" />
        </RouterLink>
        <slot name="title" v-else />
      </div>

      <div class="card_subtitle" v-if="$slots.subtitle">
        <RouterLink :to="route" v-if="route">
          <slot name="subtitle" />
        </RouterLink>
        <slot name="subtitle" v-else />
      </div>

      <div class="card_text" v-if="$slots.text">
        <RouterLink :to="route" v-if="route">
          <slot name="text" />
        </RouterLink>
        <slot name="text" v-else />
      </div>
    </div>

    <div class="card_actions" v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </article>
</template>

<style scoped>
.card {
  clear: both;
}
.card_outlined {
  border: 2px solid var(--color-neutral-02);
}
.card_filled {
  background: var(--color-neutral-02);
}
.card_image {
  background: var(--color-neutral-02);
  width: 100%;
  line-height: 0;
}
.card_title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}
.card_title,
.card_title a {
  color: var(--color-neutral-10);
}
.card_title:hover,
.card_title a:hover {
  color: var(--color-neutral-06);
}
.card_subtitle,
.card_subtitle a,
.card_subtitle a:hover {
  color: var(--color-neutral-06);
  font-size: 1.2rem;
}
.card_text,
.card_text a,
.card_text a:hover {
  color: var(--color-neutral-10);
  margin-top: 10px;
}
.card_actions {
  text-align: right;
  margin-top: 20px;
}
</style>
