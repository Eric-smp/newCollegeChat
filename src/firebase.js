// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaMNI9nMtlcYxuciyTo3rm6W1idrsTZ-g",
  authDomain: "react-chat-b7a34.firebaseapp.com",
  projectId: "react-chat-b7a34",
  storageBucket: "react-chat-b7a34.appspot.com",
  messagingSenderId: "541884774301",
  appId: "1:541884774301:web:757a362dd77c2efd866174",
  measurementId: "G-78VZSN6NBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);