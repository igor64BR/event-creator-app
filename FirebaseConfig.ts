import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3UeC8iP-X9hrLkBhJ0Yp05RIPeakyFhA",
  authDomain: "signinapp-8ae38.firebaseapp.com",
  projectId: "signinapp-8ae38",
  storageBucket: "signinapp-8ae38.firebasestorage.app",
  messagingSenderId: "882273415852",
  appId: "1:882273415852:web:61d5874f31539596482509"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);