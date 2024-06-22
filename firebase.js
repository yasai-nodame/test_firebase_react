// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCme5h4q90OTt0mzHVae62LYP1pQGaY5uo",
    authDomain: "my-project-8ecd0.firebaseapp.com",
    projectId: "my-project-8ecd0",
    storageBucket: "my-project-8ecd0.appspot.com",
    messagingSenderId: "119126571354",
    appId: "1:119126571354:web:6fc9024b4771f636d01b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;