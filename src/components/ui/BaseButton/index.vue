<template>
  <button class="btn" :class="[props.modifyStyle, {'no-hover': props.disabled}]" :disabled="props.disabled" >
    {{ props.text }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: String,
  modifyStyle: String,
  disabled: Boolean
});
</script>
<style scoped>
.booking-button {
  background-color: #105de4;
  color: #fff;
}
.booking-button:hover {
  background-color: #0d3b8a;
}
.no-hover {
  pointer-events: none;
}
</style>
