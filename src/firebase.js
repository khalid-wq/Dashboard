
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard1-ec9b4.firebaseapp.com",
  projectId: "dashboard1-ec9b4",
  storageBucket: "dashboard1-ec9b4.appspot.com",
  messagingSenderId: "500559345548",
  appId: "1:500559345548:web:f9b3b15292a0cb134f48a9"
};


const app = initializeApp(firebaseConfig);