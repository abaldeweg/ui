<script setup>
defineProps({
  placeholder: String,
  modelValue: String,
  filter: Boolean,
  branded: Boolean,
  focus: Boolean,
})

defineEmits(['reset', 'input', 'update:modelValue', 'submit', 'filter'])
</script>

<template>
  <form
    class="search"
    :class="{ isBranded: branded }"
    @submit="$emit('submit', $event)"
  >
    <input
      type="search"
      class="input"
      :placeholder="placeholder"
      :value="modelValue"
      :autofocus="focus"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button type="reset" class="button" @click="$emit('reset')">
      <BIcon type="close" :size="18" />
    </button>
    <button type="button" class="button" @click="$emit('filter')" v-if="filter">
      <BIcon type="filter" :size="18" />
    </button>
    <button class="button">
      <BIcon type="search" :size="18" :isPrimary="branded" />
    </button>
  </form>
</template>

<style scoped>
.search {
  display: flex;
  border-radius: 10px;
  border: 1px solid var(--color-neutral-04);
}
.search.isBranded {
  border: 1px solid var(--color-primary-10);
}
.input {
  background: var(--color-neutral-00);
  border-radius: 10px;
  flex-grow: 1;
  outline: 0;
  border: 0;
  padding: 5px;
  padding-left: 10px;
  margin: 0;
  font-family: var(--font-sans);
  font-size: 1em;
  color: var(--color-neutral-10);
}
.button {
  border: 0;
  background: transparent;
  padding: 5px 10px;
  margin: 0;
  cursor: pointer;
}
.input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
input[type='search']::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
</style>
