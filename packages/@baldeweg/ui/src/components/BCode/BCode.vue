<template>
  <pre class="code">
    <code class="body">
      <slot/>
    </code>
  </pre>
</template>

<style scoped>
.code {
  background: var(--color-neutral-02);
  border-radius: 10px;
  padding: 20px;
  overflow: auto;
}
.body {
  font-family: var(--font-monospace);
}
</style>
