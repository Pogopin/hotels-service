<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    :id="props.id"
    
  />
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: String,
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String,

})

</script>
