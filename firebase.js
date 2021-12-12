import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDddYS469BRo8zQiCSYj_rQY2apQOOBW6I",
  authDomain: "docs-clone-nextjs-100ad.firebaseapp.com",
  projectId: "docs-clone-nextjs-100ad",
  storageBucket: "docs-clone-nextjs-100ad.appspot.com",
  messagingSenderId: "557291989122",
  appId: "1:557291989122:web:f8042a59be42c2bb30ac9b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, timestamp };
