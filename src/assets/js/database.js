import { initializeApp } from 'firebase/app'
import { Database, getDatabase, get, child, ref } from 'firebase/database'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from '../../firebase.js'

class DatabaseService {
    
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
    }
    
    async getSavedHotels() {
        const citiesCol = collection(this.db, 'hotels');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());

        console.log(cityList)
        return cityList;
    }
}

export const data = new DatabaseService();
