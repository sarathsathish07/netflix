import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBa9H51UDdQu924lZv8w2CbrV_joam1ns",
  authDomain: "netflix-react-yt-4814f.firebaseapp.com",
  projectId: "netflix-react-yt-4814f",
  storageBucket: "netflix-react-yt-4814f.appspot.com",
  messagingSenderId: "554654245546",
  appId: "1:554654245546:web:25d30ce6bca072b403e6d3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)