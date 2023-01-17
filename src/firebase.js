// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9ai5TN5v3W0o8x0yKk6yuoCMMEkh8GUU",
  authDomain: "project-c00b2.firebaseapp.com",
  projectId: "project-c00b2",
  storageBucket: "project-c00b2.appspot.com",
  messagingSenderId: "192651522274",
  appId: "1:192651522274:web:58b839d328ca2b8a7c2ebb",
  measurementId: "G-MZFW7PDQG0"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db, auth};
