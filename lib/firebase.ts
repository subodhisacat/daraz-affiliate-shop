// lib/firebase.ts
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAW4YTnl5wNnj56VF581FGGnorlemEAMOg",
  authDomain: "daraz-affiliate-shop.firebaseapp.com",
  projectId: "daraz-affiliate-shop",
  storageBucket: "daraz-affiliate-shop.firebasestorage.app",
  messagingSenderId: "683798779812",
  appId: "1:683798779812:web:b3d5014414610265ff9331"
  // 🚫 measurementId is optional and not needed here
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
