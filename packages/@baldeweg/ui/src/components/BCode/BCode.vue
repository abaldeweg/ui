<template>
  <pre class="code">
    <code class="code_inner">
      <slot/>
    </code>
  </pre>
</template>

<script>
export default {
  name: 'b-code',
}
</script>

<style scoped>
.code {
  background: var(--color-neutral-02);
  padding: 20px;
  overflow: auto;
}
.code_inner {
  font-family: var(--font-monospace);
}
</style>
