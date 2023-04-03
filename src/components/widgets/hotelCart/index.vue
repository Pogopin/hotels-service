<template>
    <div class="col-md-4">
    <div class="destination">
      <a class="" href="#">
        <img class="img img-2" :src="getImageUrl(props.hotelData.img)" alt="image">
        <div class="icon d-flex justify-content-center align-items-center">
          <span class="icon-search2"></span>
        </div>
      </a>
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
        <p class="bottom-area d-flex">
          <span><i class="icon-map-o"></i> Miami, Fl</span>
          <span class="ml-auto"><a href="#">Book Now</a></span>
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
function getImageUrl (name) {
    return new URL('../../../assets/images/' + name, import.meta.url).href
}
</script>
