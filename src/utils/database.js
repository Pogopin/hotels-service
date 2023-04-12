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
        const hotelsStore = useHotelsStore();
        onSnapshot(collection(this.db, 'hotels'), (querySnapshot) => {
            const fbHotels = [];
            querySnapshot.forEach((doc) => {
                const hotelInfo = {
                    id: doc.id,
                    name: doc.data().name,
                    city: doc.data().city,
                    country: doc.data().country,
                    addres: doc.data().addres,
                    distance: doc.data().distance,
                    price: doc.data().price,
                    rating: doc.data().rating,
                    stars: doc.data().stars,
                    // img: 'url'
                    img: getDownloadURL(ref(this.storage, `${doc.data().img}`)).then((url) => {return url}).catch((error) => console.log(error))
                    
                };
                fbHotels.push(hotelInfo);
            });
            hotelsStore.hotelsList = fbHotels;
            console.log(fbHotels)
            // console.log(hotelsStore.hotelsList)
        });
        //--------------------------------------------------
    }
    async getFirebaseStorage (data) {// метод для получения URL из Firebase Storage
        // const storage = getStorage();
        await getDownloadURL(ref(this.storage, `${data.img}`))
            .then((url) => {
                console.log(url)
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
