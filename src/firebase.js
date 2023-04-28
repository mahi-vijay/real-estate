// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_42Lg4JATcm13rCPizdB5nitCz-fcAg8",
  authDomain: "realtor-6ee3f.firebaseapp.com",
  projectId: "realtor-6ee3f",
  storageBucket: "realtor-6ee3f.appspot.com",
  messagingSenderId: "915474331364",
  appId: "1:915474331364:web:04ee02cf026017697c5ef1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()





/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_A5tZA88nESvFRG0EYO0nJfrzE8FX3yg",
  authDomain: "real-estate-react-afc10.firebaseapp.com",
  projectId: "real-estate-react-afc10",
  storageBucket: "real-estate-react-afc10.appspot.com",
  messagingSenderId: "658971185462",
  appId: "1:658971185462:web:1442db17835f3cfe982397",
  measurementId: "G-G3NQ904RC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/