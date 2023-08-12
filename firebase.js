// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg520lX-KsV5_xm4j3wfkj-XTHTKjWshY",
  authDomain: "laundary-app-de31b.firebaseapp.com",
  projectId: "laundary-app-de31b",
  storageBucket: "laundary-app-de31b.appspot.com",
  messagingSenderId: "979478297460",
  appId: "1:979478297460:web:66f3322bf8248a53ebca21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {auth, db};
