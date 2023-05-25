<template>
  <div class="select-wrap">
    <p :id="props.id" @click="optionsVisible = !optionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="optionsVisible">
      <p class="options-item" v-for="el in props.options" :key="el" @click="selectOptions(el)">
        {{ el }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, defineEmits } from "vue";

const optionsVisible = ref(false);
const selected = ref(props.selected);

const props = defineProps({
  id: String,
  options: {
    type: Array,
    default: () => [],
  },
  selected: String,
  title: String,
});
const emits = defineEmits(["update:select"]);
function selectOptions(option) {
  selected.value = option;
  optionsVisible.value = false;

  emits("update:select", selected.value);
}
onMounted(() => {
  window.addEventListener("click", (event) => {
    if (!event.target.closest(".select-wrap")) optionsVisible.value = false;
  });
});
</script>

<style scoped>
.select-wrap {
  position: relative;
  cursor: pointer;
}
.select-wrap p {
  padding-top: 5px;
}
.options {
  z-index: 20;
  border: 2px solid black;
  position: absolute;
  width: 100%;
  background-color: white;
  top: 52px;
  right: 0;
  cursor: pointer;
  text-align: left;
}
.options p:hover {
  background: var(--blue);
  color: var(--light);
}
.options-item {
  padding: 4px 0px 4px 20px;
  margin: 0;
}
</style>
