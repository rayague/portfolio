import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpt93BgKiGbX9bep1MhNWrIfFkBCbTOEo",
  authDomain: "portfolio-f5928.firebaseapp.com",
  projectId: "portfolio-f5928",
  storageBucket: "portfolio-f5928.appspot.com",
  messagingSenderId: "263446320732",
  appId: "1:263446320732:web:a3710274fab15eace4f899"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Initialiser le stockage

export { db, storage };
