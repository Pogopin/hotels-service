<template>
  <HotelCart
    v-for="el in props.hotelsList"
    :key="el.id"
    :hotelData="el"
  />
 
</template>

<script setup>
import { defineProps } from 'vue';
import { HotelCart } from '@/components/widgets';

const props = defineProps({
    hotelsList: Object
})
console.log(props.hotelsList)
</script>
