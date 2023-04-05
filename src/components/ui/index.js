import { defineAsyncComponent } from 'vue'

const BaseButton = defineAsyncComponent(() => import('./BaseButton/index.vue'))
const BaseInput = defineAsyncComponent(() => import('./BaseInput/index.vue'))
const BaseSelect = defineAsyncComponent(() => import('./BaseSelect/index.vue'))
const BaseCheckBox = defineAsyncComponent(() => import('./BaseCheckBox/index.vue'))
const RangeSlider = defineAsyncComponent(() => import('./RangeSlider/index.vue'))
// const RadioButton = defineAsyncComponent(() => import('./RadioButton/index.vue'))


export {
  BaseInput, BaseButton, BaseSelect, BaseCheckBox, RangeSlider
}
