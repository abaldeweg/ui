<template>
  <form>
    <slot />

    <div class="form_buttons" v-if="$slots.buttons">
      <slot name="buttons" />
    </div>
  </form>
</template>

<style>
.form {
  box-sizing: border-box;
  width: 100%;
}

.form_buttons {
  clear: both;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  overflow: auto;
}
</style>
