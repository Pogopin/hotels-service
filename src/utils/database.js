import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, onSnapshot } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { firebaseConfig } from '../firebase.js';
// import { hotelInfo } from '../constants.js';
import { useHotelsStore } from '@/stores/hotelsStore.js';

class DatabaseService {
    
    constructor() {
        this.fireBaseApp = initializeApp(firebaseConfig);
        this.db = getFirestore(this.fireBaseApp);
        this.storage = getStorage();
    }
    async getSavedHotels() {
        //--------Get list hotels in Real Time--------------
        onSnapshot(collection(this.db, 'hotels'), (querySnapshot) => {
            const hotelsStore = useHotelsStore();
            hotelsStore.hotelsList = []
            
            querySnapshot.forEach((doc) => {
                this.getFirebaseStorage(doc.data(), hotelsStore, doc.id)
            });
        });
        //--------------------------------------------------
    }
    async getFirebaseStorage (data, hotelsStore, id) {// метод для получения URL из Firebase Storage
        // const storage = getStorage();
        await getDownloadURL(ref(this.storage, `${data.img}`))
            .then((url) => {
                const hotelInfo = {
                        id: id,
                        name: data.name,
                        city: data.city,
                        country: data.country,
                        addres: data.addres,
                        distance: data.distance,
                        price: data.price,
                        rating: data.rating,
                        stars: data.stars,
                        img: url
                        
                        
                    };
                    hotelsStore.hotelsList.push(hotelInfo)
            })
            .catch((error) => {
                console.log(error)
            });    
    }

        // async getFirebaseStorage (dat) {
    //     const storage = getStorage();
    //     try {
    //         const resp = await getDownloadURL(ref(storage, `${dat}`))
    //         console.log(resp)
                        
    //         return resp
    //     }
    //     catch(error) {
    //         console.log('error:', error);
    //     }
    // }
}

const data = new DatabaseService();
export {data}
