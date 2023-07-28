import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2ATGc4CZd70Zu_FwqqD3zC3rCah-wHzU",
  authDomain: "shopping-zone-1dd10.firebaseapp.com",
  projectId: "shopping-zone-1dd10",
  storageBucket: "shopping-zone-1dd10.appspot.com",
  messagingSenderId: "1084785214858",
  appId: "1:1084785214858:web:4c7ccdecb49aa255813473",
  measurementId: "G-VGDVQ8SE4B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);