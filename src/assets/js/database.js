import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore';

import { firebaseConfig } from '../../firebase.js'

class DatabaseService {
    constructor() {
        this.fireBaseApp = initializeApp(firebaseConfig);
        this.db = getFirestore(this.fireBaseApp)
    }
    
    async getSavedHotels() {
        const querySnapshot = await getDocs(collection(this.db, 'hotels'));
        querySnapshot.forEach((doc) => {
        
        console.log(doc.id, " => ", doc.data());
        });
    }
}
const data = new DatabaseService();
export {data}
