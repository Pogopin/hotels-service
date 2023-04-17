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
    async getHotels () {
      console.log('action');
      
      this.hotelsList = await data.getSavedHotels()
      console.log(this.hotelsList.length)
      
      const list = this.hotelsList.map(function(currentEl, i) {
        let copyEl = Object.assign({}, currentEl);
        copyEl.img = 'URL картинки';
        return copyEl;
      })
      console.log(list)

    },
    
  }
})
