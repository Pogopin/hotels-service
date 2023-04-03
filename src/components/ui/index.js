import { defineAsyncComponent } from 'vue'

const BaseButton = defineAsyncComponent(() => import('./BaseButton/index.vue'))
const BaseInput = defineAsyncComponent(() => import('./BaseInput/index.vue'))
const BaseSelect = defineAsyncComponent(() => import('./BaseSelect/index.vue'))
// const RadioButton = defineAsyncComponent(() => import('./RadioButton/index.vue'))
// const BaseCheckbox = defineAsyncComponent(() => import('./BaseCheckbox/index.vue'))

export {
  BaseInput, BaseButton, BaseSelect
}
