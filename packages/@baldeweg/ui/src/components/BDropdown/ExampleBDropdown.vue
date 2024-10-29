<script setup>
const log = (msg) => {
  console.log(msg)
}
</script>

<template>
  <AppComponent component="BDropdown">
    <template #selector>
      <button>Dropdown</button>
    </template>
    <BDropdownItem bold no-hover>Title</BDropdownItem>
    <BDropdownItem @click.prevent="log(1)">Item 1</BDropdownItem>
    <BDropdownItem @click.prevent="log(2)">Item 2</BDropdownItem>
    <BDropdownItem no-hover @click.prevent="log(3)">Item 3</BDropdownItem>
    <BDropdownItem @click.prevent="log(4)">Item 4</BDropdownItem>
  </AppComponent>
</template>
