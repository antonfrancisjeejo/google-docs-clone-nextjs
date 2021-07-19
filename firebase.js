import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCg8i3Ac1McdiSa6p_GGBplywdAGHj2U4g",
  authDomain: "docs-nextjs-clone.firebaseapp.com",
  projectId: "docs-nextjs-clone",
  storageBucket: "docs-nextjs-clone.appspot.com",
  messagingSenderId: "13215224992",
  appId: "1:13215224992:web:1b12209c455415fa70a5c5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, timestamp };
