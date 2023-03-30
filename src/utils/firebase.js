// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, query, getDoc, getDocs, getFirestore, addDoc, Timestamp, updateDoc } from 'firebase/firestore'
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
  const docRef = doc(db, 'donations', id);
  const docSnap = await getDoc(docRef);

  if(docSnap.exists()) {
    return docSnap.data();
  }
}


export const getDonors = async (id) => {
  const donorsCollection = query(collection(db, 'donations', id, 'donors'));
  const snapshot = await getDocs(donorsCollection);
  return snapshot;
}

export const addDonor = async (id, donor) => {
  try {
      await addDoc(collection(db,'donations',id,'donors'), {
      ...donor,
      created_at: Timestamp.now(),
    });

  } catch(e) {
    console.log(e);
  }
}

export const updateTotalDonation = async (id, totalDonation) => {
  const docRef = doc(db, 'donations', id);
  try {
    await updateDoc(docRef, {
      progressFund : totalDonation,
    })
  } catch(e) {
    console.log(e);
  }
}


export const getArtikel = async () => {
  const artikelCollection = query(collection(db, 'artikel'));
  const snapshot = await getDocs(artikelCollection);
  return snapshot;
}

export const getContentArtikel = async (id) => {
  const docContent = doc(db, 'artikel', id);
  const docSnap = await getDoc(docContent);
  return docSnap.data();
}

export const getKontribusi = async () => {
  const kontribusiCollection = query(collection(db, 'kontribusi'));
  const snapshot = await getDocs(kontribusiCollection);
  return snapshot;
}

export const getVideo = async () => {
  const videoCollection = query(collection(db, 'video'));
  const snapshot = await getDocs(videoCollection);
  return snapshot;
}

export const getContentVideo = async (id) => {
  const docContent = doc(db, 'video', id);
  const docSnap = await getDoc(docContent);
  return docSnap.data();
}