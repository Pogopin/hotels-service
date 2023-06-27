<template>
  <input :type="props.type" :placeholder="props.placeholder" :id="props.id" :name="props.name" v-model="val" />

</template>
<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  id: String,
  type: {
    type: String,
    default: "text",
  },
  error: {
    type: Array,
    required: false
  },
  placeholder: String,
});
const emits = defineEmits(["update:value"]);
const val = computed({
  get() {
    return "";
  },
  set(value) {
    emits("update:value", value);
  },
});
</script>
