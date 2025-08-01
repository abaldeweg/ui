<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
});
</script>

<template>
  <main class="content">
    <slot />
  </main>
</template>

<style>
body {
  /* Neutral */
  --color-neutral-10: #292929;
  --color-neutral-08: #525252;
  --color-neutral-06: #858585;
  --color-neutral-04: #a3a3a3;
  --color-neutral-02: #d6d6d6;
  --color-neutral-00: #ffffff;
  /* Primary */
  --color-primary-10: #C1571A;
  --color-primary-05: #e9915d;
  --color-primary-00: #F3C2A5;
  /* Accent */
  --color-accent-red-10: #ED0C0C;
  --color-accent-red-05: #ff7373;
  --color-accent-red-00: #F65A5A;
  --color-accent-green-10: #008A00;
  --color-accent-green-05: #8bff8b;
  --color-accent-green-00: #60F060;
  --color-accent-yellow-10: #774B06;
  --color-accent-yellow-05: #f8eb8c;
  --color-accent-yellow-00: #CCCC00;
  --color-accent-blue-10: #0074D9;
  --color-accent-blue-05: #85B4FF;
  --color-accent-blue-00: #1793FF;
  /* Font */
  --font-sans: 'Open Sans', 'Liberation Sans', 'Helvetica Neue', Arial;
  --font-serif: Georgia, Constantia, 'DejaVu Serif', 'Times New Roman';
  --font-monospace: Consolas, 'Liberation Mono', 'Lucida Console';
  /* Misc */
  --masthead-top-height: 50px;
  --bottom-nav-height: 70px;

  color: var(--color-neutral-10);
  font-family: var(--font-sans);
  padding: 0;
  margin: 0;
  scrollbar-gutter: stable;
}

body[data-theme='dark'] {
  /* Primary */
  --color-primary-10: #F3C2A5;
  --color-primary-05: #e9915d;
  --color-primary-00: #C1571A;
  /* Accent */
  --color-accent-red-10: #F65A5A;
  --color-accent-red-05: #ff7373;
  --color-accent-red-00: #ED0C0C;
  --color-accent-green-10: #60F060;
  --color-accent-green-05: #8bff8b;
  --color-accent-green-00: #008A00;
  --color-accent-yellow-10: #CCCC00;
  --color-accent-yellow-05: #f8eb8c;
  --color-accent-yellow-00: #774B06;
  --color-accent-blue-10: #1793FF;
  --color-accent-blue-05: #85B4FF;
  --color-accent-blue-00: #0074D9;
  /* Neutral */
  --color-neutral-10: #ffffff;
  --color-neutral-08: #d6d6d6;
  --color-neutral-06: #a3a3a3;
  --color-neutral-04: #858585;
  --color-neutral-02: #525252;
  --color-neutral-00: #292929;
}

body {
  background: var(--color-neutral-00);
  padding: 0;
  margin: 0;
  accent-color: var(--color-primary-10);
}

::selection {
  color: var(--color-neutral-00);
  background: var(--color-primary-10);
}

::-moz-selection {
  color: var(--color-neutral-00);
  background: var(--color-primary-10);
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--color-neutral-06);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-neutral-08);
}

::-webkit-scrollbar-track-piece {
  border-left: 1px solid var(--color-neutral-02);
  background: var(--color-neutral-00);
}

.content {
  display: block;
  clear: both;
  z-index: 1;
}

img,
picture,
audio,
video {
  max-width: 100%;
  height: auto;
}

a,
a:hover {
  color: var(--color-neutral-10);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--color-primary-10);
}

a:hover {
  text-decoration: none;
}

p {
  padding: 10px 0;
  margin: 0;
}

li li {
  margin-left: 20px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  margin-bottom: 10px;
  font-family: var(--font-serif);
  word-break: break-all;
}

h1 {
  font-size: 1.6rem;
}

h2 {
  font-size: 1.2rem;
}

h3 {
  font-size: 1rem;
}

table {
  width: 100%;
  border-spacing: 0;
  padding: 0;
  margin: 0;
  overflow: auto;
}

th {
  text-align: left;
}

th,
td {
  border-bottom: 1px solid var(--color-neutral-02);
  vertical-align: top;
  padding: 10px;
}

th:nth-child(1),
td:nth-child(1) {
  padding-left: 0;
}

th:nth-last-child(1),
td:nth-last-child(1) {
  padding-right: 0;
}

.hidden {
  display: none;
  visibility: hidden;
}

.visuallyHidden {
  position: absolute;
  border: 0;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

@media all and (min-width: 600px) {
  h1 {
    font-size: 2.1rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.5rem;
  }
}
</style>
