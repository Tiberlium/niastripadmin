// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-

import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Initialize Firebase

export const App = firebase.initializeApp({
  apiKey: "AIzaSyAXjvk9We_JSMyI9Vd3aVvPTNh-1O5qbGs",
  authDomain: "xplorenias.firebaseapp.com",
  projectId: "xplorenias",
  storageBucket: "xplorenias.appspot.com",
  messagingSenderId: "991380823586",
  appId: "1:991380823586:web:7379c1d267624b9f9cf47b",
});

export const storages = firebase.storage();

export const db = firebase.firestore();
