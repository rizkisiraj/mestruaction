// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getCountFromServer, getDoc, getFirestore } from 'firebase/firestore'
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

const db = getFirestore(app);

export const getDonation = async (id) => {
  const docRef = doc(db, 'donations', '36SE08AW4A9pP03wgWaQ');
  const docSnap = await getDoc(docRef);

  if(docSnap.exists()) {
    return docSnap.data();
  }
}

export const getAmountOfDonors = async (id) => {
  const donorsCollection = collection(db, 'donations', '36SE08AW4A9pP03wgWaQ', 'donors');
  const snapshot = await getCountFromServer(donorsCollection);
  return snapshot.data().count;
}