<template>
  <button class="btn" :class="props.modifyStyle" :disabled="props.disabled">
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
</style>
