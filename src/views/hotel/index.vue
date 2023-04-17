<template>
  <section class="ftco-section ftco-degree-bg">
    <div class="container">
      <div class="row">
        <Sidebar
        />
        <div class="col-lg-9">
          <div class="row">
            <HotelsList
              :hotelsList="hotels"
            />
          </div>
          {{hotels}}

          <!-- <div class="row mt-5">
		          <div class="col text-center">
		            <div class="block-27">
		              <ul>
		                <li><a href="#">&lt;</a></li>
		                <li class="active"><span>1</span></li>
		                <li><a href="#">2</a></li>
		                <li><a href="#">3</a></li>
		                <li><a href="#">4</a></li>
		                <li><a href="#">5</a></li>
		                <li><a href="#">&gt;</a></li>
		              </ul>
		            </div>
		          </div>
		    </div> -->
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
</style>

<script setup>
import { onBeforeMount, onMounted, ref, computed } from 'vue';
import { HotelsList, Sidebar } from '@/components/widgets';
import { useHotelsStore } from '@/stores/hotelsStore.js';
// import { hotels } from '@/config/hotels.js';
import { data } from '@/utils/database.js';

const hotelsStore = useHotelsStore();
const hotels = computed(() => hotelsStore.getHotelsData);

onBeforeMount(() => {
  console.log('beforeMounted');
  hotelsStore.getHotels();
  
})
// onMounted(() => {
//   hotelsStore.getHotels();
// })


</script>
