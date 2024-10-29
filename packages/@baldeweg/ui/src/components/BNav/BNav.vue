<script setup>
defineProps({
  nav: {
    type: Array,
  },
})
</script>

<template>
  <ul class="nav">
    <li class="item" v-for="(item, index) in nav" :key="index">
      <span class="icon" v-if="item.icon">
        <BMaterialIcon :type="item.icon.value" :size="18" no-hover color="var(--color-neutral-06)"
          v-if="item.icon.type === 'icon'">{{ item.icon.value }}</BMaterialIcon>
        <div class="dot" v-if="item.icon.type === 'dot'" :style="{ background: item.icon.value }" />
      </span>

      <span class="title">
        <RouterLink :to="item.route" v-if="typeof item.route === 'object'">
          {{ item.title }}
        </RouterLink>
        <a :href="item.route" v-if="typeof item.route === 'string'">
          {{ item.title }}
        </a>
      </span>

      <span class="badge" v-if="item.badge">
        <RouterLink :to="item.route">{{ item.badge }}</RouterLink>
      </span>
    </li>
  </ul>
</template>

<style scoped>
.nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  justify-items: center;
  border-radius: 10px;
  padding: 5px 20px;
  margin-bottom: 5px;
  transition: background 0.3s ease;
}

.item:hover,
.item:has(.isActiveExact) {
  background: var(--color-neutral-02);
  transition: background 0.3s ease;
}

.item,
.item a {
  color: var(--color-neutral-10);
}

.item a {
  display: block;
}

.icon {
  display: flex;
  justify-items: end;
  align-items: center;
  margin-right: 10px;
  width: 25px;
}

.dot {
  border-radius: 50%;
  width: 10px;
  height: 10px;
}

.title {
  flex-grow: 1;
}

.badge {
  min-width: 30px;
  text-align: right;
}

.badge a {
  color: var(--color-neutral-06);
}

.item:hover .badge,
.isActiveExact .badge {
  color: var(--color-neutral-00);
}
</style>
