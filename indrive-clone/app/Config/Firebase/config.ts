import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDdyP_SVNsKsPI9Niq1brg1vKQ113NYX_Y",
  authDomain: "drive-app-bb8d1.firebaseapp.com",
  projectId: "drive-app-bb8d1",
  storageBucket: "drive-app-bb8d1.firebasestorage.app",
  messagingSenderId: "527775119053",
  appId: "1:527775119053:web:713178afa6ab644d77db84",
  measurementId: "G-CF3MBLRMF4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const firebase = 