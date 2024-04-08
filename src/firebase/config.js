// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCTGP4nwRDAfW3sfxOXvtKJ2UT4PsMIzfY',
  authDomain: 'vjglassmoldings.firebaseapp.com',
  projectId: 'vjglassmoldings',
  storageBucket: 'vjglassmoldings.appspot.com',
  messagingSenderId: '492270754114',
  appId: '1:492270754114:web:bf71f1359432cb0faa90db',
  measurementId: 'G-FQC7WGSFT0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);
const db = getFirestore(app);

export { projectFirestore, projectStorage, db };
