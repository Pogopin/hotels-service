import { initializeApp } from 'firebase/app'
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { firebaseConfig } from '../firebase.js';
import { useHotelsStore } from '@/stores/hotelsStore.js';

class DatabaseService {
    
  constructor() {
    this.fireBaseApp = initializeApp(firebaseConfig);
    this.db = getFirestore(this.fireBaseApp);
    this.storage = getStorage();
  }

  async fetchDataRealTime () { // метод для получения данных в real time
    onSnapshot(collection(this.db, 'hotels'), (querySnapshot) => {
      let hotelsArray = []
      querySnapshot.forEach(async (doc) => {
          let hotel = { id: doc.id, ...doc.data()}
          hotelsArray.push(hotel)
      });

      const hotelsStore = useHotelsStore()

      hotelsStore.addHotelsInState(hotelsArray)
    });
  }
    
  async getImageFromStorage (data) { // метод для получения URL из Firebase Storage
    return await getDownloadURL(ref(this.storage, `${data}`))
      .then((fullPath) => {
        return fullPath
      })
      .catch((error) => {
        console.log('get - image - from - storage', error)
      });    
  }
}

const data = new DatabaseService();
export { data }
