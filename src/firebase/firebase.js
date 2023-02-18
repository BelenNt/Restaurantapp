import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH0GcWOilvAGhySZu4-ckplyEm1yHfbi0",
  authDomain: "reservacion-eec17.firebaseapp.com",
  projectId: "reservacion-eec17",
  storageBucket: "reservacion-eec17.appspot.com",
  messagingSenderId: "128552931069",
  appId: "1:128552931069:web:aaa887ce5eac1c28d5f894"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);