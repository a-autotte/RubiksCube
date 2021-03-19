import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA4ZyIQgIfc-KRy8RvNv-JFvw6Ej06Fkfo",
    authDomain: "rubikscube-e0658.firebaseapp.com",
    projectId: "rubikscube-e0658",
    storageBucket: "rubikscube-e0658.appspot.com",
    messagingSenderId: "103849716026",
    appId: "1:103849716026:web:6ed3df708963cd161cc803",
    measurementId: "G-M6VVT2RH37"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
