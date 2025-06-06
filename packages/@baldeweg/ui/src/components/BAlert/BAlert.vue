<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    validator: (value) =>  ['neutral', 'info', 'danger', 'warning', 'success'].includes(value),
    default: 'neutral',
  },
  closable: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    validator: (value) => ['block', 'top', 'bottom', 'left', 'right'].includes(value),
    default: 'block',
  },
})

const showAlert = ref(false)
const alertClass = computed(() => {
  return {
    alert_neutral: props.type === 'neutral',
    alert_info: props.type === 'info',
    alert_danger: props.type === 'danger',
    alert_warning: props.type === 'warning',
    alert_success: props.type === 'success',
    alert_block: props.position === 'block',
    alert_top: props.position === 'top' ,
    alert_bottom: props.position === 'bottom' ,
    alert_topleft: props.position === 'topleft' ,
    alert_topright: props.position === 'topright' ,
    alert_bottomleft: props.position === 'bottomleft',
    alert_bottomright: props.position === 'bottomright',
  }
})
</script>

<template>
  <div class="alert" :class="alertClass" v-if="!showAlert">
    <BMaterialIcon :size="28" @click="showAlert = true" hover :style="{ float: 'right' }" v-if="closable">close
    </BMaterialIcon>
    <slot />
  </div>
</template>

<style>
.alert {
  border-radius: 20px;
  border: 2px solid var(--color-neutral-08);
  background: var(--color-neutral-00);
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
}

/* Type */
.alert_neutral {
  border: 2px solid var(--color-neutral-08);
}
.alert_info {
  border: 2px solid var(--color-accent-blue-10);
}
.alert_danger {
  border: 2px solid var(--color-accent-red-10);
}
.alert_warning {
  border: 2px solid var(--color-accent-yellow-10);
}
.alert_success {
  border: 2px solid var(--color-accent-green-10);
}

/* Position */
.alert_block {
}
.alert_top,
.alert_bottom,
.alert_topleft,
.alert_topright,
.alert_bottomleft,
.alert_bottomright {
   position: fixed;
   border-radius: 20px;
   width: 400px;
   z-index: 2;
}
.alert_top {
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.alert_bottom {
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.alert_topleft {
  top: 0;
  left: 0;
  margin: 0;
}
.alert_topright {
  top: 0;
  right: 0;
  margin: 0;
}
.alert_bottomleft {
  bottom: 0;
  left: 0;
  margin: 0;
}
.alert_bottomright {
  bottom: 0;
  right: 0;
  margin: 0;
}
</style>
