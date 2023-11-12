// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//! firebase console settings bölümünden firebaseconfig ayarlarını al

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbMQCrPgDY3JXC6tPy-t5Ax91-QUZ8Rzk",
  authDomain: "movie-app-5b5a0.firebaseapp.com",
  projectId: "movie-app-5b5a0",
  storageBucket: "movie-app-5b5a0.appspot.com",
  messagingSenderId: "420854716411",
  appId: "1:420854716411:web:caa67fee219a38c8ec5d5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);