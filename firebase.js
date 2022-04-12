import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA9jX13j6EgI2Yrx_uR1KHt6syX-VbUwyc",
  authDomain: "fb-clone-615a3.firebaseapp.com",
  projectId: "fb-clone-615a3",
  storageBucket: "fb-clone-615a3.appspot.com",
  messagingSenderId: "765335210057",
  appId: "1:765335210057:web:6c8559f8da479b4dad5798",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
