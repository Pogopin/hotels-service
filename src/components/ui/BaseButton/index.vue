<template>
    <button
        class="btn"
        :class="props.modifyStyle"
    >
    {{props.text}}
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    text: String,
    modifyStyle: String
})

</script>
<style scoped>
.booking-button {
    background-color: #105de4;
    color: #FFF;
}
.booking-button:hover {
    background-color: #0d3b8a;
}
</style>
