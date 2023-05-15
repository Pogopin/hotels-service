<template>
    <div class="col-md-4">
    <div class="destination">
<<<<<<< HEAD
      <a class="" href="#">
        <img class="img img-2" :src="props.hotelData.fullPath">
        <div class="icon d-flex justify-content-center align-items-center">
=======
      <router-link :to="{name: 'info', params: {id: props.hotelData.id}}">
        <img class="img img-2" :src="props.hotelData.fullPath">
        <div class="icon d-flex justify-content-center align-items-center pos-center">
>>>>>>> feature/firebase
          <span class="icon-search2"></span>
        </div>
                     
      </router-link>
             
      <div class="text p-3">
        <div class="d-flex">
          <div class="one">
            <h3><a href="hotel-single.html">{{props.hotelData.name}}, {{props.hotelData.country}}</a></h3>
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
          <span class="book-now"><a href="#">Book Now</a></span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    hotelData: Object,
})
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
