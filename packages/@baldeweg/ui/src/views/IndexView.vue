<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'Home - @baldeweg/ui' })
</script>

<template>
  <b-container size="s">
    <h1>@baldeweg/ui</h1>

    <ul>
      <li>
        <RouterLink :to="{ name: 'alert' }">Alert</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'badge' }">Badge</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'bottom-nav' }">Bottom Nav</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'button' }">Button</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'card' }">Card</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'chip' }">Chip</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'code' }">Code</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'comment' }">Comment</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'container' }">Container</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'dialog' }">Dialog</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'divider' }">Divider</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'drawer' }">Drawer</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'dropdown' }">Dropdown</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'flex' }">Flex</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'form' }">Form</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'global' }">Global</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'horizontalList' }">
          Horizontal List
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'icon' }">Icon</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'list' }">List</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'masthead' }">Masthead</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'modal' }">Modal</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'panel' }">Panel</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'scrollToBottom' }">
          Scroll to Bottom
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'search' }">Search</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'spinner' }">Spinner</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'subheader' }">Subheader</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'switch' }">Switch</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'table' }">Table</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'tabs' }">Tabs</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'toast' }">Toast</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'tooltip' }">Tooltip</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'upload' }">Upload</RouterLink>
      </li>
    </ul>
  </b-container>
</template>
