<script setup>
defineProps({
  placeholder: String,
  value: String,
  filter: Boolean,
  branded: Boolean,
  focus: Boolean,
})

const emit = defineEmits(['reset', 'input'])

const reset = () => {
  emit('reset')
  emit('input', null)
}
</script>

<template>
  <form
    class="search"
    :class="{ isBranded: branded }"
    @submit="$emit('submit', $event)"
  >
    <input
      type="search"
      class="search_input"
      :placeholder="placeholder"
      :value="value"
      :autofocus="focus"
      @input="$emit('input', $event.target.value)"
    />
    <button type="reset" class="search_btn" @click="reset">
      <BIcon type="close" :size="18" />
    </button>
    <button
      type="button"
      class="search_btn"
      @click="$emit('filter')"
      v-if="filter"
    >
      <BIcon type="filter" :size="18" />
    </button>
    <button class="search_btn">
      <BIcon type="search" :size="18" :isPrimary="branded" />
    </button>
  </form>
</template>

<style scoped>
.search {
  display: flex;
  border-radius: 5px;
  border: 1px solid var(--color-neutral-04);
}
.search.isBranded {
  border: 1px solid var(--color-primary-10);
}
.search_input {
  background: var(--color-neutral-00);
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
.search_btn {
  border: 0;
  background: transparent;
  padding: 5px 10px;
  margin: 0;
  cursor: pointer;
}
.search_input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
input[type='search']::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
</style>
