<template>
  <main class="content">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'b-app',
}
</script>

<style scoped>
.content {
  display: block;
  clear: both;
  z-index: 1;
}
</style>

<style>
html {
  /* Primary */
  --color-primary-10: #d7621d;
  --color-primary-05: #e9915d;
  --color-primary-00: #f3c2a5;
  /* Neutral */
  --color-neutral-10: #292929;
  --color-neutral-08: #525252;
  --color-neutral-06: #858585;
  --color-neutral-04: #a3a3a3;
  --color-neutral-02: #d6d6d6;
  --color-neutral-00: #ffffff;
  /* Accent */
  --color-accent-red-10: #ff0000;
  --color-accent-red-05: #ff7373;
  --color-accent-red-00: #ffe7e7;
  --color-accent-green-10: #00ff00;
  --color-accent-green-05: #8bff8b;
  --color-accent-green-00: #e7ffe7;
  --color-accent-yellow-10: #f1d302;
  --color-accent-yellow-05: #f8eb8c;
  --color-accent-yellow-00: #fdfbe8;
  /* Font */
  --font-sans: 'Open Sans', 'Liberation Sans', 'Helvetica Neue', Arial;
  --font-serif: Georgia, Constantia, 'DejaVu Serif', 'Times New Roman';
  --font-monospace: Consolas, 'Liberation Mono', 'Lucida Console';
  /* Misc */
  --masthead-top-height: 50px;
  --bottom-nav-height: 70px;

  color: var(--color-neutral-10);
  font-family: var(--font-sans);
  font-size: 18px;
  padding: 0;
  margin: 0;
}
html[data-theme='dark'] {
  /* Primary */
  --color-primary-10: #d7621d;
  --color-primary-05: #e9915d;
  --color-primary-00: #f3c2a5;
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
img,
picture,
audio,
video {
  max-width: 100%;
  height: auto;
}
a,
a:hover {
  color: var(--color-primary-10);
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
  font-size: 1.6em;
}
h2 {
  font-size: 1.2em;
}
h3 {
  font-size: 1em;
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

@media all and (min-width: 1200px) {
  html {
    font-size: 20px;
  }
}

@media all and (min-width: 600px) {
  h1 {
    font-size: 2.1em;
  }
  h2 {
    font-size: 1.6em;
  }
  h3 {
    font-size: 1.5em;
  }
}
</style>
