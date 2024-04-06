import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDdpR6sHADylkZggYqfV1uA3wkA6BKkAjk",
  authDomain: "miniblog-b34e9.firebaseapp.com",
  projectId: "miniblog-b34e9",
  storageBucket: "miniblog-b34e9.appspot.com",
  messagingSenderId: "120501521573",
  appId: "1:120501521573:web:e96eed4696bddcf518114c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// iniciando firestore
const db = getFirestore(app)

export { db }