// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfmKxmaeGDiTiCO3zch2r738NOcLk8P6A",
  authDomain: "doctor-chamber-53e5b.firebaseapp.com",
  projectId: "doctor-chamber-53e5b",
  storageBucket: "doctor-chamber-53e5b.appspot.com",
  messagingSenderId: "140815925959",
  appId: "1:140815925959:web:f363b00ed1eed00f1cf4e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
