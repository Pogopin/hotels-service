<template>
    <div class="col-md-4">
    <div class="destination">      
      <router-link :to="{name: 'info', params: {id: props.hotelData.id}}"
         @click="searchById"
      >
        <img class="img img-2" :src="props.hotelData.fullPath">
        <div
          class="icon d-flex justify-content-center align-items-center pos-center">
          <span class="icon-search2"></span>
        </div>                     
      </router-link>
      
      <div class="text p-3">
        <div class="d-flex">
          <div class="one">
            <h3>{{props.hotelData.name}}, {{props.hotelData.country}}</h3>
            <p class="rate">
              <i class="icon-star"></i>
              <i class="icon-star"></i>
              <i class="icon-star"></i>
              <i class="icon-star"></i>
              <i class="icon-star-o"></i>
              <span>{{props.hotelData.rating}}</span>
            </p>
          </div>
          <div class="two">
            <span class="price per-price">{{props.hotelData.price}}<br /><small>/night</small></span>
          </div>
        </div>
        <p>{{props.hotelData.distance}}</p>
        <hr />
        <p class="bottom-area">
          <span class="book-now">Book Now</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, onMounted} from 'vue';
import { useHotelsStore } from '@/stores/hotelsStore.js';
const hotelsStore = useHotelsStore();

const props = defineProps({
    hotelData: Object,
})
function getImageUrl (name) {
    return new URL('@/assets/images/' + name, import.meta.url).href
}

function searchById() {
  console.log(props.hotelData.id)
  hotelsStore.fetchHotelById(props.hotelData.id);
}
</script>
<style scoped>
.pos-center {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 120%);
}
.book-now {
  display: block;
  text-align: center;
}
</style>
