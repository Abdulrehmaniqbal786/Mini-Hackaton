// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCyw1sdEPCy1eBOcesXAnz_GqB2KX42iQ",
  authDomain: "fir-authentication-mb.firebaseapp.com",
  databaseURL: "https://fir-authentication-mb-default-rtdb.firebaseio.com",
  projectId: "fir-authentication-mb",
  storageBucket: "fir-authentication-mb.appspot.com",
  messagingSenderId: "879954695766",
  appId: "1:879954695766:web:5cf62e00e66e59fe90cdf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
