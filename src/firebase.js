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