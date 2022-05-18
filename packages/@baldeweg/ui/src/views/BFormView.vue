<script setup>
import { useTitle } from './../composables/useTitle.js'
import { ref } from 'vue'

useTitle({ title: 'BForm - @baldeweg/ui' })

const log = (msg) => {
  console.log(msg)
}

const input = ref(null)
const textarea = ref(null)
const selectedOption = ref('3')
</script>

<template>
  <BForm @submit.prevent="log('send')">
    <BFormGroup>
      <BFormItem>
        <BFormLabel for="text">Text</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormHelpline>
          This is a helpline that describes what the entry is about.
        </BFormHelpline>
      </BFormItem>
      <BFormItem>
        <BFormInput type="text" id="text" @input="log" focus v-model="input" />
      </BFormItem>
      Value: {{ input }}
    </BFormGroup>

    <BFormGroup>
      <BFormItem>
        <BFormLabel for="textarea">Textarea</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormTextarea
          rows="5"
          cols="20"
          id="textarea"
          required
          @input="log"
          v-model="textarea"
        />
      </BFormItem>
      Value: {{ textarea }}
    </BFormGroup>

    <BFormGroup>
      <BFormItem>
        <BFormLabel for="select_element">Options</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormSelect
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
      </BFormItem>
      Value: {{ selectedOption }}
    </BFormGroup>

    <BFormFieldset>
      <BFormLegend>Checkbox</BFormLegend>
      <BFormItem>
        <BFormItem>
          <input
            type="checkbox"
            value="checkbox1"
            id="checkbox1"
            @input="log"
          />
          <BFormLabel for="checkbox1">Checkbox 1</BFormLabel>
        </BFormItem>
      </BFormItem>
      <BFormItem>
        <BFormItem>
          <input
            type="checkbox"
            value="checkbox2"
            id="checkbox2"
            @input="log"
          />
          <BFormLabel for="checkbox2">Checkbox 2</BFormLabel>
        </BFormItem>
      </BFormItem>
      <BFormItem>
        <BFormItem>
          <input
            type="checkbox"
            value="checkbox3"
            id="checkbox3"
            @input="log"
          />
          <BFormLabel for="checkbox3">Checkbox 3</BFormLabel>
        </BFormItem>
      </BFormItem>
    </BFormFieldset>

    <BFormFieldset>
      <BFormLegend>Radio</BFormLegend>
      <BFormItem>
        <input type="radio" value="radio1" id="radio1" @input="log" />
        <BFormLabel for="radio1">Radio 1</BFormLabel>
      </BFormItem>
      <BFormItem>
        <input type="radio" value="radio2" id="radio2" @input="log" />
        <BFormLabel for="radio2">Radio 2</BFormLabel>
      </BFormItem>
    </BFormFieldset>

    <BFormGroup>
      <BFormItem>
        <BFormLabel for="password">Password</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormInput type="password" id="password" @input="log" />
      </BFormItem>
    </BFormGroup>

    <BFormGroup>
      <BFormItem>
        <BFormLabel for="file">File</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormInput type="file" id="file" @input="log" />
      </BFormItem>
    </BFormGroup>

    <BFormGroup>
      <BFormItem>
        <BFormLabel for="email">Email</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormInput type="email" id="email" @input="log" />
      </BFormItem>
    </BFormGroup>

    <BFormGroup>
      <BFormItem>
        <BFormLabel for="url">URL</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormInput type="url" id="url" @input="log" />
      </BFormItem>
    </BFormGroup>

    <BFormGroup>
      <BFormItem>
        <BFormLabel for="tel">Phone</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormInput type="tel" id="tel" @input="log" />
      </BFormItem>
    </BFormGroup>

    <BFormGroup>
      <BFormItem>
        <BFormLabel for="number">Number</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormInput
          type="number"
          value="5"
          step="1"
          min="0"
          max="10"
          id="number"
          @input="log"
        />
      </BFormItem>
    </BFormGroup>

    <BFormGroup>
      <BFormItem>
        <BFormLabel for="search">Search</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormInput type="search" id="search" @input="log" />
      </BFormItem>
    </BFormGroup>

    <BFormGroup>
      <BFormItem>
        <BFormLabel for="date">Date</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormInput type="date" id="date" @input="log" />
      </BFormItem>
    </BFormGroup>

    <BFormGroup>
      <BFormItem>
        <BFormLabel for="time">Time</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormInput type="time" id="time" @input="log" />
      </BFormItem>
    </BFormGroup>

    <BFormGroup buttons>
      <BFormItem>
        <BButton design="primary">Save</BButton>
      </BFormItem>
    </BFormGroup>
  </BForm>
</template>
