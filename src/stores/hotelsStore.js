import { defineStore } from "pinia";
import { data } from "@/utils/database.js";

const id = "hotels-store";

export const useHotelsStore = defineStore(id, {
  state: () => {
    return {
      hotelsList: [],
      hotelInfo: {},
      filteredHotels: []
    };
  },
  getters: {
    getHotelsData: (state) => state.hotelsList,
    getHotelInfo: (state) => state.hotelInfo,
    getFilteredHotels: (state) => state.filteredHotels
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
    addFilteredHotelinState(hotels) {
      this.filteredHotels = hotels;
    }
  },
});
