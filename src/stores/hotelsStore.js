import { defineStore } from "pinia";
import { data } from "@/utils/database.js";

const id = "hotels-store";

export const useHotelsStore = defineStore(id, {
  state: () => {
    return {
      hotelsList: [],
      hotelInfo: {},
      filteredHotels: [],
    };
  },
  getters: {
    getHotelsData: (state) => state.hotelsList,
    getHotelInfo: (state) => state.hotelInfo,
    getFilteredHotels: (state) => state.filteredHotels,
  },
  actions: {
    async fetchHotels() {
      // получение данных из firebase для всех отелей
      await data.fetchDataRealTime();
    },
    async addHotelsInState(data) {
      this.hotelsList = data;
      await this.convertImageUrl();
    },
    async convertImageUrl() {
      this.hotelsList = await Promise.all(
        [...this.hotelsList].map(async (hotel) => {
          hotel.fullPath = await data.getImageFromStorage(hotel.img);
          hotel.numbers.map((number) => {
            number.img.map(async (item) => {
              item.photoImgUrl = await data.getImageFromStorage(item.photo);
            });
          });
          return hotel;
        })
      );
    },
    async fetchHotelById(idValue) {
      // получение данных из firebase для одного отеля
      await data.getHotelDataById(idValue);
    },
    async addHotelInfoInState(hotel) {
      this.hotelInfo = hotel;
      await this.setImageUrl();
    },
    async setImageUrl() {
      await Promise.all(
        (this.hotelInfo.fullPath = await data.getImageFromStorage(this.hotelInfo.img)),
        this.hotelInfo.numbers.map((number) => {
          number.img.map(async (item) => {
            item.photoImgUrl = await data.getImageFromStorage(item.photo);
          });
        })
      );
    },
    async filterHotels(sortValues) {
      let tempHotels = [];

      if(sortValues.country) {
        this.filteredHotels = this.hotelsList.filter((hotel) => hotel.country === sortValues.country);
      };
      if(sortValues.city) {
        this.filteredHotels = this.hotelsList.filter((hotel) => hotel.city === sortValues.city);
        if(this.filteredHotels.length === 0) alert('В данном городе нет отелей!');
      }

      for(let el in sortValues.starRating) {//сортировка по звездам (stars)
        if(sortValues.starRating[el].checked === true) {//проверка какие звезды выбраны
          console.log(sortValues.starRating[el].num);
          if(sortValues.country) {//если страна заполнена сортируем по уже отфильтрованному массиву по стране учитывая звезды
            this.filteredHotels.forEach((hotel)=> {
              if(hotel.stars == sortValues.starRating[el].num) tempHotels.push(hotel);
            })
          }
          else//если страна не заполнена фильтруем все отели по звездам
          this.hotelsList.forEach((hotel)=> {
            if(hotel.stars == sortValues.starRating[el].num) tempHotels.push(hotel);
          })
        }
      }
      if(tempHotels.length != 0) this.filteredHotels = tempHotels;
      if(!sortValues.country && !sortValues.city && !tempHotels.length) alert('ничего не выбрано!');


    },
  },
});
