// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBa9H51UDdQu924lZv8w2CbrV_joam1ns",
  authDomain: "netflix-react-yt-4814f.firebaseapp.com",
  projectId: "netflix-react-yt-4814f",
  storageBucket: "netflix-react-yt-4814f.appspot.com",
  messagingSenderId: "554654245546",
  appId: "1:554654245546:web:25d30ce6bca072b403e6d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)