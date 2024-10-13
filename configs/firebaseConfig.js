// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "car-dakho.firebaseapp.com",
    projectId: "car-dakho",
    storageBucket: "car-dakho.appspot.com",
    messagingSenderId: "749141142524",
    appId: "1:749141142524:web:f849e802a21cc57544e079",
    measurementId: "G-7MK45N7SX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);