<script setup>
defineProps({
  nav: {
    type: Array,
  },
})
</script>

<template>
  <ul class="nav">
    <li class="nav_item" v-for="(item, index) in nav" :key="index">
      <span class="nav_icon" v-if="item.icon">
        <BMaterialIcon :type="item.icon.value" :size="18" no-hover color="var(--color-neutral-06)"
          v-if="item.icon.type === 'icon'">{{ item.icon.value }}</BMaterialIcon>
        <div class="nav_dot" v-if="item.icon.type === 'dot'" :style="{ background: item.icon.value }" />
      </span>

      <span class="nav_title">
        <RouterLink :to="item.route" v-if="typeof item.route === 'object'">
          {{ item.title }}
        </RouterLink>
        <a :href="item.route" v-if="typeof item.route === 'string'">
          {{ item.title }}
        </a>
      </span>

      <span class="nav_badge" v-if="item.badge">
        <RouterLink :to="item.route">{{ item.badge }}</RouterLink>
      </span>
    </li>
  </ul>
</template>

<style>
.nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav_item {
  display: flex;
  justify-items: center;
  border-radius: 10px;
  padding: 5px 20px;
  margin-bottom: 5px;
  transition: background 0.3s ease;
}

.nav_item:hover,
.nav_item:has(.isActiveExact) {
  background: var(--color-neutral-02);
  transition: background 0.3s ease;
}

.nav_item,
.nav_item a {
  color: var(--color-neutral-10);
}

.nav_item a {
  display: block;
}

.nav a,
.nav a:hover {
  text-decoration: none;
}

.nav_icon {
  display: flex;
  justify-items: end;
  align-items: center;
  margin-right: 10px;
  width: 25px;
}

.nav_dot {
  border-radius: 50%;
  width: 10px;
  height: 10px;
}

.nav_title {
  flex-grow: 1;
}

.nav_badge {
  min-width: 30px;
  text-align: right;
}

.nav_badge a {
  color: var(--color-neutral-06);
}

.nav_item:hover .nav_badge,
.isActiveExact .nav_badge {
  color: var(--color-neutral-00);
}
</style>
