
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDykwwm05rQJxF3pcRw4cSmYwVzzXpP-I",
  authDomain: "musicfy-dev-4b663.firebaseapp.com",
  projectId: "musicfy-dev-4b663",
  storageBucket: "musicfy-dev-4b663.firebasestorage.app",
  messagingSenderId: "50410470173",
  appId: "1:50410470173:web:222695fe40e0295078fff4"
};
// función que se usa en "src/index.js".
export const initFirebase =initializeApp(firebaseConfig);