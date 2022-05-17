<script setup>
import { ref } from 'vue'
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BForm - @baldeweg/ui' })

const log = (msg) => {
  console.log(msg)
}

const selectedOption = ref('3')
</script>

<template>
  <b-form @submit.prevent="log('send')">
    <b-form-group>
      <b-form-item>
        <b-form-label for="text">Text</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-helpline>
          This is a helpline that describes what the entry is about.
        </b-form-helpline>
      </b-form-item>
      <b-form-item>
        <b-form-input type="text" id="text" @input="log" event focus />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="textarea">Textarea</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-textarea
          rows="5"
          cols="20"
          id="textarea"
          required
          @input="log"
        />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="select_element">Options</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-select
          id="select_element"
          v-model="selectedOption"
          allow-empty
          :items="[
            { id: '1', name: 'Option 1' },
            { id: '2', name: 'Option 2' },
            { id: '3', name: 'Option 3' },
          ]"
          item-key="id"
          item-value="name"
        />
      </b-form-item>
      {{ selectedOption }}
    </b-form-group>

    <b-form-fieldset>
      <b-form-legend>Checkbox</b-form-legend>
      <b-form-item>
        <b-form-item>
          <input
            type="checkbox"
            value="checkbox1"
            id="checkbox1"
            @input="log"
          />
          <b-form-label for="checkbox1">Checkbox 1</b-form-label>
        </b-form-item>
      </b-form-item>
      <b-form-item>
        <b-form-item>
          <input
            type="checkbox"
            value="checkbox2"
            id="checkbox2"
            @input="log"
          />
          <b-form-label for="checkbox2">Checkbox 2</b-form-label>
        </b-form-item>
      </b-form-item>
      <b-form-item>
        <b-form-item>
          <input
            type="checkbox"
            value="checkbox3"
            id="checkbox3"
            @input="log"
          />
          <b-form-label for="checkbox3">Checkbox 3</b-form-label>
        </b-form-item>
      </b-form-item>
    </b-form-fieldset>

    <b-form-fieldset>
      <b-form-legend>Radio</b-form-legend>
      <b-form-item>
        <input type="radio" value="radio1" id="radio1" @input="log" />
        <b-form-label for="radio1">Radio 1</b-form-label>
      </b-form-item>
      <b-form-item>
        <input type="radio" value="radio2" id="radio2" @input="log" />
        <b-form-label for="radio2">Radio 2</b-form-label>
      </b-form-item>
    </b-form-fieldset>

    <b-form-group>
      <b-form-item>
        <b-form-label for="password">Password</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="password" id="password" @input="log" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="file">File</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="file" id="file" @input="log" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="email">Email</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="email" id="email" @input="log" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="url">URL</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="url" id="url" @input="log" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="tel">Phone</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="tel" id="tel" @input="log" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="number">Number</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input
          type="number"
          value="5"
          step="1"
          min="0"
          max="10"
          id="number"
          @input="log"
        />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="search">Search</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="search" id="search" @input="log" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="date">Date</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="date" id="date" @input="log" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="time">Time</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="time" id="time" @input="log" />
      </b-form-item>
    </b-form-group>

    <b-form-group buttons>
      <b-form-item>
        <b-button design="primary">Save</b-button>
      </b-form-item>
    </b-form-group>
  </b-form>
</template>
