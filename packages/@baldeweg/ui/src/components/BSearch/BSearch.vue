<script setup>
defineProps({
  placeholder: String,
  modelValue: String,
  filter: Boolean,
  branded: Boolean,
  focus: Boolean,
  reset: Boolean,
  resetLabel: String,
  filterLabel: String,
  searchLabel: String
})

defineEmits(['reset', 'input', 'update:modelValue', 'submit', 'filter'])
</script>

<template>
  <form class="search" :class="{ isBranded: branded }" @submit.prevent="$emit('submit', $event)">
    <input type="search" class="input" :placeholder="placeholder" :value="modelValue" :autofocus="focus"
      @input="$emit('update:modelValue', $event.target.value)" aria-label="Search" />
    <div class="buttons">
      <button type="reset" class="button" @click="$emit('reset')" v-if="reset">
        <BIcon type="close" :size="18" :aria-label="resetLabel" />
      </button>
      <button type="button" class="button" @click="$emit('filter')" v-if="filter">
        <BIcon type="filter" :size="18" :aria-label="filterLabel" />
      </button>
      <button class="button">
        <BIcon type="search" :size="18" :isPrimary="branded" :aria-label="searchLabel" />
      </button>
    </div>
  </form>
</template>

<style scoped>
.search {
  display: block;
  border-radius: 10px;
  border: 1px solid var(--color-neutral-04);
  flex-grow: 1;
  align-items: center;
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
  width: 100%;
  padding: 5px;
  padding-left: 10px;
  margin: 0;
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-neutral-10);
}

.buttons {
  width: 100%;
  text-align: right;
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

@media all and (min-width: 500px) {
  .search {
    display: flex;
  }

  .buttons {
    width: auto;
  }

  .input {
    width: auto;
  }
}
</style>
