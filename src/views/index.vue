<template>
    <div class="container">
        <h1 class="service__title">Сервис поиска и бронирования отелей</h1>
        <SwiperSlider
            :slides="slides"                       
        />
    </div>
    <Service />
    
</template>
<style scoped>
</style>
<script setup>
import { SwiperSlider, Service } from '@/components/widgets';
import { slides } from '@/config/slidesHomePageConfig.js';

</script>
<style scoped>
.service__title {
    margin-top: 50px;
    text-align: center;
}
</style>