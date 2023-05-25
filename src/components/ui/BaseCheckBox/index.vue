<template>
  <div class="form-check">
    <input
      class="form-check-input"
      :type="props.type"
      :id="props.id"
      :name="props.name"
      v-model="val"
    />
    <label class="form-check-label" for="exampleCheck1">
      <slot />
    </label>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "checkbox",
    require: true,
  },
  id: String,
  checked: {
    type: Boolean,
    default: false,
  },
  value: String,
});
const emits = defineEmits(["checked:value"]);
const val = computed({
  get() {
    return "";
  },
  set(value) {
    emits("checked:value", value);
  },
});
</script>
