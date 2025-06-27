// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW4YTnl5wNnj56VF581FGGnorlemEAMOg",
  authDomain: "daraz-affiliate-shop.firebaseapp.com",
  projectId: "daraz-affiliate-shop",
  storageBucket: "daraz-affiliate-shop.firebasestorage.app",
  messagingSenderId: "683798779812",
  appId: "1:683798779812:web:b3d5014414610265ff9331",
  measurementId: "G-TWF382H755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
