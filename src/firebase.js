// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNZ6KC3iS0vM_0zr2OSKE76zb-fMCIhhs",
    authDomain: "blog-1a501.firebaseapp.com",
    projectId: "blog-1a501",
    storageBucket: "blog-1a501.appspot.com",
    messagingSenderId: "130921925104",
    appId: "1:130921925104:web:fc18fdcf4270766fd9f535",
    measurementId: "G-G74T3EKHB5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db }
