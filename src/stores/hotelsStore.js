import { defineStore } from 'pinia';
import { data } from '@/utils/database.js';

const id = 'hotels-store';

export const useHotelsStore = defineStore(id, {
  state: () => {
    return {
      hotelsList: [],
      
    }
  },
  getters: {
    getHotelsData: (state) => state.hotelsList
  },
  actions: {
    async fetchHotels() {
      this.hotelsList.length = 0;
      await data.getSavedHotels();
    },
    async pushHotels(hotel) {
      this.hotelsList.push(hotel);
      await this.setImageUrl();
    },
    async setImageUrl() {
      await Promise.all(this.hotelsList.map(async hotel => {
        hotel.fullPath = await data.getFirebaseStorage(hotel.img);
        hotel.numbers.map(number => {
          number.img.map(async item => {
            item.photoImgUrl = await data.getFirebaseStorage(item.photo);
          })
        })
        return hotel;
      }))
    },
  }
})
