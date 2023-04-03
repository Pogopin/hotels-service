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
