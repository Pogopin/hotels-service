<template>
  <div class="range-slider">
    <span>
      <input
        type="number"
        :min="props.minValue"
        :max="props.maxValue"
        v-model="minPrice"
        @input="setRangeSlider"
      />
      -
      <input
        type="number"
        :min="props.minValue"
        :max="props.maxValue"
        v-model="maxPrice"
        @input="setRangeSlider"
      />
    </span>

    <input
      :min="props.minValue"
      :max="props.maxValue"
      :step="props.step"
      :type="props.type"
      v-model.number="minPrice"
      @change="setRangeSlider"
    />
    <input
      :min="props.minValue"
      :max="props.maxValue"
      :step="props.step"
      :type="props.type"
      v-model.number="maxPrice"
      @change="setRangeSlider"
    />
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from "vue";
const emits = defineEmits(["update:priceRange"]);

const minPrice = ref(props.minValue);
const maxPrice = ref(props.maxValue);

function setRangeSlider() {
  if (minPrice.value > maxPrice.value) {
    let temp = maxPrice.value;
    maxPrice.value = minPrice.value;
    minPrice.value = temp;
  }
  emits("update:priceRange", minPrice.value, maxPrice.value);
}
const props = defineProps({
  minValue: {
    default: 0,
    require: true,
    type: Number,
  },
  maxValue: {
    default: 120000,
    require: true,
    type: Number,
  },
  step: Number,
  type: {
    type: String,
    default: "range",
  },
});
</script>
<style scoped></style>
