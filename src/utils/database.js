import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, onSnapshot, query, where } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { firebaseConfig } from '../firebase.js';
import { useHotelsStore } from '@/stores/hotelsStore.js';

class DatabaseService {
    constructor() {
        this.fireBaseApp = initializeApp(firebaseConfig);
        this.db = getFirestore(this.fireBaseApp);
        this.storage = getStorage();
    }
    
    async getSavedHotels() {
        const querySnapshot = await getDocs(collection(this.db, 'hotels'));
        return querySnapshot.forEach((doc) => {
            let obj = {id: doc.id, ...doc.data()}

            const hotelStore = useHotelsStore();
            hotelStore.pushHotels(obj);
        })
        //--------------------------------------------------
    }
    async getFirebaseStorage (data) {// метод для получения URL из Firebase Storage
        return await getDownloadURL(ref(this.storage, `${data}`))
            .then((url) => {
                return url
            })
            .catch((error) => {
                console.log(error)
            });    
    }
}

const data = new DatabaseService();
export {data}
