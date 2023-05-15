<template>
    <div class="container">
        <h1 class="service__title">Сервис поиска и бронирования отелей</h1>
        <SwiperSlider
            :slides="[{id: 0, img: 'bg_4.jpg'}, {id: 1, img: 'bg_5.jpg'}, {id: 2, img: 'bg_1.jpg'}]"
                       
        />
    </div>
    <Service />
    
</template>
<style scoped>
</style>
<script setup>
import { onBeforeMount, onMounted, computed } from 'vue';
import { SwiperSlider, Service } from '@/components/widgets'

</script>
<style scoped>
.service__title {
    margin-top: 50px;
    text-align: center;
}
</style>