import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIBxClDVfzkfG3_irCXOl26buG02-OMOI",
  authDomain: "e-com-grocery.firebaseapp.com",
  projectId: "e-com-grocery",
  storageBucket: "e-com-grocery.firebasestorage.app",
  messagingSenderId: "697862994897",
  appId: "1:697862994897:web:396158f8861dfd57eafef0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Firestore services
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
