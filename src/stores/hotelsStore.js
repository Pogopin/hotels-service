import { defineStore } from 'pinia';
import { data } from '@/utils/database.js';

const id = 'hotels-store';

export const useHotelsStore = defineStore(id, {
  state: () => {
    return {
      hotelsList: [],
      imagesUrlfromStorage: ''
    }
  },
  getters: {
    getHotelsData: (state) => state.hotelsList
  },
  actions: {
    setImageUrl(imageUrl) {
      this.imagesUrlfromStorage = imageUrl;
    },
    async getHotels () {
      console.log('action');
      const hotels = await data.getSavedHotels();

      this.hotelsList = await Promise.all(hotels.map(async (hotel) => {
        try {
          const img = await data.getFirebaseStorage(hotel.img);
          // console.log('image:', img) //почему-то undefined
          
          const imagesUrl = this.imagesUrlfromStorage;
          const updatedHotel = {...hotel, images: imagesUrl};
          // console.log(updatedHotel);
          return updatedHotel;

        } catch (error) {
          console.error(`Error updating hotels list`, error);
          return hotel;
        }
      }));
    },
    
  }
})
