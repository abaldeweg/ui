<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BDropdown - @baldeweg/ui' })

const log = (msg) => {
  console.log(msg)
}
</script>

<template>
  <article>
    <b-dropdown keep-open>
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-item bold no-hover>Title</b-dropdown-item>
      <b-dropdown-item @click.prevent="log(1)">Item 1</b-dropdown-item>
      <b-dropdown-item @click.prevent="log(2)">Item 2</b-dropdown-item>
      <b-dropdown-item no-hover @click.prevent="log(3)">Item 3</b-dropdown-item>
      <b-dropdown-item @click.prevent="log(4)">Item 4</b-dropdown-item>
    </b-dropdown>

    <div style="float: right">
      <b-dropdown>
        <template #selector>
          <button>Dropdown</button>
        </template>
        <b-dropdown-item bold no-hover>Title</b-dropdown-item>
        <b-dropdown-item @click.prevent="log(1)">Item 1</b-dropdown-item>
        <b-dropdown-item @click.prevent="log(2)">Item 2</b-dropdown-item>
        <b-dropdown-item @click.prevent="log(3)">Item 3</b-dropdown-item>
        <b-dropdown-item @click.prevent="log(4)">Item 4</b-dropdown-item>
      </b-dropdown>
    </div>

    <b-dropdown position="mouse">
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-item bold no-hover>Title</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item icon="bin" @click.prevent="log(1)">
        Item 1
      </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item icon="plus" @click.prevent="log(2)">
        Item 2
      </b-dropdown-item>
      <b-dropdown-item icon="plus" @click.prevent="log(3)">
        Item 3
      </b-dropdown-item>
      <b-dropdown-item icon="plus" @click.prevent="log(4)">
        Item 4
      </b-dropdown-item>
    </b-dropdown>

    <div style="float: right">
      <b-dropdown position="mouse">
        <template #selector>
          <button>Dropdown</button>
        </template>
        <b-dropdown-item bold no-hover>Title</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item icon="bin" @click.prevent="log(1)">
          Item 1
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item icon="plus" @click.prevent="log(2)">
          Item 2
        </b-dropdown-item>
        <b-dropdown-item icon="plus" @click.prevent="log(3)">
          Item 3
        </b-dropdown-item>
        <b-dropdown-item icon="plus" @click.prevent="log(4)">
          Item 4
        </b-dropdown-item>
      </b-dropdown>
    </div>

    <b-dropdown position="bottom">
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-item bold no-hover>Title</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item icon="bin" @click.prevent="log(1)">
        Item 1
      </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item icon="plus" @click.prevent="log(2)">
        Item 2
      </b-dropdown-item>
      <b-dropdown-item icon="plus" @click.prevent="log(3)">
        Item 3
      </b-dropdown-item>
      <b-dropdown-item icon="plus" @click.prevent="log(4)">
        Item 4
      </b-dropdown-item>
    </b-dropdown>

    <div style="float: right">
      <b-dropdown position="bottom">
        <template #selector>
          <button>Dropdown</button>
        </template>
        <b-dropdown-item bold no-hover>Title</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item icon="bin" @click.prevent="log(1)">
          Item 1
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item icon="plus" @click.prevent="log(2)">
          Item 2
        </b-dropdown-item>
        <b-dropdown-item icon="plus" @click.prevent="log(3)">
          Item 3
        </b-dropdown-item>
        <b-dropdown-item icon="plus" @click.prevent="log(4)">
          Item 4
        </b-dropdown-item>
      </b-dropdown>
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

    <b-dropdown>
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-item bold no-hover>Title</b-dropdown-item>
      <b-dropdown-item @click.prevent="log(1)">Item 1</b-dropdown-item>
      <b-dropdown-item @click.prevent="log(2)">Item 2</b-dropdown-item>
      <b-dropdown-item @click.prevent="log(3)">Item 3</b-dropdown-item>
      <b-dropdown-item @click.prevent="log(4)">Item 4</b-dropdown-item>
    </b-dropdown>

    <div style="float: right">
      <b-dropdown>
        <template #selector>
          <button>Dropdown</button>
        </template>
        <b-dropdown-item bold no-hover>Title</b-dropdown-item>
        <b-dropdown-item @click.prevent="log(1)">Item 1</b-dropdown-item>
        <b-dropdown-item @click.prevent="log(2)">Item 2</b-dropdown-item>
        <b-dropdown-item @click.prevent="log(3)">Item 3</b-dropdown-item>
        <b-dropdown-item @click.prevent="log(4)">Item 4</b-dropdown-item>
      </b-dropdown>
    </div>

    <b-dropdown position="mouse">
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-item bold no-hover>Title</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item icon="bin" @click.prevent="log(1)">
        Item 1
      </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item icon="plus" @click.prevent="log(2)">
        Item 2
      </b-dropdown-item>
      <b-dropdown-item icon="plus" @click.prevent="log(3)">
        Item 3
      </b-dropdown-item>
      <b-dropdown-item icon="plus" @click.prevent="log(4)">
        Item 4
      </b-dropdown-item>
    </b-dropdown>

    <div style="float: right">
      <b-dropdown position="mouse">
        <template #selector>
          <button>Dropdown</button>
        </template>
        <b-dropdown-item bold no-hover>Title</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item icon="bin" @click.prevent="log(1)">
          Item 1
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item icon="plus" @click.prevent="log(2)">
          Item 2
        </b-dropdown-item>
        <b-dropdown-item icon="plus" @click.prevent="log(3)">
          Item 3
        </b-dropdown-item>
        <b-dropdown-item icon="plus" @click.prevent="log(4)">
          Item 4
        </b-dropdown-item>
      </b-dropdown>
    </div>

    <b-dropdown position="bottom">
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-item bold no-hover>Title</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item icon="bin" @click.prevent="log(1)">
        Item 1
      </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item icon="plus" @click.prevent="log(2)">
        Item 2
      </b-dropdown-item>
      <b-dropdown-item icon="plus" @click.prevent="log(3)">
        Item 3
      </b-dropdown-item>
      <b-dropdown-item icon="plus" @click.prevent="log(4)">
        Item 4
      </b-dropdown-item>
    </b-dropdown>

    <div style="float: right">
      <b-dropdown position="bottom">
        <template #selector>
          <button>Dropdown</button>
        </template>
        <b-dropdown-item bold no-hover>Title</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item icon="bin" @click.prevent="log(1)">
          Item 1
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item icon="plus" @click.prevent="log(2)">
          Item 2
        </b-dropdown-item>
        <b-dropdown-item icon="plus" @click.prevent="log(3)">
          Item 3
        </b-dropdown-item>
        <b-dropdown-item icon="plus" @click.prevent="log(4)">
          Item 4
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </article>
</template>
