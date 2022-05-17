<script setup>
import { ref } from 'vue'

defineProps({
  route: Object,
  bold: Boolean,
  divider: Boolean,
  imageSize: {
    type: String,
    validator(value) {
      return ['xs', 's', 'm', 'l', 'xl'].includes(value)
    },
  },
  imagePosition: {
    type: String,
    validator(value) {
      return ['start', 'center', 'end'].includes(value)
    },
  },
  actionsPosition: {
    type: String,
    validator(value) {
      return ['start', 'center', 'end'].includes(value)
    },
  },
  reverse: Boolean,
  disabled: Boolean,
  active: Boolean,
  subgroupIndent: {
    type: String,
    default: '20px',
  },
})

const showSubgroup = ref(false)
</script>

<template>
  <div
    class="list"
    :class="{
      hasDivider: divider,
      isReverse: reverse,
      isDisabled: disabled,
      isActive: active,
    }"
  >
    <div class="list_container">
      <div
        class="list_image"
        :class="{
          list_image_xs: imageSize === 'xs',
          list_image_s: imageSize === 's',
          list_image_m: imageSize === 'm',
          list_image_l: imageSize === 'l',
          list_image_xl: imageSize === 'xl',

          list_image_start: imagePosition === 'start',
          list_image_end: imagePosition === 'end',
        }"
        v-if="$slots.image"
      >
        <RouterLink :to="route" v-if="route">
          <slot name="image" />
        </RouterLink>
        <slot name="image" v-else />
      </div>

      <div class="list_body">
        <h3 class="list_title" :class="{ isBold: bold }">
          <RouterLink :to="route" v-if="route">
            <slot name="title" />
          </RouterLink>
          <slot name="title" v-else />
        </h3>

        <div class="list_subtitle" v-if="$slots.meta">
          <slot name="meta" />
        </div>

        <div class="list_subtitle" v-if="$slots.subtitle">
          <slot name="subtitle" />
        </div>
      </div>

      <div
        class="list_action"
        :class="{
          list_action_start: actionsPosition === 'start',
          list_action_end: actionsPosition === 'end',
        }"
        v-if="$slots.subgroup"
      >
        <span @click="showSubgroup = true">
          <BIcon type="plus" v-if="!showSubgroup" />
        </span>
        <span @click="showSubgroup = false">
          <BIcon type="minus" v-if="showSubgroup" />
        </span>
      </div>

      <div
        class="list_action"
        :class="{
          list_action_start: actionsPosition === 'start',
          list_action_end: actionsPosition === 'end',
        }"
        v-if="$slots.options"
      >
        <slot name="options" />
      </div>
    </div>

    <div
      class="list_subgroup"
      :style="{ marginLeft: subgroupIndent }"
      v-if="$slots.subgroup && showSubgroup"
    >
      <slot name="subgroup" />
    </div>
  </div>
</template>

<style scoped>
.list {
  clear: both;
}
.list_container {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.isReverse .list_container {
  flex-direction: row-reverse;
}
.list.hasDivider {
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-neutral-02);
}
.list_image {
  margin-right: 20px;
  margin-left: 0;
  line-height: 0;
  flex-shrink: 0;
}
.isReverse .list_image {
  margin-right: 0;
  margin-left: 20px;
}
.list_image_xs {
  width: 25px;
}
.list_image_s {
  width: 50px;
}
.list_image_m {
  width: 100px;
}
.list_image_l {
  width: 150px;
}
.list_image_xl {
  width: 200px;
}
.list_image_start {
  align-self: start;
}
.list_image_end {
  align-self: end;
}
.list_body {
  flex-grow: 1;
}
.list_title {
  font-family: var(--font-sans);
  font-size: 1.2em;
  font-weight: normal;
  cursor: pointer;
  margin: 0;
}
.list_title.isBold {
  font-weight: bold;
}
.list_title,
.list_title a {
  color: var(--color-neutral-10);
}
.isActive .list_title,
.isActive .list_title a {
  color: var(--color-primary-10);
}
.list_title:hover,
.list_title a:hover {
  color: var(--color-neutral-06);
}
.isActive .list_title:hover,
.isActive .list_title a:hover {
  color: var(--color-primary-05);
}
.isDisabled .list_title:hover,
.isDisabled .list_title a:hover {
  color: var(--color-neutral-10);
}
.isDisabled.isActive .list_title:hover,
.isDisabled.isActive .list_title a:hover {
  color: var(--color-primary-10);
}
.list_subtitle,
.list_subtitle a {
  color: var(--color-neutral-06);
}
.list_subtitle a:hover {
  text-decoration: underline;
}
.list_action {
  padding-right: 0;
  padding-left: 20px;
  cursor: pointer;
}
.isReverse .list_action {
  padding-right: 20px;
  padding-left: 0;
}
.list_action_start {
  align-self: start;
}
.list_action_end {
  align-self: end;
}
</style>
