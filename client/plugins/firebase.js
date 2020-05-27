import firebase from "firebase/app";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDiM5aq6fQ0tlOAx712b10s7hyv5EWEFFU",
  authDomain: "aesthetics-in-jewelry.firebaseapp.com",
  databaseURL: "https://aesthetics-in-jewelry.firebaseio.com",
  projectId: "aesthetics-in-jewelry",
  storageBucket: "aesthetics-in-jewelry.appspot.com",
  messagingSenderId: "636659443278",
  appId: "1:636659443278:web:84b6ee71d95ac57660451f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

export default firebase;
