// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAX3FhRoqcQ7BHj0ov2-70O7cofIK8_-44",
    authDomain: "arcamini-71aa8.firebaseapp.com",
    projectId: "arcamini-71aa8",
    storageBucket: "arcamini-71aa8.appspot.com",
    messagingSenderId: "733999719398",
    appId: "1:733999719398:web:3bc762257b95dde4dc6c27"
  };

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);