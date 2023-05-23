<template>    
    <swiper class="swiper-slider" 
        :modules="modules"
        :loop="true"
        :slides-per-view="1"
        :autoplay="{
            delay: 3000 
        }"
        :navigation="{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        }"
        @slideChange="($event) => activeSlide($event)"
    >
        <swiper-slide v-for="el in props.slides" :key="el.id"
        >
            <div>
                <img :src="getImageUrl(el.img)" alt="image">
            </div>
        </swiper-slide>
        <slot/>

        <div class="swiper-button-prev"
            v-show="props.isPrevArrowVisible"
        >
            <i class="fa fa-arrow-left arrow-size" aria-hidden="true"></i>
        </div>
        <div class="swiper-button-next"
            v-show="props.isNextArrowVisible"
        >
            <i class="fa fa-arrow-right arrow-size" aria-hidden="true"></i>
        </div>
        
    </swiper>
    
</template>
<script setup>
import { onMounted, defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation  } from 'swiper';
// import {  Navigation  } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

const modules = [Autoplay, Navigation ];
// const modules = [ Navigation ];
const props = defineProps({
    slides: Array,
    isPrevArrowVisible: Boolean,
    isNextArrowVisible: Boolean
})
function getImageUrl (name) {
    return new URL('../../../assets/images/' + name, import.meta.url).href;
}
function activeSlide(event) {
    // console.log(event.activeIndex)
}

</script>
<style scoped>
.arrow-size {
    font-size: 30px;
    color: white;
    opacity: .9;
}
.swiper-slider {
    margin-top: 50px;
    cursor: pointer;
    
}
.swiper-button-prev {
    position: absolute;
    top: 50%;
    z-index: 9;
    left: 20px;
}
.swiper-button-next {
    position: absolute;
    top: 50%;
    z-index: 9;
    right: 20px;
}
</style>
