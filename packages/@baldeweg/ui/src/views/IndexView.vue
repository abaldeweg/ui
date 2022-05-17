<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'Home - @baldeweg/ui' })
</script>

<template>
  <b-container size="s">
    <h1>@baldeweg/ui</h1>

    <ul>
      <li>
        <router-link :to="{ name: 'alert' }">Alert</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'badge' }">Badge</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'bottom-nav' }">Bottom Nav</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'button' }">Button</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'card' }">Card</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'chip' }">Chip</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'code' }">Code</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'comment' }">Comment</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'container' }">Container</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'dialog' }">Dialog</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'divider' }">Divider</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'drawer' }">Drawer</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'dropdown' }">Dropdown</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'flex' }">Flex</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'form' }">Form</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'global' }">Global</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'horizontalList' }">
          Horizontal List
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'icon' }">Icon</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'list' }">List</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'masthead' }">Masthead</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'modal' }">Modal</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'scrollToBottom' }">
          Scroll to Bottom
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'search' }">Search</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'spinner' }">Spinner</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'subheader' }">Subheader</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'switch' }">Switch</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'table' }">Table</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'tabs' }">Tabs</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'toast' }">Toast</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'tooltip' }">Tooltip</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'upload' }">Upload</router-link>
      </li>
    </ul>
  </b-container>
</template>
