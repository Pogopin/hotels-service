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
    getHotelsList: (state) => state.hotelsList,
  },
  actions: {
    async fetchHotels() {
      await data.fetchDataRealTime()
    },
    async addHotelsInState (data) {
      this.hotelsList = data
      await this.convertImageUrl()
    },
    async convertImageUrl () {
      this.hotelsList = await Promise.all([ ...this.hotelsList].map(async hotel => {
        return { ...hotel, fullPath: await data.getImageFromStorage(hotel.img) };
      }))
    },
  }
})
