import { defineStore } from 'pinia';

const id = 'hotels-store';

export const useHotelsStore = defineStore(id, {
  state: () => {
    return {
      hotelsList: []
    }
  },
  getters: {
    getHotelsData: (state) => state.hotelsList
  },
  actions: {
    
  }
})
