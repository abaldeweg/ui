<template>
  <article>
    <b-list
      :route="{ name: 'index' }"
      :bold="bold"
      :divider="divider"
      :image-size="imageSize"
      :image-position="imagePosition"
      :actions-position="actionsPosition"
      :reverse="reverse"
      :disabled="disabled"
      :active="active"
      :subgroup-indent="subgroupIndent"
    >
      <template #image v-if="image">
        <img src="@/assets/placeholder_1x1.jpg" alt="Icon" />
      </template>

      <template #title>
        text text text text text text text text text text
      </template>

      <template #options v-if="options">
        <b-icon type="kebab" />
      </template>

      <template #meta v-if="meta">
        <router-link :to="{ name: 'index' }">Meta</router-link> &bull; Meta
      </template>

      <template #subtitle v-if="subtitle">
        <router-link :to="{ name: 'index' }">Subtitle</router-link> &bull; Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text
      </template>

      <template #subgroup v-if="subgroup">
        <b-list
          :route="{ name: 'index' }"
          :bold="bold"
          :divider="divider"
          :image-size="imageSize"
          :reverse="reverse"
          :disabled="disabled"
          :active="active"
          :subgroup-indent="subgroupIndent"
        >
          <template #title>Subgroup</template>
        </b-list>
      </template>
    </b-list>

    <b-divider />

    <!-- bold -->
    <b-form-group>
      <b-form-item>
        <input type="checkbox" id="bold" v-model="bold" />
        <b-form-label for="bold">Bold</b-form-label>
      </b-form-item>
    </b-form-group>

    <!-- divider -->
    <b-form-group>
      <b-form-item>
        <input type="checkbox" id="divider" v-model="divider" />
        <b-form-label for="divider">Divider</b-form-label>
      </b-form-item>
    </b-form-group>

    <!-- meta -->
    <b-form-group>
      <b-form-item>
        <input type="checkbox" id="meta" v-model="meta" />
        <b-form-label for="meta">Meta</b-form-label>
      </b-form-item>
    </b-form-group>

    <!-- subtitle -->
    <b-form-group>
      <b-form-item>
        <input type="checkbox" id="subtitle" v-model="subtitle" />
        <b-form-label for="subtitle">Subtitle</b-form-label>
      </b-form-item>
    </b-form-group>

    <!-- options -->
    <b-form-group>
      <b-form-item>
        <input type="checkbox" id="options" v-model="options" />
        <b-form-label for="options">Options</b-form-label>
      </b-form-item>
    </b-form-group>

    <!-- image -->
    <b-form-group>
      <b-form-item>
        <input type="checkbox" id="image" v-model="image" />
        <b-form-label for="image">Image</b-form-label>
      </b-form-item>
    </b-form-group>

    <!-- image size -->
    <b-form-group>
      <b-form-item>
        <b-form-label for="image-size">Image Size</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-select
          id="image-size"
          v-model="imageSize"
          :items="[
            { key: 'xs', value: 'xs' },
            { key: 's', value: 's' },
            { key: 'm', value: 'm' },
            { key: 'l', value: 'l' },
            { key: 'xl', value: 'xl' },
          ]"
        />
      </b-form-item>
    </b-form-group>

    <!-- image position -->
    <b-form-group>
      <b-form-item>
        <b-form-label for="image-position">Image Position</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-select
          id="image-position"
          v-model="imagePosition"
          :items="[
            { key: 'start', value: 'start' },
            { key: 'center', value: 'center' },
            { key: 'end', value: 'end' },
          ]"
        />
      </b-form-item>
    </b-form-group>

    <!-- actions position -->
    <b-form-group>
      <b-form-item>
        <b-form-label for="actions-position">Actions Position</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-select
          id="actions-position"
          v-model="actionsPosition"
          :items="[
            { key: 'start', value: 'start' },
            { key: 'center', value: 'center' },
            { key: 'end', value: 'end' },
          ]"
        />
      </b-form-item>
    </b-form-group>

    <!-- reverse -->
    <b-form-group>
      <b-form-item>
        <input type="checkbox" id="reverse" v-model="reverse" />
        <b-form-label for="reverse">Reverse</b-form-label>
      </b-form-item>
    </b-form-group>

    <!-- disabled -->
    <b-form-group>
      <b-form-item>
        <input type="checkbox" id="disabled" v-model="disabled" />
        <b-form-label for="disabled">Disabled</b-form-label>
      </b-form-item>
    </b-form-group>

    <!-- active -->
    <b-form-group>
      <b-form-item>
        <input type="checkbox" id="active" v-model="active" />
        <b-form-label for="active">Active</b-form-label>
      </b-form-item>
    </b-form-group>

    <!-- subgroup -->
    <b-form-group>
      <b-form-item>
        <input type="checkbox" id="subgroup" v-model="subgroup" />
        <b-form-label for="subgroup">Activate Subgroup</b-form-label>
      </b-form-item>
    </b-form-group>

    <!-- subgroup indent -->
    <b-form-group>
      <b-form-item>
        <b-form-label for="subgroup-indent">Subgroup Indent</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input
          type="text"
          id="subgroup-indent"
          v-model="subgroupIndent"
        />
      </b-form-item>
    </b-form-group>
  </article>
</template>

<script>
import BList from '../components/BList/BList.vue'
import BIcon from '../components/BIcon/BIcon.vue'
import { ref } from 'vue'

export default {
  name: 'b-list-view',
  components: {
    BList,
    BIcon,
  },
  setup() {
    const bold = ref(false)
    const divider = ref(false)
    const meta = ref(false)
    const subtitle = ref(true)
    const options = ref(true)
    const image = ref(true)
    const imageSize = ref('m')
    const imagePosition = ref('center')
    const actionsPosition = ref('center')
    const reverse = ref(false)
    const disabled = ref(false)
    const active = ref(false)
    const subgroup = ref(true)
    const subgroupIndent = ref('20px')

    return {
      bold,
      divider,
      meta,
      subtitle,
      options,
      image,
      imageSize,
      imagePosition,
      actionsPosition,
      reverse,
      disabled,
      active,
      subgroup,
      subgroupIndent,
    }
  },
}
</script>
