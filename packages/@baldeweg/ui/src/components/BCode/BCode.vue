<template>
  <pre class="code"><code class="code_body"><slot/></code></pre>
</template>

<style>
.code {
  background: var(--color-neutral-02);
  border-radius: 20px;
  padding: 20px;
  overflow: auto;
}

.code_body {
  font-family: var(--font-monospace);
}
</style>
