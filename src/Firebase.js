import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMQczVJEC2aF3VxcxSwLM3hhh_oNAU5QE",
  authDomain: "clonedin-68f20.firebaseapp.com",
  projectId: "clonedin-68f20",
  storageBucket: "clonedin-68f20.appspot.com",
  messagingSenderId: "312808477151",
  appId: "1:312808477151:web:9bc005ea6b7b0a4011346a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
