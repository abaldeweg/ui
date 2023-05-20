<script setup>
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
})
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
    <div class="container">
      <div
        class="image"
        :class="{
          size_image_xs: imageSize === 'xs',
          size_image_s: imageSize === 's',
          size_image_m: imageSize === 'm',
          size_image_l: imageSize === 'l',
          size_image_xl: imageSize === 'xl',

          position_image_start: imagePosition === 'start',
          position_image_end: imagePosition === 'end',
        }"
        v-if="$slots.image"
      >
        <RouterLink :to="route" v-if="route">
          <slot name="image" />
        </RouterLink>
        <slot name="image" v-else />
      </div>

      <div class="body">
        <h3 class="title" :class="{ isBold: bold }">
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
        class="action"
        :class="{
          position_action_start: actionsPosition === 'start',
          position_action_end: actionsPosition === 'end',
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
        class="action"
        :class="{
          position_action_start: actionsPosition === 'start',
          position_action_end: actionsPosition === 'end',
        }"
        v-if="$slots.options"
      >
        <slot name="options" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  clear: both;
}
.container {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.isReverse .container {
  flex-direction: row-reverse;
}
.list.hasDivider {
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-neutral-02);
}
.image {
  margin-right: 20px;
  margin-left: 0;
  line-height: 0;
  flex-shrink: 0;
}
.isReverse .image {
  margin-right: 0;
  margin-left: 20px;
}
.size_image_xs {
  width: 25px;
}
.size_image_s {
  width: 50px;
}
.size_image_m {
  width: 100px;
}
.size_image_l {
  width: 150px;
}
.size_image_xl {
  width: 200px;
}
.position_image_start {
  align-self: start;
}
.position_image_end {
  align-self: end;
}
.body {
  flex-grow: 1;
}
.title {
  font-family: var(--font-sans);
  font-size: 1.2rem;
  font-weight: normal;
  cursor: pointer;
  margin: 0;
}
.title.isBold {
  font-weight: bold;
}
.title,
.title a {
  color: var(--color-neutral-10);
}
.isActive .title,
.isActive .title a {
  color: var(--color-primary-10);
}
.title:hover,
.title a:hover {
  color: var(--color-neutral-06);
}
.isActive .title:hover,
.isActive .title a:hover {
  color: var(--color-primary-05);
}
.isDisabled .title:hover,
.isDisabled .title a:hover {
  color: var(--color-neutral-10);
}
.isDisabled.isActive .title:hover,
.isDisabled.isActive .title a:hover {
  color: var(--color-primary-10);
}
.list_subtitle,
.list_subtitle a {
  color: var(--color-neutral-06);
}
.list_subtitle a:hover {
  text-decoration: underline;
}
.action {
  padding-right: 0;
  padding-left: 20px;
  cursor: pointer;
}
.isReverse .action {
  padding-right: 20px;
  padding-left: 0;
}
.position_action_start {
  align-self: start;
}
.position_action_end {
  align-self: end;
}
</style>
