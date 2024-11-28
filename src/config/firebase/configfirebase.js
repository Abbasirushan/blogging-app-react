import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA963cZKe1SfBwvBPWmo0DozaKEAvUhvyE",
  authDomain: "blog-app-66d17.firebaseapp.com",
  projectId: "blog-app-66d17",
  storageBucket: "blog-app-66d17.firebasestorage.app",
  messagingSenderId: "460904230701",
  appId: "1:460904230701:web:0588745610af625b396da4",
  measurementId: "G-2DVY4WS5GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize authentication 
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);