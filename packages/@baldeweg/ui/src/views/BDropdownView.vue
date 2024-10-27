<script setup>
import { useHead } from '@unhead/vue'

useHead({ title: 'BDropdown' })

const log = (msg) => {
  console.log(msg)
}
</script>

<template>
  <article>
    <BDropdown keep-open>
      <template #selector>
        <button>Dropdown</button>
      </template>
      <BDropdownItem bold no-hover>Title</BDropdownItem>
      <BDropdownItem @click.prevent="log(1)">Item 1</BDropdownItem>
      <BDropdownItem @click.prevent="log(2)">Item 2</BDropdownItem>
      <BDropdownItem no-hover @click.prevent="log(3)">Item 3</BDropdownItem>
      <BDropdownItem @click.prevent="log(4)">Item 4</BDropdownItem>
    </BDropdown>

    <div style="float: right">
      <BDropdown>
        <template #selector>
          <button>Dropdown</button>
        </template>
        <BDropdownItem bold no-hover>Title</BDropdownItem>
        <BDropdownItem @click.prevent="log(1)">Item 1</BDropdownItem>
        <BDropdownItem @click.prevent="log(2)">Item 2</BDropdownItem>
        <BDropdownItem @click.prevent="log(3)">Item 3</BDropdownItem>
        <BDropdownItem @click.prevent="log(4)">Item 4</BDropdownItem>
      </BDropdown>
    </div>

    <BDropdown position="mouse">
      <template #selector>
        <button>Dropdown</button>
      </template>
      <BDropdownItem bold no-hover>Title</BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem icon="bin" @click.prevent="log(1)"> Item 1 </BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem icon="plus" @click.prevent="log(2)">
        Item 2
      </BDropdownItem>
      <BDropdownItem icon="plus" @click.prevent="log(3)">
        Item 3
      </BDropdownItem>
      <BDropdownItem icon="plus" @click.prevent="log(4)">
        Item 4
      </BDropdownItem>
    </BDropdown>

    <div style="float: right">
      <BDropdown position="mouse">
        <template #selector>
          <button>Dropdown</button>
        </template>
        <BDropdownItem bold no-hover>Title</BDropdownItem>
        <BDropdownDivider />
        <BDropdownItem icon="bin" @click.prevent="log(1)">
          Item 1
        </BDropdownItem>
        <BDropdownDivider />
        <BDropdownItem icon="plus" @click.prevent="log(2)">
          Item 2
        </BDropdownItem>
        <BDropdownItem icon="plus" @click.prevent="log(3)">
          Item 3
        </BDropdownItem>
        <BDropdownItem icon="plus" @click.prevent="log(4)">
          Item 4
        </BDropdownItem>
      </BDropdown>
    </div>

    <BDropdown position="bottom">
      <template #selector>
        <button>Dropdown</button>
      </template>
      <BDropdownItem bold no-hover>Title</BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem icon="bin" @click.prevent="log(1)"> Item 1 </BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem icon="plus" @click.prevent="log(2)">
        Item 2
      </BDropdownItem>
      <BDropdownItem icon="plus" @click.prevent="log(3)">
        Item 3
      </BDropdownItem>
      <BDropdownItem icon="plus" @click.prevent="log(4)">
        Item 4
      </BDropdownItem>
    </BDropdown>

    <div style="float: right">
      <BDropdown position="bottom">
        <template #selector>
          <button>Dropdown</button>
        </template>
        <BDropdownItem bold no-hover>Title</BDropdownItem>
        <BDropdownDivider />
        <BDropdownItem icon="bin" @click.prevent="log(1)">
          Item 1
        </BDropdownItem>
        <BDropdownDivider />
        <BDropdownItem icon="plus" @click.prevent="log(2)">
          Item 2
        </BDropdownItem>
        <BDropdownItem icon="plus" @click.prevent="log(3)">
          Item 3
        </BDropdownItem>
        <BDropdownItem icon="plus" @click.prevent="log(4)">
          Item 4
        </BDropdownItem>
      </BDropdown>
    </div>

    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>

    <BDropdown>
      <template #selector>
        <button>Dropdown</button>
      </template>
      <BDropdownItem bold no-hover>Title</BDropdownItem>
      <BDropdownItem @click.prevent="log(1)">Item 1</BDropdownItem>
      <BDropdownItem @click.prevent="log(2)">Item 2</BDropdownItem>
      <BDropdownItem @click.prevent="log(3)">Item 3</BDropdownItem>
      <BDropdownItem @click.prevent="log(4)">Item 4</BDropdownItem>
    </BDropdown>

    <div style="float: right">
      <BDropdown>
        <template #selector>
          <button>Dropdown</button>
        </template>
        <BDropdownItem bold no-hover>Title</BDropdownItem>
        <BDropdownItem @click.prevent="log(1)">Item 1</BDropdownItem>
        <BDropdownItem @click.prevent="log(2)">Item 2</BDropdownItem>
        <BDropdownItem @click.prevent="log(3)">Item 3</BDropdownItem>
        <BDropdownItem @click.prevent="log(4)">Item 4</BDropdownItem>
      </BDropdown>
    </div>

    <BDropdown position="mouse">
      <template #selector>
        <button>Dropdown</button>
      </template>
      <BDropdownItem bold no-hover>Title</BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem icon="bin" @click.prevent="log(1)"> Item 1 </BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem icon="plus" @click.prevent="log(2)">
        Item 2
      </BDropdownItem>
      <BDropdownItem icon="plus" @click.prevent="log(3)">
        Item 3
      </BDropdownItem>
      <BDropdownItem icon="plus" @click.prevent="log(4)">
        Item 4
      </BDropdownItem>
    </BDropdown>

    <div style="float: right">
      <BDropdown position="mouse">
        <template #selector>
          <button>Dropdown</button>
        </template>
        <BDropdownItem bold no-hover>Title</BDropdownItem>
        <BDropdownDivider />
        <BDropdownItem icon="bin" @click.prevent="log(1)">
          Item 1
        </BDropdownItem>
        <BDropdownDivider />
        <BDropdownItem icon="plus" @click.prevent="log(2)">
          Item 2
        </BDropdownItem>
        <BDropdownItem icon="plus" @click.prevent="log(3)">
          Item 3
        </BDropdownItem>
        <BDropdownItem icon="plus" @click.prevent="log(4)">
          Item 4
        </BDropdownItem>
      </BDropdown>
    </div>

    <BDropdown position="bottom">
      <template #selector>
        <button>Dropdown</button>
      </template>
      <BDropdownItem bold no-hover>Title</BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem icon="bin" @click.prevent="log(1)"> Item 1 </BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem icon="plus" @click.prevent="log(2)">
        Item 2
      </BDropdownItem>
      <BDropdownItem icon="plus" @click.prevent="log(3)">
        Item 3
      </BDropdownItem>
      <BDropdownItem icon="plus" @click.prevent="log(4)">
        Item 4
      </BDropdownItem>
    </BDropdown>

    <div style="float: right">
      <BDropdown position="bottom">
        <template #selector>
          <button>Dropdown</button>
        </template>
        <BDropdownItem bold no-hover>Title</BDropdownItem>
        <BDropdownDivider />
        <BDropdownItem icon="bin" @click.prevent="log(1)">
          Item 1
        </BDropdownItem>
        <BDropdownDivider />
        <BDropdownItem icon="plus" @click.prevent="log(2)">
          Item 2
        </BDropdownItem>
        <BDropdownItem icon="plus" @click.prevent="log(3)">
          Item 3
        </BDropdownItem>
        <BDropdownItem icon="plus" @click.prevent="log(4)">
          Item 4
        </BDropdownItem>
      </BDropdown>
    </div>
  </article>
</template>
