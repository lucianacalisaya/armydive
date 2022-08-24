import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDypfoyadTEiSadiJfgEDkYmTzNLXvakx8",
  authDomain: "armydivebackend.firebaseapp.com",
  projectId: "armydivebackend",
  storageBucket: "armydivebackend.appspot.com",
  messagingSenderId: "880099148648",
  appId: "1:880099148648:web:3f38f29936e39954684cdd"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);