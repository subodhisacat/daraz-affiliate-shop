// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY!,
  authDomain: process.env.AUTH_DOMAIN!,
  projectId: process.env.PROJECT_ID!,
  storageBucket: process.env.SBUCKET!,
  messagingSenderId: process.env.MSID!,
  appId: process.env.AID!,
  // 🚫 measurementId is optional and not needed here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
