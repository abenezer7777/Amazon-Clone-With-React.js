// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdjTo3XsW2tA4dRXCeI-ZaF1S5U7wb64s",
  authDomain: "pro-ec052.firebaseapp.com",
  projectId: "pro-ec052",
  storageBucket: "pro-ec052.appspot.com",
  messagingSenderId: "567380860632",
  appId: "1:567380860632:web:db88cecef34189e691c1ad",
  measurementId: "G-HFC238FEXR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
