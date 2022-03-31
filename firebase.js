import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9jX13j6EgI2Yrx_uR1KHt6syX-VbUwyc",
  authDomain: "fb-clone-615a3.firebaseapp.com",
  projectId: "fb-clone-615a3",
  storageBucket: "fb-clone-615a3.appspot.com",
  messagingSenderId: "765335210057",
  appId: "1:765335210057:web:6c8559f8da479b4dad5798",
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
