
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk8WIt3T5aaFJjBh6khODWF3Hckblw_eA",
  authDomain: "house-marketplace-app-63379.firebaseapp.com",
  projectId: "house-marketplace-app-63379",
  storageBucket: "house-marketplace-app-63379.appspot.com",
  messagingSenderId: "698703857154",
  appId: "1:698703857154:web:aeec15b2e0ac02d8e5891b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()