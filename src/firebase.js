// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl0KxGAQjlzIKIpjuIm8ld8ibGPo-iTcs",
  authDomain: "superchat-a253a.firebaseapp.com",
  projectId: "superchat-a253a",
  storageBucket: "superchat-a253a.appspot.com",
  messagingSenderId: "308385047460",
  appId: "1:308385047460:web:83e3e907f1bbdf1a77d731",
  measurementId: "G-YPM7XJEXXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);