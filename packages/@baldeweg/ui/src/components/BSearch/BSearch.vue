<script setup>
defineProps({
  placeholder: String,
  modelValue: String,
  filter: {
    type: Boolean,
    default: false
  },
  branded: {
    type: Boolean,
    default: false
  },
  focus: {
    type: Boolean,
    default: false
  },
  reset: {
    type: Boolean,
    default: false
  },
  resetLabel: String,
  filterLabel: String,
  searchLabel: String
})

defineEmits(['reset', 'input', 'update:modelValue', 'submit', 'filter'])
</script>

<template>
  <form class="search" :class="{ 'search_isBranded': branded }" @submit.prevent="$emit('submit', $event)">
    <input type="search" class="search_input" :placeholder="placeholder" :value="modelValue" :autofocus="focus"
      @input="$emit('update:modelValue', $event.target.value)" aria-label="Search" />
    <div class="search_buttons">
      <button type="reset" class="search_button" @click="$emit('reset')" v-if="reset">
        <BMaterialIcon :size="22" :aria-label="resetLabel" hover>close</BMaterialIcon>
      </button>
      <button type="button" class="search_button" @click="$emit('filter')" v-if="filter">
        <BMaterialIcon :size="22" :aria-label="filterLabel" hover>filter_alt</BMaterialIcon>
      </button>
      <button class="search_button">
        <BMaterialIcon :size="22" :isPrimary="branded" :aria-label="searchLabel" hover>search</BMaterialIcon>
      </button>
    </div>
  </form>
</template>

<style>
.search {
  display: block;
  border-radius: 10px;
  border: 1px solid var(--color-neutral-04);
  flex-grow: 1;
  align-items: center;
}

.search.search_isBranded {
  border: 1px solid var(--color-primary-10);
}

.search_input {
  background: var(--color-neutral-00);
  border-radius: 10px;
  flex-grow: 1;
  outline: 0;
  border: 0;
  width: 100%;
  padding: 5px;
  padding-left: 10px;
  margin: 0;
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-neutral-10);
}

.search_buttons {
  width: 100%;
  text-align: right;
}

.search_button {
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

@media all and (min-width: 500px) {
  .search {
    display: flex;
  }

  .search_buttons {
    width: auto;
  }

  .search_input {
    width: auto;
  }
}

@media (prefers-color-scheme: dark) {
  .search_button {
    color: var(--color-neutral-10);
  }
}
</style>
