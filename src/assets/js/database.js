import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, onSnapshot } from 'firebase/firestore';

import { firebaseConfig } from '../../firebase.js';
import { ref } from 'vue';

const hotelInfo = ref({
    id: '',
    name: '',
    price: 0,
    booking: false
});
const hotelsList = ref([]);

class DatabaseService {
    constructor() {
        this.fireBaseApp = initializeApp(firebaseConfig);
        this.db = getFirestore(this.fireBaseApp);
    }
    
    async getSavedHotels() {
        //--------Get list hotels in Real Time--------------
        onSnapshot(collection(this.db, 'hotels'), (querySnapshot) => {
            const fbHotels = [];
            querySnapshot.forEach((doc) => {
                hotelInfo.value.id = doc.id;
                hotelInfo.value.name = doc.data().name;
                hotelInfo.value.booking = doc.data().booking;
                
                fbHotels.push(hotelInfo.value);
                console.log(doc.data())
            });
            hotelsList.value = fbHotels;
            // console.log(hotelsList.value);
          });
        //--------------------------------------------------
    }
}
const data = new DatabaseService();
export {data}
