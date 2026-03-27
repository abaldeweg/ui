<template>
  <form class="u:box-border u:w-full">
    <slot />
    <div class="form_buttons u:clear-both u:flex u:justify-end u:gap-s u:overflow-auto" v-if="$slots.buttons">
      <slot name="buttons" />
    </div>
  </form>
</template>
