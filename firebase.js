import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCyFgjAoGy_-KEcgv3-1JmP1gbKtFuup88",
  authDomain: "jiu-views.firebaseapp.com",
  projectId: "jiu-views",
  storageBucket: "jiu-views.firebasestorage.app",
  messagingSenderId: "138259652796",
  appId: "1:138259652796:web:78ba886c99e9502413b0b9",
  measurementId: "G-1WSG8T2KXW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);