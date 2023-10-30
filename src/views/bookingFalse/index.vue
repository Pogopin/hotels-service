<template>
  <div class="admin__header"></div>
  <div class="container">
    <div class="search-hotels">
      <h1>Данный функционал еще в разработке, можно только разбронировать все сразу</h1>
      <BaseButton
        class="adm-btn"
        text="Начать поиск забронированных отелей"
        modifyStyle="btn-primary"
        @click.prevent="searchHotels"
      />
    </div>
    <ul class="hotels__list" v-if="bookingHotels">
      <li class="hotels__list-item hotel"
        v-for="(el, index) in bookingHotels" :key="el.name"
      >Отель:  {{el.name}}
        <p class="hotel-number"><span>Номер: {{el.number}} : Заезд: {{el.dateFrom}} : Выезд: {{}}</span>
          <button @click.prevent="unbook(el.id, index)" class="unbook-btn">Разбронировать</button>
        </p>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { BaseButton } from "@/components/ui";
import { computed, onBeforeMount, ref } from 'vue';
import { useHotelsStore } from "../../stores/hotelsStore.js";
import { data } from "@/utils/database.js";

const hotelsStore = useHotelsStore();
const hotels = computed(()=> {
  return hotelsStore.getHotelsData;
})
const bookingHotels = ref([]);
const newUpdateArrayHotels = ref([]);//обновленный массив отелей, у которых разбронировали номера

function searchHotels() {
  hotels.value.forEach((hotel) => {
    hotel.numbers.forEach(el => {
      if(el.booking) {
        // console.log(hotel)
        bookingHotels.value.push({name: hotel.name, number: el.name, dateFrom: el.dateFrom, dateTo: el.dateTo, id: hotel.id})
        el.booking = false;
        el.dateFrom = '';
        el.dateTo = '';
        newUpdateArrayHotels.value.push(hotel);
      }
    });
  })
}
async function unbook(idValue, indexValue) {
  // console.log('unbook');
  // console.log(newUpdateArrayHotels.value[indexValue].numbers);
  await data.setNumberBookingDate(idValue, newUpdateArrayHotels.value[indexValue].numbers); //разбронировать
  alert('Номер успешно разбронирован');
}
onBeforeMount(async ()=> {
  console.log("beforeMounted");
  await hotelsStore.fetchHotels();
})
</script>
<style scoped>

.admin__header {
  background-color: var(--gray);
  height: 100px;
  margin-bottom: 20px;
}
.search-hotels {
  text-align: center;
  margin-bottom: 50px;
}
.adm-btn {
  border-radius: 0 ;
}
.hotels__list-item {
  font-size: 16px;
}
.hotel-number {
  font-size: 14px;
  display: flex;
  justify-content: space-between;

}
.hotel-number span {
  color: green;
}
.unbook-btn {
  display: inline-block;
  cursor: pointer;
  background-color: rgb(250, 198, 198);
}
</style>
