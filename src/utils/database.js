import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, onSnapshot, query, where } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { firebaseConfig } from '../firebase.js';
import { useHotelsStore } from '@/stores/hotelsStore.js';
import { onBeforeMount } from 'vue';

class DatabaseService {
    
    constructor() {
        this.fireBaseApp = initializeApp(firebaseConfig);
        this.db = getFirestore(this.fireBaseApp);
        this.storage = getStorage();
    }
    
    async getSavedHotels() {
        const fbHotels = [];
        const q = query(collection(this.db, "hotels"));  
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let copyHotelData = Object.assign({}, doc.data());
            copyHotelData.id = doc.id;
            
            fbHotels.push(copyHotelData);
        
        });
        return fbHotels;
        //--------------------------------------------------
    }
    
    async getFirebaseStorage (data) {// метод для получения URL из Firebase Storage
        const st = useHotelsStore()
        await getDownloadURL(ref(this.storage, `${data}`))
            .then((url) => {
                // console.log(url)
                st.setImageUrl(url)
                // return url
            })
            .catch((error) => {
                console.log(error)
            });    
    }
}

const data = new DatabaseService();
export {data}
