// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgTaiv-KUPwbS6bxqG77skdnQSRfJE8KU",
  authDomain: "proyecto2-react-4a77c.firebaseapp.com",
  projectId: "proyecto2-react-4a77c",
  storageBucket: "proyecto2-react-4a77c.appspot.com",
  messagingSenderId: "232432199097",
  appId: "1:232432199097:web:9a2cef14ab6579ca064268"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app); 








