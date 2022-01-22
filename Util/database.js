import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1Fg84UpGqIHKwJLT5VfSqv0d9d68ANZc",
  authDomain: "full-stack-zumba.firebaseapp.com",
  projectId: "full-stack-zumba",
  storageBucket: "full-stack-zumba.appspot.com",
  messagingSenderId: "936725613872",
  appId: "1:936725613872:web:7c159830852e34c1528cf5",
  measurementId: "G-9N2CPMDZHR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
