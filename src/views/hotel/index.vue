<template>
  <section class="ftco-section ftco-degree-bg">
    <div class="container">
      <div class="row">
        <Sidebar />
        <div class="col-lg-9">
          <div class="row">
            <HotelsList :hotelsList="hotels" />
          </div>

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
<style scoped></style>

<script setup>
import { onBeforeMount, computed } from "vue";
import { HotelsList, Sidebar } from "@/components/widgets";
import { useHotelsStore } from "@/stores/hotelsStore.js";

const hotelsStore = useHotelsStore();
onBeforeMount(async () => {
  console.log("beforeMounted");
  await hotelsStore.fetchHotels();
});
// const hotels = computed(() => hotelsStore.getHotelsData);
const hotels = computed(() => {
  if(hotelsStore.getFilteredHotels.length != 0) {
    return hotelsStore.getFilteredHotels;
  }
  else return hotelsStore.getHotelsData;
});
</script>
