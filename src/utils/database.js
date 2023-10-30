import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { firebaseConfig } from "../firebase.js";
import { useHotelsStore } from "@/stores/hotelsStore.js";
import axios from 'axios';
import router from "../router/index.js";

class DatabaseService {
  constructor() {
    this.fireBaseApp = initializeApp(firebaseConfig);
    this.db = getFirestore(this.fireBaseApp);
    this.storage = getStorage();
  }

  async fetchDataRealTime() {
    // метод для получения данных в real time
    onSnapshot(collection(this.db, "hotels"), (querySnapshot) => {
      let hotelsArray = [];
      querySnapshot.forEach(async (doc) => {
        let hotel = { id: doc.id, ...doc.data() };
        hotelsArray.push(hotel);
      });

      const hotelsStore = useHotelsStore();
      hotelsStore.addHotelsInState(hotelsArray);
    });
  }
  async getImageFromStorage(data) {
    // метод для получения URL из Firebase Storage
    return await getDownloadURL(ref(this.storage, `${data}`))
      .then((fullPath) => {
        return fullPath;
      })
      .catch((error) => {
        console.log("get - image - from - storage", error);
      });
  }
  async getHotelDataById(id) {
    const documentRef = doc(collection(this.db, "hotels"), id);

    onSnapshot(documentRef, (snapshot) => {
      let docData = snapshot.data();

      const hotelsStore = useHotelsStore();
      hotelsStore.addHotelInfoInState(docData);
      // console.log(docData)
    });
  }
  async setNumberBookingDate(id, updateNumbersArray) {
    const numberRef = doc(collection(this.db, "hotels"), id);
    try {
      await updateDoc(numberRef, {
        numbers: updateNumbersArray
      });
      console.log('Массив numbers успешно обновлен.');
    } catch (error) {
      console.error('Ошибка при обновлении массива numbers:', error);
    }
  }
  async sign(payload) {    //регистрация пользователя(нет в проекте)
    const apiKey = 'AIzaSyDKgeuOkCBDoSsZ_NiatpoPpgTU7tt5vCI';
    try {
      // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
      let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        ...payload,
        returnSecureToken: true
      });
      console.log(response.data);

      const user = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn
      }
      console.log(user)
      // const hotelsStore = useHotelsStore();
      // hotelsStore.addUserInfoinState(user);
    }
    catch(err) {
      console.log(err.response)
      switch (err.response.data.error.message) {
        case 'INVALID_EMAIL':
          alert('invalid email');
          break;
        case 'OPERATION_NOT_ALLOWED':
          alert('operation not allowed');
          break;
        default:
          alert('error');
          break;
      }
    }

  }
  async signIn(payload, type) {    //вход пользователя
    const apiKey = 'AIzaSyDKgeuOkCBDoSsZ_NiatpoPpgTU7tt5vCI';
    const hotelsStore = useHotelsStore();
    try {
      // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
      let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        ...payload,
        returnSecureToken: true
      });
      const user = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn
      }
      // console.log(user)
      // hotelsStore.addUserInfoinState(user);
      return true
    }
    catch(err) {
      console.log(err.response)
      let errorM = '';
      switch (err.response.data.error.message) {
        case 'INVALID_EMAIL':
          alert('Неверный Email');
          errorM = 'Неверный email';
          hotelsStore.addError(errorM);
          break;
        case 'EMAIL_NOT_FOUND':
          errorM = 'Такой Email не зарегистрирован';
          hotelsStore.addError(errorM);
          alert('Такой Email не зарегистрирован');
          break;
        case 'MISSING_PASSWORD':
          alert('Пароль не введен');
          break;
        default:
          alert('error');
          break;
      }
      return false
    }
  }
}
const data = new DatabaseService();
export { data };
