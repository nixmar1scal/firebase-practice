// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHDTpMgcQXT3izJtDHGFHBT1Uqg1FK48c",
  authDomain: "fir-practice-3de7f.firebaseapp.com",
  projectId: "fir-practice-3de7f",
  storageBucket: "fir-practice-3de7f.firebasestorage.app",
  messagingSenderId: "568266596062",
  appId: "1:568266596062:web:e083dd5380196d9f6d6c4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();