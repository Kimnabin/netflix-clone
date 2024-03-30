import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDUycZEuzF9bbNVKQpUJ9yKjeAQsHHC9Q4",
  authDomain: "react-netflix-clone-48023.firebaseapp.com",
  projectId: "react-netflix-clone-48023",
  storageBucket: "react-netflix-clone-48023.appspot.com",
  messagingSenderId: "850602241352",
  appId: "1:850602241352:web:4514e53a227172815a177d",
  measurementId: "G-KK91WEF1M9",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
