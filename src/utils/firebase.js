// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtCgn8xdmrnj8ZTE5zp8g5BogP0o7bG2o",
  authDomain: "menstruaction-b5dd1.firebaseapp.com",
  projectId: "menstruaction-b5dd1",
  storageBucket: "menstruaction-b5dd1.appspot.com",
  messagingSenderId: "726366381968",
  appId: "1:726366381968:web:fdbd1e1b21b390df523515",
  measurementId: "G-9GR7C0FS7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);