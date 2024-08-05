import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Importez Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCpt93BgKiGbX9bep1MhNWrIfFkBCbTOEo",
  authDomain: "portfolio-f5928.firebaseapp.com",
  projectId: "portfolio-f5928",
  storageBucket: "portfolio-f5928.appspot.com",
  messagingSenderId: "263446320732",
  appId: "1:263446320732:web:a3710274fab15eace4f899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initialisez Firestore
export const db = getFirestore(app);
