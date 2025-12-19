// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl5gLNJwcnzaFKUQK0sIQeM37JNTYCDu0",
  authDomain: "waila2d.firebaseapp.com",
  projectId: "waila2d",
  storageBucket: "waila2d.firebasestorage.app",
  messagingSenderId: "1081820237488",
  appId: "1:1081820237488:web:2761ac241beb320c03f575",
  measurementId: "G-WN6SWMFKLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
