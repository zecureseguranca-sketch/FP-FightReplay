import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAmX0qyVM6J6rHijg0uMwPRv9uIIZaUcVo",
  authDomain: "vilalances.firebaseapp.com",
  projectId: "vilalances",
  storageBucket: "vilalances.firebasestorage.app",
  messagingSenderId: "416309619900",
  appId: "1:416309619900:web:fdd76c14fe7987820834b9",
  measurementId: "G-X9F2RSDPMK"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
