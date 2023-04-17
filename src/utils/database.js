import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, onSnapshot } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { firebaseConfig } from '../firebase.js';
import { useHotelsStore } from '@/stores/hotelsStore.js';

class DatabaseService {
    
    constructor() {
        this.fireBaseApp = initializeApp(firebaseConfig);
        this.db = getFirestore(this.fireBaseApp);
        this.storage = getStorage();
    }
    
    getSavedHotels() {
        //--------Get list hotels in Real Time--------------
        const fbHotels = [];
        onSnapshot(collection(this.db, 'hotels'), (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                fbHotels.push(doc.data());
                
            });
        });
        // return fbHotels;
        return new Promise ((resolve) => {
            resolve(fbHotels);
        })
        //--------------------------------------------------
    }
    
    async getFirebaseStorage (data) {// метод для получения URL из Firebase Storage
        await getDownloadURL(ref(this.storage, `${data}`))
            .then((url) => {
                console.log(url)
                return url
            })
            .catch((error) => {
                console.log(error)
            });    
    }
}

const data = new DatabaseService();
export {data}
